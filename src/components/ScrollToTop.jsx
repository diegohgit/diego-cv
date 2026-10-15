import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Scroll to top every time the user navigates betwen modules.
export default function ScrollToTop(){
  const { pathname } = useLocation();

  useEffect(() => {

    const main = document.querySelector('main');

    if(main){
      main.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }
  }, [pathname]);

  return null;
}