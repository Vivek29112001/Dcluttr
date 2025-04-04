import React from "react";
import "../dashboard/Graphs.css"; // Ensure your CSS is imported
import sourceData from "../data/sourceData.json";

const Table2= () => {
  // Destructure the tableChartData from the JSON file
  const { tableChartData } = sourceData;
  const data = tableChartData;

  // Calculate totals for each dataset column
  const calculateTotal = (dataIndex) =>
    data.datasets[dataIndex].data.reduce((total, value) => total + value, 0);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th rowSpan="2">SKU Name</th>
            <th colSpan="3">Available</th>
            <th colSpan="3">Visibility</th>
          </tr>
          <tr>
            <th>Sales</th>
            <th>Out of Stock (%)</th>
            <th>Total Inventory</th>
            <th>Average Rank</th>
            <th>Est. Traffic (%)</th>
            <th>Est. Impressions</th>
          </tr>
        </thead>
        <tbody>
          {data.labels.map((label, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{label}</td>
                <td>{data.datasets[0].data[index]}</td>
                <td>{data.datasets[1].data[index]}</td>
                <td>{data.datasets[2].data[index]}</td>
                <td>{data.datasets[3].data[index]}</td>
                <td>{data.datasets[4].data[index]}</td>
                <td>{data.datasets[5].data[index]}</td>
              </tr>
              {label === "Choco Bar 100g" &&
                data.subRows &&
                data.subRows[label] &&
                data.subRows[label].map((subRow, subIndex) => (
                  <tr key={`sub-${subIndex}`}>
                    <td></td>
                    <td>{subRow.sales}</td>
                    <td>{subRow.outOfStock}</td>
                    <td>{subRow.totalInventory}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
          {/* Total Row */}
          <tr className="total-row">
            <td className="total-cell">Total</td>
            <td>{calculateTotal(0)}</td>
            <td>{calculateTotal(1)}</td>
            <td>{calculateTotal(2)}</td>
            <td>{calculateTotal(3)}</td>
            <td>{calculateTotal(4)}</td>
            <td>{calculateTotal(5)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table2;