import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25 });

  // Using useEffect to ensure this runs after the component has mounted
  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view, controls]); // Dependencies: run the effect when view or controls change

  return [element, controls];
};