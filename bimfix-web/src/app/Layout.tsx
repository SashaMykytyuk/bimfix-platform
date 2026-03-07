import { NavLink, Outlet, Link } from "react-router-dom";
import { routes } from "./routes";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  padding: "10px 14px",
  borderRadius: 10,
  textDecoration: "none",
  color: isActive ? "#fff" : "#f3f4f6",
  background: isActive ? "#2563eb" : "transparent",
  fontWeight: 500,
  transition: "all 0.2s ease",
});

const dropdownItemStyle: React.CSSProperties = {
  display: "block",
  padding: "12px 14px",
  textDecoration: "none",
  color: "#111827",
  background: "#fff",
  borderBottom: "1px solid #f3f4f6",
  fontSize: 14,
};

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bimfixUserGradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6AA9FF" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="8" r="4" stroke="url(#bimfixUserGradient)" strokeWidth="1.8" />
      <path
        d="M4.5 19.2C5.7 15.9 8.5 14.2 12 14.2C15.5 14.2 18.3 15.9 19.5 19.2"
        stroke="url(#bimfixUserGradient)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3.5H9.2C9.6 3.5 9.9 3.8 10 4.2L10.6 7.1C10.7 7.4 10.6 7.8 10.4 8L8.8 9.6C9.6 11.3 10.8 12.5 12.5 13.3L14.1 11.7C14.4 11.5 14.7 11.4 15.1 11.5L18 12.1C18.4 12.2 18.7 12.5 18.7 12.9V15.5C18.7 16.1 18.2 16.6 17.6 16.6C10.7 16.6 5.5 11.4 5.5 4.6C5.5 4 6 3.5 6.6 3.5Z"
        stroke="#2563EB"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="#2563EB" strokeWidth="1.8" />
      <path
        d="M12 7.8V12L15 13.8"
        stroke="#2563EB"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="#2563EB" strokeWidth="1.8" />
      <path
        d="M5.5 7.5L12 12.5L18.5 7.5"
        stroke="#2563EB"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Layout() {
  const { t, i18n } = useTranslation();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOnlineServicesOpen, setIsOnlineServicesOpen] = useState(false);

  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const onlineServicesMenuRef = useRef<HTMLDivElement | null>(null);

  function setLang(lng: "ua" | "en" | "ru") {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (userMenuRef.current && !userMenuRef.current.contains(target)) {
        setIsUserMenuOpen(false);
      }

      if (servicesMenuRef.current && !servicesMenuRef.current.contains(target)) {
        setIsServicesOpen(false);
      }

      if (onlineServicesMenuRef.current && !onlineServicesMenuRef.current.contains(target)) {
        setIsOnlineServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, Arial", background: "#fff", minHeight: "100vh" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "#fff",
          boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
        }}
      >
        {/* TOP BAR */}
        <div
          style={{
            borderBottom: "1px solid #e5e7eb",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "18px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontSize: 40,
                fontWeight: 900,
                letterSpacing: "-1px",
                color: "#111827",
                lineHeight: 1,
              }}
            >
              BIMFIX
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <PhoneIcon />
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 12, color: "#6b7280" }}>Контакти</span>
                  <a
                    href="tel:+380000000000"
                    style={{
                      textDecoration: "none",
                      color: "#111827",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    +380 XX XXX XX XX
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <ClockIcon />
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 12, color: "#6b7280" }}>Години роботи</span>
                  <span style={{ color: "#111827", fontSize: 16, fontWeight: 600 }}>
                    Пн-Сб: 9:00 - 20:00
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <MailIcon />
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 12, color: "#6b7280" }}>Email</span>
                  <a
                    href="mailto:info@bimfix.com.ua"
                    style={{
                      textDecoration: "none",
                      color: "#111827",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    info@bimfix.com.ua
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NAV BAR */}
        <div
          style={{
            background: "#1f2937",
            borderBottom: "1px solid #111827",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "10px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div style={{ color: "#9ca3af", fontSize: 14 }}>
              BMW coding • programming • retrofit
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <nav
                style={{
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <NavLink to={routes.home} style={navLinkStyle}>
                  {t("nav.home")}
                </NavLink>

                {/* ПОСЛУГИ */}
                <div
                  ref={servicesMenuRef}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    style={{
                      padding: "10px 14px",
                      borderRadius: 10,
                      border: "none",
                      background: isServicesOpen ? "#2563eb" : "transparent",
                      color: "#fff",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    {t("nav.poslugy")} ▾
                  </button>

                  {isServicesOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: 44,
                        left: 0,
                        minWidth: 250,
                        background: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: 14,
                        boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
                        overflow: "hidden",
                        zIndex: 50,
                      }}
                    >
                      <Link to={routes.restorationEcu} style={dropdownItemStyle} onClick={() => setIsServicesOpen(false)}>
                        Відновлення блоків
                      </Link>
                      <Link to={routes.coding} style={dropdownItemStyle} onClick={() => setIsServicesOpen(false)}>
                        Кодування
                      </Link>
                      <Link to={routes.programming} style={dropdownItemStyle} onClick={() => setIsServicesOpen(false)}>
                        Програмування
                      </Link>
                      <Link to={routes.remoteCoding} style={dropdownItemStyle} onClick={() => setIsServicesOpen(false)}>
                        Віддалене кодування
                      </Link>
                      <Link to={routes.chiptuning} style={dropdownItemStyle} onClick={() => setIsServicesOpen(false)}>
                        Чіптюнінг
                      </Link>
                      <Link
                        to={routes.retrofit}
                        style={{ ...dropdownItemStyle, borderBottom: "none" }}
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Дооснащення
                      </Link>
                    </div>
                  )}
                </div>

                {/* СЕРВІСИ */}
                <div
                  ref={onlineServicesMenuRef}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setIsOnlineServicesOpen(true)}
                  onMouseLeave={() => setIsOnlineServicesOpen(false)}
                >
                  <button
                    onClick={() => setIsOnlineServicesOpen((prev) => !prev)}
                    style={{
                      padding: "10px 14px",
                      borderRadius: 10,
                      border: "none",
                      background: isOnlineServicesOpen ? "#2563eb" : "transparent",
                      color: "#fff",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    {t("nav.services")} ▾
                  </button>

                  {isOnlineServicesOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: 44,
                        left: 0,
                        minWidth: 220,
                        background: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: 14,
                        boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
                        overflow: "hidden",
                        zIndex: 50,
                      }}
                    >
                      <Link to={routes.services} style={dropdownItemStyle} onClick={() => setIsOnlineServicesOpen(false)}>
                        Усі сервіси
                      </Link>
                      <Link to="/services/ncd" style={dropdownItemStyle} onClick={() => setIsOnlineServicesOpen(false)}>
                        NCD
                      </Link>
                      <Link to="/services/cbb" style={dropdownItemStyle} onClick={() => setIsOnlineServicesOpen(false)}>
                        CBB
                      </Link>
                      <Link to="/services/1aa" style={dropdownItemStyle} onClick={() => setIsOnlineServicesOpen(false)}>
                        1AA
                      </Link>
                      <Link to="/services/kds" style={dropdownItemStyle} onClick={() => setIsOnlineServicesOpen(false)}>
                        KDS
                      </Link>
                      <Link to="/services/fsc" style={dropdownItemStyle} onClick={() => setIsOnlineServicesOpen(false)}>
                        FSC
                      </Link>
                      <Link to="/services/sfa" style={dropdownItemStyle} onClick={() => setIsOnlineServicesOpen(false)}>
                        SFA
                      </Link>
                      <Link to="/services/token" style={dropdownItemStyle} onClick={() => setIsOnlineServicesOpen(false)}>
                        Token
                      </Link>
                      <Link
                        to="/services/fa"
                        style={{ ...dropdownItemStyle, borderBottom: "none" }}
                        onClick={() => setIsOnlineServicesOpen(false)}
                      >
                        FA
                      </Link>
                    </div>
                  )}
                </div>

                <NavLink to={routes.about} style={navLinkStyle}>
                  {t("nav.about")}
                </NavLink>

                <NavLink to={routes.contacts} style={navLinkStyle}>
                  {t("nav.contacts")}
                </NavLink>
              </nav>

              {/* USER ICON + DROPDOWN */}
              <div style={{ position: "relative" }} ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    border: "1px solid #4b5563",
                    background: isUserMenuOpen ? "rgba(37,99,235,0.08)" : "transparent",
                    boxShadow: isUserMenuOpen ? "0 0 0 1px rgba(37,99,235,0.35)" : "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  aria-label="User menu"
                >
                  <UserIcon />
                </button>

                {isUserMenuOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: 50,
                      right: 0,
                      minWidth: 180,
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: 14,
                      boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
                      overflow: "hidden",
                      zIndex: 50,
                    }}
                  >
                    <Link
                      to={routes.login}
                      onClick={() => setIsUserMenuOpen(false)}
                      style={{
                        display: "block",
                        padding: "12px 14px",
                        textDecoration: "none",
                        color: "#111827",
                        borderBottom: "1px solid #f3f4f6",
                        background: "#fff",
                      }}
                    >
                      {t("nav.login")}
                    </Link>

                    <Link
                      to={routes.register}
                      onClick={() => setIsUserMenuOpen(false)}
                      style={{
                        display: "block",
                        padding: "12px 14px",
                        textDecoration: "none",
                        color: "#111827",
                        background: "#fff",
                      }}
                    >
                      {t("auth.register")}
                    </Link>
                  </div>
                )}
              </div>

              {/* LANG */}
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  onClick={() => setLang("ua")}
                  style={{
                    padding: "8px 10px",
                    border: "1px solid #4b5563",
                    borderRadius: 10,
                    background: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  UA
                </button>

                <button
                  onClick={() => setLang("en")}
                  style={{
                    padding: "8px 10px",
                    border: "1px solid #4b5563",
                    borderRadius: 10,
                    background: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  EN
                </button>

                <button
                  onClick={() => setLang("ru")}
                  style={{
                    padding: "8px 10px",
                    border: "1px solid #4b5563",
                    borderRadius: 10,
                    background: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  RU
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 16px" }}>
        <Outlet />
      </main>

      <footer style={{ borderTop: "1px solid #e5e7eb", background: "#fff" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "20px 16px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ color: "#6b7280" }}>© {new Date().getFullYear()} BIMFIX</div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <NavLink to={routes.offer} style={{ color: "#374151", textDecoration: "none" }}>
              {t("nav.offer")}
            </NavLink>

            <NavLink to={routes.privacyPolicy} style={{ color: "#374151", textDecoration: "none" }}>
              {t("nav.privacy")}
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}