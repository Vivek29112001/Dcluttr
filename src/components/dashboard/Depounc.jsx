import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from "chart.js";
import "./Graphs.css";
import sourceData from "../data/sourceData.json";

ChartJS.register(CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const DoughGraph = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(sourceData.doughnutChartData);
  }, []);

  if (!data) return <p>Loading...</p>;

  const options = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="dough-graph-container" >
      <div className="container-1-1">
      <div className="dough-graph-header">
        <h5>Top Cities</h5>
        <RxQuestionMarkCircled style={{marginRight: "55px"}} />
      </div>
      <div className="dough-graph-chart">
        <Doughnut data={data.doughnutData} options={options} className="doughnut-chart" />
        <div className="dough-graph-center">
          <p className="center-amount">{data.centerText.amount}</p>
          <p className="center-change">{data.centerText.change}</p>
        </div>
      </div>
      <div className="dough-graph-table">
        <table>
          <tbody>
            {data.cities.map((city, index) => (
              <tr key={index}>
                <td>{city.name}</td>
                <td>{city.value}</td>
                <td>{city.percentage || "-"}</td>
                <td style={{ color: city.color }}>{city.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default DoughGraph;
