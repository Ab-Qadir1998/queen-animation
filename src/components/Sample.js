import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css'
export const Sample = () => {
  const { ref, animate } = useWebAnimations();

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      // The target will follow the mouse cursor
      animate({
        keyframes: { transform: `translate(${e.clientX}px, ${e.clientY}px)` },
        timing: { duration: 500, fill: "forwards" },
      });
    });
  }, [animate]);

  return (
    <div className="container">
      <div className="target" ref={ref} />
    </div>
  );
};