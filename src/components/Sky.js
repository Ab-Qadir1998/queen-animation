import React from 'react'
import CloudImg from '../images/cloud.gif'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css'
 const Sky = () => {
    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
          {transform: "translateX(100%)"}, 
          {transform: "translateX(-100%)"},
        ],
        timing: {
          duration: 7000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          easing: "ease-in-out", // Use a fancy timing function
          playbackRate : -2
        }
    }
    )
    const speedUp = ()=> {
      const animation = getAnimation();
      animation.updatePlaybackRate(animation.playbackRate * 1.25)
    }
    return (
        <div className="sky" onClick={speedUp}>
          <div ref={ref}>
          <img src={CloudImg} alt="cloud" />
          <img src={CloudImg} alt="cloud"/>
          <img src={CloudImg} alt="cloud"/>
          </div>
        </div>
    )
}

export default Sky; 