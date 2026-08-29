// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";

// import MainLayout from "../components/layout/MainLayout/MainLayout";

// import Home from "../pages/Home/Home";

// function PlaceholderPage({ title }) {
//     return (
//         <section className="section">
//             <div className="container">

//                 <span className="eyebrow">
//                     Evergrow Technology
//                 </span>

//                 <h1 style={{ marginTop: "20px" }}>
//                     {title}
//                 </h1>

//                 <p
//                     style={{
//                         marginTop: "20px",
//                         maxWidth: "600px",
//                     }}
//                 >
//                     This page is part of the Evergrow website
//                     and will be connected to the final reusable
//                     template.
//                 </p>

//             </div>
//         </section>
//     );
// }

// function AppRoutes() {
//     return (
//         <BrowserRouter>
//             <Routes>

//                 <Route element={<MainLayout />}>

//                     <Route
//                         path="/"
//                         element={<Home />}
//                     />

//                     <Route
//                         path="/industries"
//                         element={
//                             <PlaceholderPage title="Industries" />
//                         }
//                     />

//                     <Route
//                         path="/industries/:slug"
//                         element={
//                             <PlaceholderPage
//                                 title="Industry"
//                             />
//                         }
//                     />

//                     <Route
//                         path="/services"
//                         element={
//                             <PlaceholderPage title="Services" />
//                         }
//                     />

//                     <Route
//                         path="/services/:slug"
//                         element={
//                             <PlaceholderPage
//                                 title="Service"
//                             />
//                         }
//                     />

//                     <Route
//                         path="/work"
//                         element={
//                             <PlaceholderPage title="Our Work" />
//                         }
//                     />

//                     <Route
//                         path="/work/:slug"
//                         element={
//                             <PlaceholderPage
//                                 title="Project"
//                             />
//                         }
//                     />

//                     <Route
//                         path="/products"
//                         element={
//                             <PlaceholderPage title="Products" />
//                         }
//                     />

//                     <Route
//                         path="/products/:slug"
//                         element={
//                             <PlaceholderPage
//                                 title="Product"
//                             />
//                         }
//                     />

//                     <Route
//                         path="/about"
//                         element={
//                             <PlaceholderPage title="About Evergrow" />
//                         }
//                     />

//                     <Route
//                         path="/contact"
//                         element={
//                             <PlaceholderPage title="Let's Talk" />
//                         }
//                     />

//                     <Route
//                         path="*"
//                         element={
//                             <PlaceholderPage title="Page Not Found" />
//                         }
//                     />

//                 </Route>

//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default AppRoutes;



import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";

import Industries from "../pages/Industries/Industries";
import IndustryDetail from "../pages/Industries/IndustryDetail";

import Services from "../pages/Services/Services";
import ServiceDetail from "../pages/Services/ServiceDetail";

import Work from "../pages/Work/Work";
import ProjectDetail from "../pages/Work/ProjectDetail";

import Products from "../pages/Products/Products";
import ProductDetail from "../pages/Products/ProductDetail";

import About from "../pages/Company/About";

import Contact from "../pages/Contact/Contact";

import NotFound from "../pages/NotFound/NotFound";




const AppRoutes = () => {

  return (
    <Routes>

      {/* =========================
          HOME
      ========================= */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* =========================
          INDUSTRIES
      ========================= */}

      <Route
        path="/industries"
        element={<Industries />}
      />

      <Route
        path="/industries/:industrySlug"
        element={<IndustryDetail />}
      />


      {/* =========================
          SERVICES
      ========================= */}

      <Route
        path="/services"
        element={<Services />}
      />

      <Route
        path="/services/:serviceSlug"
        element={<ServiceDetail />}
      />


      {/* =========================
          WORK
      ========================= */}

      <Route
        path="/work"
        element={<Work />}
      />

      <Route
        path="/work/:projectSlug"
        element={<ProjectDetail />}
      />


      {/* =========================
          PRODUCTS
      ========================= */}

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/products/:productSlug"
        element={<ProductDetail />}
      />


      {/* =========================
          COMPANY
      ========================= */}

      <Route
        path="/about"
        element={<About />}
      />


      {/* =========================
          CONTACT
      ========================= */}

      <Route
        path="/contact"
        element={<Contact />}
      />


      {/* =========================
          404
      ========================= */}

      <Route
        path="*"
        element={<NotFound />}
      />


      

    </Routes>
  );
};

export default AppRoutes;