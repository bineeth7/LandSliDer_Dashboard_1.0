import React from "react";
import Cards from "../Cards/Cards";
import PredictionResults from "../PredictionResults/PredictionResults";

import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h2>Dashboard</h2>
      <Cards />
      <h3 className="predict pt-2rem">Prediction Results</h3>
      <div className="pResults"><PredictionResults /></div>
        
    </div>
  );
};

export default MainDash;
