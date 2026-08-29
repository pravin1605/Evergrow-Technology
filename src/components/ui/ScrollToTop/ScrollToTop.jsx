import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {

  const {
    pathname,
    hash,
  } = useLocation();


  useEffect(() => {

    /*
     * If the URL contains a hash,
     * allow the browser to navigate
     * to that specific section.
     *
     * Example:
     *
     * /about#team
     */
    if (hash) {

      const element =
        document.getElementById(
          hash.substring(1)
        );


      if (element) {

        requestAnimationFrame(() => {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        });

        return;
      }

    }


    /*
     * Normal route navigation:
     *
     * /services
     * /industries
     * /work/project
     * /about
     *
     * Always start the new page
     * from the top.
     */
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

  }, [pathname, hash]);


  return null;
}


export default ScrollToTop;