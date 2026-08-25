// Temp diagnostic: capture hydration mismatch console output from /careers via CDP.
const { spawn } = require("child_process");
const os = require("os");
const path = require("path");
const fs = require("fs");

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9333;
const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), "cdp-profile-"));
const TARGET = process.argv[2] || "http://localhost:3000/careers";

const chrome = spawn(CHROME, [
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${userDataDir}`,
  "--headless=new",
  "--no-first-run",
  "--no-default-browser-check",
  "--disable-extensions",
  "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getWsUrl() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      const j = await res.json();
      if (j.webSocketDebuggerUrl) return j.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error("Chrome CDP did not come up");
}

(async () => {
  const wsUrl = await getWsUrl();
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const logs = [];

  const send = (method, params = {}, sessionId) =>
    new Promise((resolve) => {
      const msgId = ++id;
      pending.set(msgId, resolve);
      ws.send(JSON.stringify({ id: msgId, method, params, sessionId }));
    });

  await new Promise((r) => ws.addEventListener("open", r));

  let sessionId;
  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
      return;
    }
    if (msg.method === "Runtime.consoleAPICalled") {
      const text = (msg.params.args || [])
        .map((a) => (a.value !== undefined ? a.value : a.description || a.preview?.description || ""))
        .join(" ");
      logs.push({ type: msg.params.type, text });
    }
    if (msg.method === "Runtime.exceptionThrown") {
      logs.push({ type: "exception", text: msg.params.exceptionDetails?.exception?.description || "" });
    }
  });

  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  ({ sessionId } = await send("Target.attachToTarget", { targetId, flatten: true }));

  await send("Runtime.enable", {}, sessionId);
  await send("Page.enable", {}, sessionId);

  // Simulate an extension (Grammarly-style) stamping attributes onto <body>
  // before React hydrates, which is what the error text blames.
  if (process.env.SIMULATE_EXTENSION === "1") {
    await send("Page.addScriptToEvaluateOnNewDocument", {
      source: `
        (function stamp() {
          if (!document.body) return void setTimeout(stamp, 1);
          document.body.setAttribute("data-new-gr-c-s-check-loaded", "14.1270.0");
          document.body.setAttribute("data-gr-ext-installed", "");
        })();
      `,
    }, sessionId);
  }

  await send("Page.navigate", { url: TARGET }, sessionId);

  await sleep(9000);

  const probe = await send("Runtime.evaluate", {
    expression: `JSON.stringify({
      url: location.href,
      title: document.title,
      bodyClass: document.body.className,
      htmlClass: document.documentElement.className,
      colorScheme: document.documentElement.style.colorScheme,
      h1: document.querySelector('h1')?.textContent || null,
      jobCount: document.querySelectorAll('h3').length,
      totalLogs: ${logs.length}
    })`,
    returnByValue: true,
  }, sessionId);
  console.log("=== PAGE PROBE ===");
  console.log(probe.result?.value);
  console.log("\ntotal console messages captured:", logs.length, "\n");

  console.log("=== CONSOLE OUTPUT (" + TARGET + ") ===\n");
  for (const l of logs) {
    if (/hydrat|did not match|didn't match|tree hydrated|Warning/i.test(l.text)) {
      console.log(`[${l.type}]\n${l.text}\n${"-".repeat(70)}`);
    }
  }
  console.log("\n=== ALL error/warning types seen ===");
  for (const l of logs) {
    if (l.type === "error" || l.type === "warning" || l.type === "exception") {
      console.log(`[${l.type}] ${l.text.slice(0, 400)}`);
    }
  }

  ws.close();
  chrome.kill();
  process.exit(0);
})().catch((e) => {
  console.error("FAILED:", e.message);
  chrome.kill();
  process.exit(1);
});
