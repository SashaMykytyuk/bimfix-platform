import { useState } from "react";
import { authApi } from "../app/authApi";
import { useNavigate, Link } from "react-router-dom";
import { routes } from "../app/routes";

export function RegisterPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await authApi.register(email, password);
      nav(routes.cabinet); // після реєстрації у тебе вже SignInAsync -> cookie є
    } catch (e: any) {
      setErr(e.message || "Register error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h1>Register</h1>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10 }}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={loading}>{loading ? "..." : "Create account"}</button>
        {err && <div style={{ color: "crimson" }}>{err}</div>}
      </form>
      <p style={{ marginTop: 12 }}>
        Уже є акаунт? <Link to={routes.login}>Увійти</Link>
      </p>
    </div>
  );
}