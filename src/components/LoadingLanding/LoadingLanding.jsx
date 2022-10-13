import React from "react";
import Lottie from "lottie-react";
import loadingLanding from "../../assets/LottieFiles/movie-loading.json";

const LoadingLanding = () => {
  return (
    <div className="h-screen w-full px-8 bg-gray-800 flex justify-center items-center">
      <Lottie
        style={{ height: "300px", width: "300px" }}
        animationData={loadingLanding}
      />
      ;
    </div>
  );
};

export default LoadingLanding;
