import React from 'react';
import './Overview.css';
import InfoCard from '../InfoCard/InfoCard';
import { Line } from 'rc-progress';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { Payment } from '../../types/Payment';
import { PaymentDataTable } from '../DataTable/DataTable';
import "chart.js/dist/Chart.bundle.min";
var Chart = (window as any).Chart;

interface Props {
    payments: Payment[],
}



class Overview extends React.Component<Props> {
    chart = undefined;
    componentDidMount = () => {
        console.log("Chart:", Chart);
        var ctx = (document.getElementById('myChart') as HTMLCanvasElement)
            .getContext('2d');

        var chartOptions = {
            scales: {
                yAxes: [{
                    // type: "linear",
                    // position: "left",
                    ticks: {
                        beginAtZero: true,
                        display: false
                    }
                }],
                xAxes: [{
                    // type: "linear",
                    position: "top",
                    ticks: {
                        display: true
                    }
                }]
            },
        };

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Orders',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(2, 148, 255, 0.45)',
                        ],
                        // showLine: false,
                        // borderColor: [
                        //     'rgba(2, 148, 255, 0.45)'
                        // ],
                        borderWidth: 1
                    },
                    {
                        label: 'Payments',
                        data: [2, 10, 3, 19, 1, 8],
                        backgroundColor: [
                            'rgba(39, 174, 96, 0.6)',
                        ],
                        // showLine: false,
                        // borderColor: [
                        //     'rgba(2, 148, 255, 0.45)'
                        // ],
                        borderWidth: 1
                    }
                ]
            },
            options: chartOptions,

        });

    }

    render = () => {

        // console.log("Options", canvasOptions)
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
                    <div>
                        <canvas id="myChart" width="400" height="200"></canvas>

                    </div>
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
