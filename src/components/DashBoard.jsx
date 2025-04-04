import React from 'react';
import { AiOutlineLineChart } from 'react-icons/ai'; // Line graph icon
import { MdToggleOn } from 'react-icons/md'; // Toggle switch icon
import './DashBoard.css';
import Blinkit from '../assets/Blinkit.png';
import Zepto from '../assets/Zepto.png';
import zometo from '../assets/zometo.png';
import LineGraph from './dashboard/LineGraph.jsx';
import DoughGraph from "./dashboard/Depounc.jsx"
import TableChart from './dashboard/TableChart.jsx';
import Table2 from './dashboard/Table2.jsx';
import { FaAngleDown } from "react-icons/fa";

const DashBoard = () => {
    return (
        <div className="Dashboard-container">
            <div className="header">
                <h3>Quick Commerce</h3>
                <div className="right-header">
                    <div className="icons">
                        <AiOutlineLineChart className="icon graph-icon" />
                        <MdToggleOn className="icon toggle-icon" />
                    </div>
                    <div className="date-range">
                        <p className='p-data-range'>Aug 01, 2024 - Aug 03, 2024</p>
                    </div>
                </div>


            </div>
            <div className="low-header">
                <div className="logoes">
                    <div className="logo-1">
                        <img
                            src={Blinkit} // Replace with the actual Perfora logo path
                            alt="Perfora Logo"
                        />
                        <span>Blinket</span>
                    </div>
                    <div className="logo">
                        <img
                            src={Zepto} // Replace with the actual Perfora logo path
                            alt="Perfora Logo"
                        />
                        <span>Zepto</span>
                    </div>
                    <div className="logo">
                        <img
                            src={zometo} // Replace with the actual Perfora logo path
                            alt="Perfora Logo"
                        />
                        <span>Zemoto</span>
                    </div>
                </div>

            </div>
            <div className="main-graph">
                <div className="left-section">
                    <LineGraph />
                </div>
                <div className="right-section" style={{ width: "100%", height: "100%" }}>
                    <DoughGraph />
                </div>
            </div>
            <div className="table-graph">
                <div className='header'>
                    <div className="h-left">
                        <h3>SKU level Data</h3>
                        <p>Analytics for all your SKUs</p>
                    </div>
                    <div className="right">
                        <button className='button-table'>Filters(1)<FaAngleDown /></button>
                    </div>
                </div>
                <TableChart />
                <div className="top-row">
                    <div className="h-left">
                        <h3>City level Data</h3>
                        <p>Analytics for all your Cities</p>
                    </div>
                    <div className="right">
                        <button className='button-table'>Filters(1)<FaAngleDown /></button>
                    </div>
                </div>
                <Table2 />
            </div>
        </div >
    );
}

export default DashBoard;