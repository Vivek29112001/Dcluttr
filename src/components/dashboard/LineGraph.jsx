import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import chartData from "../data/sourceData.json";
import "./Graphs.css";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { RxQuestionMarkCircled } from "react-icons/rx";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const dotStyle = (color) => ({
  display: "inline-block",
  width: "10px",
  height: "10px",
  backgroundColor: color,
  borderRadius: "50%",
  marginRight: "5px"
});

const LineGraph = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(chartData.lineChartData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="LineGraph">
      <div className="Sales">
        <div className="header-sales">
          <p>Sales (MRP)</p>
          <RxQuestionMarkCircled className="questionmark" />
        </div>
        <div className="line-container">
          <div className="container-line-header">
            <div className="left-h-container">
              <h3>125.48</h3>
            </div>
            <div className="right-h-container">
              <div className="p-right">
                <p>
                  <span style={{ color: "green", marginRight: "5px" }}>▲</span>
                  <span style={{ color: "green" }}>2.4%</span>
                </p>
              </div>
              <div className="p2-right">
                <p>
                  <span >vs 119.69 last month</span>
                </p>
              </div>

            </div>

          </div>
          <Line data={data} options={data.options} />
          <div className="month">
            <p>
              <span style={dotStyle("red")}></span>
              This Month
            </p>
            <p>
              <span style={dotStyle("green")}></span>
              Last Month
            </p>
          </div>
        </div>

      </div>
      <div className="Sales">
        <div className="header-sales">
          <p>Total Quantity Sold</p>
          <RxQuestionMarkCircled className="questionmark" />
        </div>
        <div className="line-container">
          <div className="container-line-header">
            <div className="left-h-container">
              <h3>125.49</h3>
            </div>
            <div className="right-h-container">
              <div className="p-right">
                <p>
                  <span style={{ color: "green", marginRight: "5px" }}>▲</span>
                  <span style={{ color: "green" }}>2.4%</span>
                </p>
              </div>
              <div className="p2-right">
                <p>
                  <span >vs 119.69 last month</span>
                </p>
              </div>

            </div>

          </div>
          <Line data={data} options={data.options} />
          <div className="month">
            <p>
              <span style={dotStyle("red")}></span>
              This Month
            </p>
            <p>
              <span style={dotStyle("green")}></span>
              Last Month
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LineGraph;
