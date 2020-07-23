import React from 'react'
import GroundImg from '../images/bg_earth.jpg'
import Block1 from '../images/pawn-small.png'
import Block2 from '../images/r_pawn_upright_small.png'
import Queen from '../images/1.gif'
import useWebAnimations from "@wellyshen/use-web-animations";

import '../App.css'
 const Ground = () => {
    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
          {transform: "translateX(150%)"}, 
          {transform: "translateX(-150%)"},
        ],
        timing: {
          duration: 5000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          easing: "ease-in-out", // Use a fancy timing function
          playbackRate : -2 
        }
    }
    );
    const speedUp = () => {
      const animation = getAnimation();
      animation.updatePlaybackRate(animation.playbackRate * 1.25);
    };
    return (
        <div className="ground" onClick={()=>speedUp()}>
          {/* <button >speed</button> */}
                <div className="ground-bg">
                <img src={GroundImg} alt="ground"/>
                </div>
                
                <div className="block" ref={ref}>
                    <div>
                    <img src={Block1} alt="block"/>
                    </div>
                    <div>
                    <img src={Block2} alt="block"/>
                    </div>
                </div>
                <div className="queen">
                <img src={Queen} alt="queen"/>
                </div>
        </div>
    )
}

export default Ground; 