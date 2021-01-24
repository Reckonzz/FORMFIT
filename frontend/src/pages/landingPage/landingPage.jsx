import React, { useEffect } from "react"

// import * as posenet from '@tensorflow-models/posenet';

const LandingPage = () => {
    
    useEffect(()=> {
        posenet.load().then(function(net) {
            const pose = net.estimateSinglePose(imageElement, {
              flipHorizontal: true
            });
            return pose;
          }).then(function(pose){
            console.log(pose);
          })
    },[])
    return(
        <div>Landing Page</div>
    )
}

export default LandingPage