import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../lotties/kiss-of-the-heart.json";

export const LottieAnimation = () => {
      const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        };
      return (
          <div
              style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width:"100%"
              }}
          >
            <img width={"100%"} src='https://mir-s3-cdn-cf.behance.net/project_modules/hd/b6e0b072897469.5bf6e79950d23.gif'/>
              
          </div>
      );
}
