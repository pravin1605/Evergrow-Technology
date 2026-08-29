// import { BrowserRouter } from "react-router-dom";

// import AppRoutes from "./routes/AppRoutes";

// import MainLayout from "./components/layout/MainLayout/MainLayout";


// function App() {

//   return (
//     <BrowserRouter>

//       <MainLayout>

//         <AppRoutes />

//       </MainLayout>

//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import MainLayout from "./components/layout/MainLayout/MainLayout";

import ScrollToTop from "./components/ui/ScrollToTop/ScrollToTop";


function App() {

  return (
    <BrowserRouter>

      <ScrollToTop />

      <MainLayout>

        <AppRoutes />

      </MainLayout>

    </BrowserRouter>
  );
}


export default App;