import React, { useEffect, useState } from "react";
import LoadingLanding from "../components/LoadingLanding/LoadingLanding";
import videoLanding from "../assets/eterno-resplandor-de-una-mente-sin-recuerdos.mp4";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingLanding />
      ) : (
        <div className="relative h-screen w-screen">
          <video
            className="object-cover h-full w-full"
            src={videoLanding}
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute top-0 left-0 h-full w-full bg-gray-800/40"></div>
          <div className="absolute top-0 left-0 h-full w-full px-4 md:px-8 flex flex-col justify-center items-center gap-16 md:gap-12">
            <h1 className="text-[#FE9D12] font-bold italic text-3xl md:text-5xl text-center">
              <Typewriter
                options={{
                  strings: ["Te recomiendo una peli para tu noche..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <Link to="/home">
              <button className="px-16 md:px-20 py-2 text-white text-xl font-bold rounded-xl shadow-md shadow-gray-900 bg-gradient-to-r from-red-900 via-red-600 to-purple-900">
                Iniciar
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
