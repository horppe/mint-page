import React from 'react';
import './SideBar.css';
import { IoIosSearch } from 'react-icons/io';
import { FaUserAlt, FaUser } from 'react-icons/fa'
import SpeedometerIcon from '../../assets/icons/speedometer.svg';
import AllPaymentsIcon from '../../assets/icons/all-payments.svg';
import ReconciledPaymentsIcon from '../../assets/icons/reconciled-payments.svg';
import UnReconciledPaymentsIcon from '../../assets/icons/unreconciled-payments.svg';
import DotCircleIcon from '../../assets/icons/dot-circle-outline.svg';
import AllOrdersIcon from '../../assets/icons/all-orders.svg';
import ReconciledOrdersIcon from '../../assets/icons/reconciled-orders.svg';
import PendingOrdersIcon from '../../assets/icons/pending-orders.svg';
import UserOutlineIcon from '../../assets/icons/user-outline.svg';


function SideBar() {
    return (
        <div className="sidebar-container">
            <div className="invoice-button">
                <div>GENERATE INVOICE</div>
            </div>

            <div className="section-title">Main</div>
            <div className="sidebar-item">

                <div className="sidebar-item-icon" >
                    <img src={SpeedometerIcon} />
                </div>
                <div>Overview</div>
            </div>

            <div className="section-title">Payments</div>
            <div className="sidebar-item">

                <div className="sidebar-item-icon" >
                    <img src={AllPaymentsIcon} />
                </div>
                <div>All Payments</div>
            </div>
            <div className="sidebar-item">

                <div className="sidebar-item-icon" >
                    <img src={ReconciledPaymentsIcon} />
                </div>
                <div>Reconciled Payments</div>
            </div>
            <div className="sidebar-item">

                <div className="sidebar-item-icon" >
                    <img src={UnReconciledPaymentsIcon} />
                </div>
                <div>Un-Reconciled Payments</div>
            </div>
            <div className="sidebar-item">

                <div className="sidebar-item-icon" >
                    <img src={DotCircleIcon} />
                </div>
                <div>Manual Settlements</div>
            </div>

            <div className="section-title">Orders</div>
            <div className="sidebar-item">

                <div className="sidebar-item-icon" >
                    <img src={AllOrdersIcon} />
                </div>
                <div>All Orders</div>
            </div>
            <div className="sidebar-item">

                <div className="sidebar-item-icon" >
                    <img src={PendingOrdersIcon} />
                </div>
                <div>Pending Orders</div>
            </div>
            <div className="sidebar-item">

                <div className="sidebar-item-icon" >
                    <img src={ReconciledOrdersIcon} />
                </div>
                <div>Reconciled Orders</div>
            </div>

            <div className="sidebar-item" style={{marginTop: "20px"}}>
            <div className="sidebar-item-icon" >
                    <img src={UserOutlineIcon} />
                </div>
                <div>Reconciled Orders</div>
            </div>

        </div>
    );
}

export default SideBar;