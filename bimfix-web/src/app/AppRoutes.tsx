import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { routes } from "./routes";

import { HomePage } from "../pages/HomePage";
import { RestorationEcuPage } from "../pages/RestorationEcuPage";
import { CodingPage } from "../pages/CodingPage";
import { ProgrammingPage } from "../pages/ProgrammingPage";
import { RemoteCodingPage } from "../pages/RemoteCodingPage";
import { ChiptuningPage } from "../pages/ChiptuningPage";
import { RetrofitPage } from "../pages/RetrofitPage";
import { ServicesPage } from "../pages/ServicesPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactsPage } from "../pages/ContactsPage";
import { OfferPage } from "../pages/OfferPage";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { CabinetPage } from "../pages/CabinetPage";
import { ToolsPage } from "../pages/ToolsPage";



export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.restorationEcu} element={<RestorationEcuPage />} />
        <Route path={routes.coding} element={<CodingPage />} />
        <Route path={routes.programming} element={<ProgrammingPage />} />
        <Route path={routes.remoteCoding} element={<RemoteCodingPage />} />
        <Route path={routes.chiptuning} element={<ChiptuningPage />} />
        <Route path={routes.retrofit} element={<RetrofitPage />} />
        <Route path={routes.services} element={<ServicesPage />} />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.contacts} element={<ContactsPage />} />
        <Route path={routes.offer} element={<OfferPage />} />
        <Route path={routes.privacyPolicy} element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.register} element={<RegisterPage />} />
        <Route path={routes.cabinet} element={<CabinetPage />} />
        <Route path={routes.tools} element={<ToolsPage />} />
      </Route>
    </Routes>
  );
}