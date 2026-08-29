// import { Outlet } from "react-router-dom";

// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// import "./MainLayout.css";

// function MainLayout() {
//   return (
//     <div className="main-layout">
//       <Navbar />

//       <main className="main-content">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default MainLayout;



import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./MainLayout.css";


function MainLayout({ children }) {

  return (
    <div className="main-layout">

      <Navbar />

      <main className="main-content">
        {children}
      </main>

      <Footer />

    </div>
  );
}


export default MainLayout;