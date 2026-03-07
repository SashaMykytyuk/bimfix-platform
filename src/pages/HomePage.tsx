import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { routes } from "../app/routes";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 16 }}>
      <h1>{t("home.title")}</h1>
      <p>{t("home.subtitle")}</p>

      <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
        <Link
          to={routes.login}
          style={{ padding: "10px 14px", background: "black", color: "white", borderRadius: 12, textDecoration: "none" }}
        >
          {t("nav.login")}
        </Link>

        <Link
          to={routes.register}
          style={{ padding: "10px 14px", border: "1px solid #ddd", borderRadius: 12, textDecoration: "none", color: "#111" }}
        >
          {t("auth.register")}
        </Link>
      </div>
    </div>
  );
}
