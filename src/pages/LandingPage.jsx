import React, { useEffect, useState } from "react";
import LoadingLanding from "../components/LoadingLanding/LoadingLanding";

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
        <div>
          <h1 className="text-red-700 text-3xl">Landing</h1>
        </div>
      )}
    </>
  );
};

export default LandingPage;
