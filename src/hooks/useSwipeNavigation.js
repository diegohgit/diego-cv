
import { useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const routes = ["/", "/experience", "/portfolio"];

export default function useSwipeNavigation(threshold = 70) {

  const navigate   = useNavigate();
  const location   = useLocation();
  const touchStart = useRef(null);



  //Get coordinates of the first touch.
  const onTouchStart = useCallback((event) => {

    //Get coordinates of the first touch.
    const touch = event.touches[0];

    //Store coordinates into touchStart.
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  }, []);



  //Calculate if touch was made to left or right and navigate.
  const onTouchEnd = useCallback(
    (event) => {
      if (!touchStart.current) return;

      const start = touchStart.current;
      touchStart.current = null;

      //event.changedTouches[0] retrieves information as soon as
      //the finger leaves the screen to read its final position.
      const touch  = event.changedTouches[0];
      const deltaX = start.x - touch.clientX;
      const deltaY = start.y - touch.clientY;

      //Ignore short movements and vertical scrolling.
      if (
        Math.abs(deltaX) < threshold ||
        Math.abs(deltaX) < Math.abs(deltaY) * 1.3
      ) {
        return;
      }

      const currentIndex = routes.indexOf(location.pathname);

      //Ignore routes not listed in this navigation.
      if (currentIndex === -1) return;

      //Swipe left = next route; swipe right = previous route.
      const nextIndex = currentIndex + (deltaX > 0 ? 1 : -1);

      //Don't navigate beyond the first or last page.
      if (nextIndex < 0 || nextIndex >= routes.length) return;

      navigate(routes[nextIndex]);

    },[location.pathname, navigate, threshold]);



  //Reset touchStart.current in case the touch event is canceled.
  const onTouchCancel = useCallback(() => {
    touchStart.current = null;
  }, []);



  return {
    onTouchStart,
    onTouchEnd,
    onTouchCancel,
  };
}
