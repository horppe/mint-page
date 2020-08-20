import React from 'react';
import './Overview.css';
import InfoCard from '../InfoCard/InfoCard';
import { Line } from 'rc-progress';
import 'bootstrap/dist/css/bootstrap.min.css';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { Payment } from '../../types/Payment';
import { PaymentDataTable } from '../DataTable/DataTable';
interface Props {
    payments: Payment[],
}

class Overview extends React.Component<Props> {

    componentDidMount = () => {
        
    }

    render = () => {
        return (<div
            className="overview-container">

            <div className="info-card-row">
                <div className="info-card-row" style={{ marginRight: "20px" }}>
                    <InfoCard
                        topText="Daily Transaction Volume"
                        bottomText="2,342"
                    />
                    <InfoCard
                        topText="Daily Transaction Value"
                        bottomText="₦4,000,000"
                    />
                </div>
                <div className="info-card-row">

                    <InfoCard
                        topText="Total Transaction Volume"
                        bottomText="452,000"
                    />
                    <InfoCard
                        topText="Total Transaction Value"
                        bottomText="₦4,000,000"
                    />
                </div>

            </div>

            <div className="chart-container">

                <div className="chart-left">

                </div>

                <div className="chart-right">
                    <div className="chart-right-item">
                        <div className="chart-info-title">
                            Orders
                    </div>
                        <Line
                            percent={70}
                            strokeWidth={1}
                            trailWidth={1}
                            strokeColor="#27AE60"
                            trailColor="#FDC203"
                        />
                        <div className="chart-info-text">
                            Pending Orders: {" "}<div className="yellow-sub">&nbsp;{"20"}</div>
                        </div>

                        <div className="chart-info-text">
                            Reconciled Orders: {" "}<div className="green-sub">&nbsp;{"80"}</div>
                        </div>
                        <div className="chart-info-text">
                            Total Orders: {" "}<div className="blue-sub">&nbsp;{"100"}</div>
                        </div>

                    </div>
                    <div className="chart-right-item">
                        <div className="chart-info-title">
                            Payments
                    </div>
                        <Line
                            percent={80}
                            strokeWidth={1}
                            trailWidth={1}
                            strokeColor="#27AE60"
                            trailColor="#FDC203"
                        />
                        <div className="chart-info-text">
                            Un-reconciled Payments: {" "}<div className="yellow-sub">&nbsp;{"20"}</div>
                        </div>

                        <div className="chart-info-text">
                            Reconciled Payments: {" "}<div className="green-sub">&nbsp;{"80"}</div>
                        </div>
                        <div className="chart-info-text">
                            Total Payments: {" "}<div className="blue-sub">&nbsp;{"100"}</div>
                        </div>

                    </div>

                </div>
            </div>
            <div
                className="payment-text"
            >Payments</div>
            <div className="record-list" >

            <PaymentDataTable data={this.props.payments} />

            </div>
        </div>);

    }

}

export default Overview;
