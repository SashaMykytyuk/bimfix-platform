import { useState } from "react";
import { authApi } from "../app/authApi";
import { useNavigate, Link } from "react-router-dom";
import { routes } from "../app/routes";

export function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await authApi.login(email, password, rememberMe);
      nav(routes.cabinet);
    } catch (e: any) {
      setErr(e.message || "Login error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h1>Login</h1>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10 }}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          Remember me
        </label>
        <button disabled={loading}>{loading ? "..." : "Login"}</button>
        {err && <div style={{ color: "crimson" }}>{err}</div>}
      </form>
      <p style={{ marginTop: 12 }}>
        Нема акаунта? <Link to={routes.register}>Реєстрація</Link>
      </p>
    </div>
  );
}