import React from "react";
import Chart from "react-apexcharts";


const PredictionResults = () => {
  const data = {
    series: [
      {
        name: "Prediction",
        data: [0, 50, 30, 90, 40, 120, 100,10,30,100,10,20,30,20,100,110,120,140,20,30,0],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#ba6ffc"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ba6ffc"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
          "2018-09-19T07:30:00.000Z",
          "2018-09-19T08:30:00.000Z",
          "2018-09-19T09:30:00.000Z",
          "2018-09-19T10:30:00.000Z",
          "2018-09-19T11:30:00.000Z",
          "2018-09-19T12:30:00.000Z",
          "2018-09-19T13:30:00.000Z",
          "2018-09-19T14:30:00.000Z",
          "2018-09-19T15:30:00.000Z",
          "2018-09-19T16:30:00.000Z",
          "2018-09-19T17:30:00.000Z",
          "2018-09-19T18:30:00.000Z",
          "2018-09-19T19:30:00.000Z",
          "2018-09-19T20:30:00.000Z",
          
          
        ],
      },
      yaxis: {
        show: true
      },
      toolbar:{
        show: true
      }
    },
  };
  return <div className="PredictionResults">
        <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

export default PredictionResults;
