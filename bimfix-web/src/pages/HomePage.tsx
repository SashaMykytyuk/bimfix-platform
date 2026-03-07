import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../app/routes";
import { useTranslation } from "react-i18next";

type Card = { title: string; desc: string; to?: string };

export function HomePage() {
  const { t } = useTranslation();

  const isNarrow = typeof window !== "undefined" && window.innerWidth < 980;

  const S: Record<string, React.CSSProperties> = {
    page: { display: "grid", gap: 28 },

    hero: {
      position: "relative",
      overflow: "hidden",
      border: "1px solid #eee",
      borderRadius: 28,
      padding: "40px 30px",
      background:
        "radial-gradient(900px 450px at 70% -10%, rgba(0,0,0,0.10), transparent 55%), radial-gradient(700px 380px at 20% 110%, rgba(0,0,0,0.08), transparent 55%), linear-gradient(180deg, #ffffff 0%, #fbfbfb 100%)",
    },

    heroGrid: {
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: 22,
      alignItems: "center",
    },

    eyebrow: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 12px",
      borderRadius: 999,
      border: "1px solid #e9e9e9",
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      color: "#333",
      fontSize: 13,
    },

    dot: { width: 8, height: 8, borderRadius: 999, background: "#111", opacity: 0.9 },

    h1: {
      margin: "14px 0 0 0",
      fontSize: 52,
      lineHeight: 1.03,
      letterSpacing: -1.4,
      color: "#0b0b0b",
    },

    sub: {
      margin: "14px 0 0 0",
      color: "#555",
      fontSize: 16,
      lineHeight: 1.7,
      maxWidth: 640,
    },

    chips: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 18 },

    chip: {
      padding: "8px 10px",
      borderRadius: 999,
      border: "1px solid #ededed",
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      fontSize: 13,
      color: "#333",
    },

    ctas: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22, alignItems: "center" },

    primary: {
      padding: "12px 16px",
      borderRadius: 14,
      background: "#111",
      color: "#fff",
      textDecoration: "none",
      fontWeight: 800,
      boxShadow: "0 14px 34px rgba(0,0,0,0.18)",
      transform: "translateY(0)",
      transition: "transform 160ms ease, box-shadow 160ms ease",
      display: "inline-flex",
      gap: 10,
      alignItems: "center",
    },

    secondary: {
      padding: "12px 16px",
      borderRadius: 14,
      border: "1px solid #e2e2e2",
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      color: "#111",
      textDecoration: "none",
      fontWeight: 800,
      transition: "transform 160ms ease",
      display: "inline-flex",
      gap: 10,
      alignItems: "center",
    },

    rightCard: {
      borderRadius: 22,
      border: "1px solid #eee",
      background: "rgba(255,255,255,0.78)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      padding: 18,
      display: "grid",
      gap: 12,
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
    },

    metric: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "12px 12px",
      borderRadius: 16,
      border: "1px solid #efefef",
      background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
    },

    metricLabel: { color: "#666", fontSize: 12 },
    metricValue: { fontWeight: 900, fontSize: 16, letterSpacing: -0.2, color: "#111" },

    note: {
      borderRadius: 18,
      border: "1px dashed #e3e3e3",
      background: "rgba(255,255,255,0.75)",
      padding: 16,
      color: "#555",
      lineHeight: 1.6,
      fontSize: 13,
    },

    section: {
      borderRadius: 28,
      border: "1px solid #eee",
      background: "linear-gradient(180deg, #ffffff 0%, #fbfbfb 100%)",
      padding: "26px 22px",
    },

    sectionHeader: {
      display: "flex",
      alignItems: "end",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap",
    },

    h2: { margin: 0, fontSize: 24, letterSpacing: -0.3, color: "#111" },

    p: { margin: "8px 0 0 0", color: "#666", lineHeight: 1.65, maxWidth: 820 },

    miniBtn: {
      width: "fit-content",
      padding: "10px 12px",
      borderRadius: 14,
      border: "1px solid #e2e2e2",
      background: "rgba(255,255,255,0.8)",
      textDecoration: "none",
      color: "#111",
      fontWeight: 900,
      fontSize: 13,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
    },

    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 14,
      marginTop: 18,
    },

    grid4: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: 14,
      marginTop: 18,
    },

    card: {
      borderRadius: 22,
      border: "1px solid #eee",
      background: "linear-gradient(180deg, #fff, #fafafa)",
      padding: 18,
      display: "grid",
      gap: 8,
      transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    },

    cardTitle: { margin: 0, fontSize: 16, letterSpacing: -0.2, color: "#111" },
    cardDesc: { margin: 0, color: "#666", fontSize: 13, lineHeight: 1.55 },

    list: { margin: 0, paddingLeft: 18, color: "#444", lineHeight: 1.8 },

    split: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 18 },

    galleryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: 12,
      marginTop: 18,
    },

    ph: {
      borderRadius: 18,
      border: "1px solid #eee",
      background:
        "radial-gradient(500px 240px at 30% 20%, rgba(0,0,0,0.08), transparent 55%), linear-gradient(180deg, #ffffff, #f6f6f6)",
      minHeight: 110,
    },

    bottomCta: {
      borderRadius: 28,
      border: "1px solid #eee",
      padding: "26px 22px",
      background:
        "radial-gradient(900px 450px at 10% -10%, rgba(0,0,0,0.10), transparent 60%), linear-gradient(180deg, #ffffff 0%, #fbfbfb 100%)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap",
    },
  };

  const services: Card[] = [
    { title: "Відновлення блоків", desc: "ECU/TCU/FRM/BDC: діагностика та відновлення функцій.", to: routes.restorationEcu },
    { title: "Кодування", desc: "FDL/VO кодування, активації, конфігурації під авто.", to: routes.coding },
    { title: "Програмування", desc: "Оновлення прошивок, flash-сесії, калібрування.", to: routes.programming },
    { title: "Віддалене кодування", desc: "Remote сесії: швидко, без виїзду, з супроводом.", to: routes.remoteCoding },
    { title: "Чіптюнінг", desc: "Stage-рішення з акуратною логікою та без ризиків.", to: routes.chiptuning },
    { title: "Дооснащення", desc: "Retrofit OEM: опції, комплектації, адаптації.", to: routes.retrofit },
  ];

  const online: Card[] = [
    { title: "NCD", desc: "NCD 2.0 / підготовка конфігів" },
    { title: "CBB", desc: "CBB request / пакети" },
    { title: "1AA", desc: "1AA / 170 запити" },
    { title: "KDS", desc: "KDS request" },
    { title: "FSC", desc: "FSC repair codes" },
    { title: "SFA", desc: "SFA request" },
    { title: "Token", desc: "Debugging token" },
    { title: "FA", desc: "FA request" },
  ];

  const why: string[] = [
    "OEM-підхід і акуратні конфіги",
    "Фокус на BMW (F/G серії)",
    "Remote coding з супроводом",
    "Прозорий результат і комунікація",
    "Без “рандомних” рішень",
    "Післяробота: пояснення та рекомендації",
  ];

  const hoverCss = `
    .bmx-card:hover { transform: translateY(-4px); box-shadow: 0 18px 52px rgba(0,0,0,0.10); border-color: #e4e4e4; }
    .bmx-primary:hover { transform: translateY(-1px); box-shadow: 0 18px 38px rgba(0,0,0,0.22); }
    .bmx-secondary:hover { transform: translateY(-1px); }
  `;

  return (
    <div style={S.page}>
      <style>{hoverCss}</style>

      {/* HERO */}
      <section style={S.hero}>
        <div style={{ ...S.heroGrid, gridTemplateColumns: isNarrow ? "1fr" : S.heroGrid.gridTemplateColumns }}>
          <div>
            <div style={S.eyebrow}>
              <span style={S.dot} />
              BMW Electronics • Coding • Programming • Retrofit
            </div>

            <h1 style={S.h1}>{t("home.title")}</h1>

            <p style={S.sub}>
              {t("home.subtitle")} Преміальний підхід: OEM-логіка, чисті конфіги, надійний результат.
            </p>

            <div style={S.chips}>
              <span style={S.chip}>BMW F / G серії</span>
              <span style={S.chip}>Remote coding</span>
              <span style={S.chip}>OEM-підхід</span>
              <span style={S.chip}>Післясупровід</span>
            </div>

            <div style={S.ctas}>
              <Link to={routes.contacts} className="bmx-primary" style={S.primary}>
                Записатись <span aria-hidden>→</span>
              </Link>

              <Link to={routes.services} className="bmx-secondary" style={S.secondary}>
                Усі сервіси <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div style={S.rightCard}>
            <div style={S.metric}>
              <div style={S.metricLabel}>Локація</div>
              <div style={S.metricValue}>Рівне</div>
            </div>
            <div style={S.metric}>
              <div style={S.metricLabel}>Формат</div>
              <div style={S.metricValue}>On-site / Remote</div>
            </div>
            <div style={S.metric}>
              <div style={S.metricLabel}>Фокус</div>
              <div style={S.metricValue}>BMW електроніка</div>
            </div>

            <div style={S.note}>
              Тут ідеально стане фото BMW/майстерні (дасть “вау”). Поки — стильний блок-заглушка.
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={S.section}>
        <div style={S.sectionHeader}>
          <div>
            <h2 style={S.h2}>Основні послуги</h2>
            <p style={S.p}>
              Структура як на bimfix.com.ua: картки послуг + перехід на сторінки деталей.
            </p>
          </div>
          <Link to={routes.services} style={S.miniBtn}>
            Відкрити все <span aria-hidden>→</span>
          </Link>
        </div>

        <div style={{ ...S.grid3, gridTemplateColumns: isNarrow ? "1fr" : S.grid3.gridTemplateColumns }}>
          {services.map((s) => (
            <div key={s.title} className="bmx-card" style={S.card}>
              <h3 style={S.cardTitle}>{s.title}</h3>
              <p style={S.cardDesc}>{s.desc}</p>
              {s.to ? (
                <Link to={s.to} style={S.miniBtn}>
                  Детальніше <span aria-hidden>→</span>
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* ONLINE SERVICES */}
      <section style={S.section}>
        <div style={S.sectionHeader}>
          <div>
            <h2 style={S.h2}>Online BMW Services</h2>
            <p style={S.p}>
              Твоя сильна фішка: NCD / CBB / 1AA та інші (8 пунктів). Ведемо на сторінку Services.
            </p>
          </div>
          <Link to={routes.services} style={S.miniBtn}>
            Відкрити сервіси <span aria-hidden>→</span>
          </Link>
        </div>

        <div style={{ ...S.grid4, gridTemplateColumns: isNarrow ? "1fr" : S.grid4.gridTemplateColumns }}>
          {online.map((x) => (
            <div key={x.title} className="bmx-card" style={S.card}>
              <h3 style={S.cardTitle}>{x.title}</h3>
              <p style={S.cardDesc}>{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={S.section}>
        <div style={S.sectionHeader}>
          <div>
            <h2 style={S.h2}>Чому BIMFIX</h2>
            <p style={S.p}>Коротко і по суті — без “полотна” тексту.</p>
          </div>
          <Link to={routes.about} style={S.miniBtn}>
            Про нас <span aria-hidden>→</span>
          </Link>
        </div>

        <div style={{ ...S.split, gridTemplateColumns: isNarrow ? "1fr" : S.split.gridTemplateColumns }}>
          <div className="bmx-card" style={S.card}>
            <h3 style={S.cardTitle}>Переваги</h3>
            <ul style={S.list}>
              {why.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>

          <div className="bmx-card" style={S.card}>
            <h3 style={S.cardTitle}>Як ми працюємо</h3>
            <p style={S.cardDesc}>
              1) Діагностика → 2) Погодження рішення → 3) Виконання → 4) Перевірка → 5) Післясупровід.
            </p>
            <div style={{ marginTop: 10 }}>
              <Link to={routes.contacts} className="bmx-primary" style={S.primary}>
                Написати <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={S.section}>
        <div style={S.sectionHeader}>
          <div>
            <h2 style={S.h2}>Галерея робіт</h2>
            <p style={S.p}>
              Як у прикладі, але компактно. Пізніше підключимо реальні фото і lightbox.
            </p>
          </div>
          <Link to={routes.contacts} style={S.miniBtn}>
            Записатись <span aria-hidden>→</span>
          </Link>
        </div>

        <div style={{ ...S.galleryGrid, gridTemplateColumns: isNarrow ? "repeat(2, minmax(0, 1fr))" : S.galleryGrid.gridTemplateColumns }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bmx-card" style={S.ph} />
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section style={S.bottomCta}>
        <div>
          <h2 style={{ margin: 0, fontSize: 22, letterSpacing: -0.2, color: "#111" }}>
            Готові зробити “як треба”?
          </h2>
          <p style={{ margin: "8px 0 0 0", color: "#666", lineHeight: 1.6 }}>
            Напиши нам — підкажемо рішення і вартість під твою задачу.
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link to={routes.contacts} className="bmx-primary" style={S.primary}>
            Контакти <span aria-hidden>→</span>
          </Link>
          <Link to={routes.services} className="bmx-secondary" style={S.secondary}>
            Сервіси <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}