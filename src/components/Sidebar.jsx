import React, { useState } from "react";
import "./Sidebar.css";
import {
    FaAngleDown,
    FaHome,
    FaChartBar,
    FaImages,
    FaUserFriends,
    FaAngleDoubleLeft,
    FaPlus,
    FaQuestionCircle,
    FaCog,
} from "react-icons/fa";
import mamaearthIcon from "../assets/mamaearth.jpeg"; // Adjust the path as necessary

const Sidebar = () => {
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuVisible(!isSubmenuVisible);
    };

    return (
        <div className="sidebar-container">
            <div className="header-sidebar">
                <div className="logo-logo">
                    <img src={mamaearthIcon} alt="Perfora Logo" />
                </div>
                <div className="brand-section">
                    <div className="brand-icon">
                        <span className="brand-initials">SS</span>
                    </div>
                    <div className="brand-name">
                        <span>Test_brand</span>
                    </div>
                </div>
                <div className="arrow">
                    <button className="arrow-button">
                        <FaAngleDoubleLeft className="icon-small" />
                    </button>
                </div>
            </div>

            <div className="mainsidebar">
                {/* Left Sidebar */}
                <div className="left-sidebar">
                    <img src={mamaearthIcon} alt="Icon 1" />
                    <img src={mamaearthIcon} alt="Icon 2" />
                    <div className="add-icon">
                        <button className="icon-button">
                            <FaPlus />
                        </button>
                    </div>

                    <div className="footer-menu">
                        <div className="people">
                            <FaUserFriends />
                        </div>
                        <div className="brand-icon">
                            <span className="brandperple">SS</span>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="right-sidebar">
                    <div className="inner-sidebar">
                        <div className="sidebar-item">
                            <FaHome className="icon" />
                            <span>Overview</span>
                        </div>
                        <div className="channels">
                            <div className="sidebar-item">
                                <FaChartBar className="icon" />
                                <span>Channels</span>
                                <FaAngleDown className="icon-small" />
                            </div>
                            <div className="submenu">
                                <div className="submenu-item">Meta Ads</div>
                                <div className="submenu-item">Google Ads</div>
                                <div className="submenu-item-active">Quick Commerce</div>
                            </div>
                        </div>

                        <div className="sidebar-item" onClick={toggleSubmenu}>
                            <FaImages className="icon" />
                            <span>Creatives</span>
                        </div>

                        <div className="footer-menu">
                            <div className="sidebar-item">
                                <FaQuestionCircle className="icon" />
                                <span>Help</span>
                            </div>
                            <div className="sidebar-item">
                                <FaCog className="icon" />
                                <span>Settings</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
