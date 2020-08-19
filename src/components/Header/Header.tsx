import React from 'react';
import './Header.css';
import {IoIosSearch } from 'react-icons/io';
import { FiBell } from 'react-icons/fi'

function Header() {
    return (
        <div
            className="header">
            <div className="transmonitor-text">TransMonitor</div>
            <div className="search-container">
                <div
                    className="search-icon"
                >
                    <IoIosSearch
                        title="Search"
                        size="1em"
                        color="#647787"
                    />
                </div>

                <input 
                    className="search-input"
                    placeholder="Search..."
                    

                />
            </div>
            <div
                className="header-right">
                    <div
                    className="header-button-text"
                    >
                        Support
                    </div>
                    <div
                    className="header-button-text"
                    >
                        FAQ
                    </div>

                    <div
                    className="notification-icon"
                    >
                        <div className="notification-count">
                            <div>8</div>
                        </div>
                        <FiBell 
                        title="Notification"
                        size="1em"
                        color="#647787"
                        />

                    </div>

                    <div
                    className="profile-area"
                    >
                        <div
                        className="profile-info"
                        >
                            <div>Hello</div>
                            <div>Samson Oluokun</div>

                        </div>

                        <div className="profile-image">
                            <img 
                            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
                            />

                        </div>

                    </div>

                </div>

        </div>
    )
}

export default Header;