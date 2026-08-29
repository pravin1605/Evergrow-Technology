import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import navigation from "../../../data/site/navigation";

import "./Navbar.css";


function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);


  /* =====================================================
     LOCK BACKGROUND WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {

    document.body.style.overflow =
      mobileOpen
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow = "";
    };

  }, [mobileOpen]);


  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMobileMenu = () => {

    setMobileOpen(false);

    setOpenDropdown(null);

  };


  /* =====================================================
     TOGGLE MOBILE DROPDOWN
  ===================================================== */

  const toggleDropdown = (label) => {

    setOpenDropdown(
      openDropdown === label
        ? null
        : label
    );

  };


  /* =====================================================
     TOGGLE MOBILE MENU
  ===================================================== */

  const toggleMobileMenu = () => {

    if (mobileOpen) {

      closeMobileMenu();

    } else {

      setMobileOpen(true);

    }

  };


  return (
    <header className="navbar">

      <div className="navbar-container">


        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMobileMenu}
        >

          <img
            className="navbar-logo-image"
            src="/images/brand/evergrow-logo.png.png"
            alt="Evergrow Technologies"
          />

        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="navbar-desktop">

          {navigation.main.map((item) => (

            <div
              className={
                item.dropdown
                  ? "navbar-item has-dropdown"
                  : "navbar-item"
              }
              key={item.label}
            >

              {item.dropdown ? (

                <>

                  <NavLink
                    to={item.path}
                    className="navbar-link"
                  >

                    {item.label}

                    <ChevronDown size={14} />

                  </NavLink>


                  <div className="navbar-dropdown">

                    <div className="navbar-dropdown-inner">

                      {item.dropdown.map(
                        (dropdownItem) => (

                          <NavLink
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="navbar-dropdown-link"
                          >

                            <span>
                              {dropdownItem.label}
                            </span>

                            <ArrowUpRight size={14} />

                          </NavLink>

                        )
                      )}

                    </div>

                  </div>

                </>

              ) : (

                <NavLink
                  to={item.path}
                  className="navbar-link"
                >

                  {item.label}

                </NavLink>

              )}

            </div>

          ))}

        </nav>


        {/* =================================================
            DESKTOP CTA
        ================================================= */}

        <Link
          to={navigation.cta.path}
          className="navbar-cta"
        >

          <span>
            {navigation.cta.label}
          </span>

          <ArrowUpRight size={16} />

        </Link>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label={
            mobileOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >

          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}

        </button>

      </div>


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      <div
        id="mobile-navigation"
        className={
          mobileOpen
            ? "navbar-mobile-menu open"
            : "navbar-mobile-menu"
        }
        aria-hidden={!mobileOpen}
      >

        <div className="navbar-mobile-inner">


          {navigation.main.map((item) => (

            <div
              className={
                item.dropdown
                  ? "navbar-mobile-item navbar-mobile-item-dropdown"
                  : "navbar-mobile-item"
              }
              key={item.label}
            >


              {/* =================================================
                  ITEMS WITH DROPDOWN
              ================================================= */}

              {item.dropdown ? (

                <>

                  <div className="navbar-mobile-dropdown-header">


                    {/* -----------------------------------------
                        MAIN PAGE LINK

                        Clicking "Services" goes directly to
                        /services.

                        Clicking "Industries" goes directly to
                        /industries.
                    ----------------------------------------- */}

                    <NavLink
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="navbar-mobile-link navbar-mobile-main-link"
                    >

                      {item.label}

                    </NavLink>


                    {/* -----------------------------------------
                        SEPARATE ARROW BUTTON

                        ONLY this button opens/closes submenu.
                    ----------------------------------------- */}

                    <button
                      type="button"
                      className="navbar-mobile-dropdown-toggle"
                      onClick={() =>
                        toggleDropdown(item.label)
                      }
                      aria-label={
                        openDropdown === item.label
                          ? `Close ${item.label} submenu`
                          : `Open ${item.label} submenu`
                      }
                      aria-expanded={
                        openDropdown === item.label
                      }
                    >

                      <ChevronDown
                        size={18}
                        className={
                          openDropdown === item.label
                            ? "rotate"
                            : ""
                        }
                      />

                    </button>

                  </div>


                  {/* =================================================
                      SUBMENU

                      IMPORTANT:
                      "View all Services" and
                      "View all Industries" have been removed.
                  ================================================= */}

                  <div
                    className={
                      openDropdown === item.label
                        ? "navbar-mobile-dropdown open"
                        : "navbar-mobile-dropdown"
                    }
                  >

                    {item.dropdown.map(
                      (dropdownItem) => (

                        <NavLink
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={closeMobileMenu}
                          className="navbar-mobile-dropdown-link"
                        >

                          {dropdownItem.label}

                        </NavLink>

                      )
                    )}

                  </div>

                </>

              ) : (


                /* =================================================
                   NORMAL MOBILE LINK
                ================================================= */

                <NavLink
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="navbar-mobile-link"
                >

                  {item.label}

                </NavLink>

              )}

            </div>

          ))}


          {/* =================================================
              MOBILE CTA
          ================================================= */}

          <Link
            to={navigation.cta.path}
            onClick={closeMobileMenu}
            className="navbar-mobile-cta"
          >

            {navigation.cta.label}

            <ArrowUpRight size={17} />

          </Link>


        </div>

      </div>

    </header>
  );

}


export default Navbar;