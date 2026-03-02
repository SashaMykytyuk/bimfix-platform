import { NavLink, Outlet } from "react-router-dom";
import { routes } from "./routes";
import { useTranslation } from "react-i18next";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-lg ${
    isActive ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
  }`;

export function Layout() {
  const { t, i18n } = useTranslation();

  function setLang(lng: "ua" | "en" | "ru") {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  }

  return (
    <div style={{ fontFamily: "system-ui, Arial" }}>
      <header
        style={{
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          background: "white",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "14px 16px",
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: 800 }}>BIMFIX</div>

          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <nav
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <NavLink to={routes.home} className={linkClass}>
                {t("nav.home")}
              </NavLink>
              <NavLink to={routes.services} className={linkClass}>
                {t("nav.services")}
              </NavLink>
              <NavLink to={routes.about} className={linkClass}>
                {t("nav.about")}
              </NavLink>
              <NavLink to={routes.contacts} className={linkClass}>
                {t("nav.contacts")}
              </NavLink>
            </nav>

            <div style={{ display: "flex", gap: 6 }}>
              <button onClick={() => setLang("ua")} style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: 10, background: "white" }}>
                UA
              </button>
              <button onClick={() => setLang("en")} style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: 10, background: "white" }}>
                EN
              </button>
              <button onClick={() => setLang("ru")} style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: 10, background: "white" }}>
                RU
              </button>
            </div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px" }}>
        <Outlet />
      </main>

      <footer style={{ borderTop: "1px solid #eee" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "20px 16px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ color: "#666" }}>© {new Date().getFullYear()} BIMFIX</div>
          <div style={{ display: "flex", gap: 12 }}>
            <NavLink to={routes.offer} className={linkClass}>
              {t("nav.offer")}
            </NavLink>
            <NavLink to={routes.privacyPolicy} className={linkClass}>
              {t("nav.privacy")}
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}