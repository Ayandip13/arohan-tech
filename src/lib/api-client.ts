/**
 * A highly scalable, interceptor-ready fetch wrapper for future backend integrations.
 * 
 * Features prepared for future implementation:
 * - JWT Token injection
 * - Automatic token refresh
 * - Standardized error handling
 * - Request timeouts
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.arohantech.com/v1";

interface FetchOptions extends RequestInit {
  requireAuth?: boolean;
}

export async function apiClient<T>(
  endpoint: string,
  { requireAuth = false, ...customConfig }: FetchOptions = {}
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (requireAuth) {
    // Future auth token retrieval logic
    // const token = getAuthToken();
    // if (token) headers.Authorization = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method: customConfig.method || "GET",
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    ...customConfig,
  };

  if (customConfig.body) {
    config.body = JSON.stringify(customConfig.body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return data as T;
  } catch (error) {
    // Global error logging for Sentry/Datadog
    console.error(`[API Error] ${endpoint}:`, error);
    throw error;
  }
}
