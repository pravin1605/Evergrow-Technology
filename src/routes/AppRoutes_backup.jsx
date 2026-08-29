import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../components/layout/MainLayout/MainLayout";

import Home from "../pages/Home/Home";
import Industries from "../pages/Industries/Industries";
import Services from "../pages/Services/Services";
import Work from "../pages/Work/Work";
import Contact from "../pages/Contact/Contact";
import About from "../pages/Company/About";
import NotFound from "../pages/NotFound/NotFound";
import ServiceDetail from "../pages/Services/ServiceDetail";

import Products
  from "../pages/Products/Products";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            MAIN WEBSITE LAYOUT
        ========================== */}
        <Route element={<MainLayout />}>

          {/* =========================
              HOME
          ========================== */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* =========================
              INDUSTRIES
          ========================== */}

          {/* All Industries */}
          <Route
            path="/industries"
            element={<Industries />}
          />

          {/* Individual Industry */}
          <Route
            path="/industries/:industrySlug"
            element={<Industries />}
          />

          {/* =========================
              SERVICES
          ========================== */}

          {/* All Services */}
          <Route
            path="/services"
            element={<Services />}
          />

          {/* Individual Service */}
          <Route
            path="/services/:serviceSlug"
            element={<Services />}
          />

          {/* =========================
              WORK / PROJECTS
          ========================== */}

          {/* All Projects */}
          <Route
            path="/work"
            element={<Work />}
          />

          {/* Individual Project */}
          <Route
            path="/work/:projectId"
            element={<Work />}
          />

          {/* =========================
              COMPANY
          ========================== */}

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* =========================
              404
          ========================== */}

          <Route
            path="*"
            element={<NotFound />}
          />

          <Route
            path="/products/:productId"
            element={<Products />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/services/:serviceSlug"
            element={<ServiceDetail />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;