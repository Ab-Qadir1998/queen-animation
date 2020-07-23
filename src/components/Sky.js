import React, { useRef } from 'react'
import SkyImg from '../images/sky.jpg'
import CloudImg from '../images/cloud.gif'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css'
 const Sky = () => {
    const { ref, playState, getAnimation } = useWebAnimations({
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
          {/* <button >speed Up</button> */}
          <div ref={ref}>
          <img src={CloudImg} alt="cloud image" />
          <img src={CloudImg} alt="cloud image"/>
          <img src={CloudImg} alt="cloud image"/>
          </div>
        </div>
    )
}

export default Sky; 