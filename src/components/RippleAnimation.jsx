import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const RippleAnimation = ({
  width = 30,
  height = 30,
  speed = 0.5,
  style = {},
}) => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    fetch("/ripple-animation.json")
      .then((response) => response.json())
      .then((data) => {
        if (animationContainer.current) {
          // Destroy previous instance if it exists
          if (animationInstance.current) {
            animationInstance.current.destroy();
          }

          // Create new animation instance
          animationInstance.current = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: data,
          });

          // Set the speed
          animationInstance.current.setSpeed(speed);
        }
      })
      .catch((error) => console.error("Error loading animation:", error));

    // Cleanup
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, [speed]); // Re-run when speed changes

  const defaultStyle = {
    width: width,
    height: height,
    ...style,
  };

  return <div ref={animationContainer} style={defaultStyle}></div>;
};

export default RippleAnimation;
