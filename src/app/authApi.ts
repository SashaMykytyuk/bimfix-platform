const API = import.meta.env.VITE_API_BASE ?? "http://localhost:5085";

async function req(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers ?? {}) },
    credentials: "include", // важливо для cookie
  });

  const text = await res.text();
  let data: any = null;
  try { data = text ? JSON.parse(text) : null; } catch {}

  if (!res.ok) throw new Error(data?.message || "Request failed");
  return data;
}

export const authApi = {
  register: (email: string, password: string) =>
    req("/api/auth/register", { method: "POST", body: JSON.stringify({ email, password }) }),

  login: (email: string, password: string, rememberMe = true) =>
    req("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password, rememberMe }) }),

  logout: () => req("/api/auth/logout", { method: "POST" }),
};