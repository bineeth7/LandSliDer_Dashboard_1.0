import React from "react";
import Table from "../Table/Table";
import "./RightSide.css";
import Weathers from '../Weather/Weathers'

const RightSide = () => {
  return (
    <div className="RightSide">
      <button className="start" onClick={console.log("Started")}>▶</button>
      <div className="Table"> <Table /></div> 

      <div className="Weathers"><Weathers/></div>
      </div>
  
    
  );
};

export default RightSide;



