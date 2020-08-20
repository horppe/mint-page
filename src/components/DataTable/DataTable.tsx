import React, { Component } from 'react';
import './DataTable.css'
import { Payment } from '../../types/Payment';
import { Order } from '../../types/Order';
var $ = require('jquery');

interface PaymentProps {
    data: Payment[],
}

interface State {
    isSearch: boolean,
    searchResult: Payment[],
}

export class PaymentDataTable extends Component<PaymentProps> {

    state: State = {
        isSearch: false,
        searchResult: [],
    }

    search = (query: string) => {
        if (query.length > 0) {
            if (this.state.isSearch == false) {
                this.setState({ isSearch: true });
            }
            const { data } = this.props;
            const result = data.filter(ele => {
                const regex: RegExp = new RegExp(query);

                return regex.test(ele.id) || regex.test(ele.name) ||
                    regex.test(ele.price) || regex.test(ele.status) ||
                    regex.test(ele.time.toString()) || regex.test(ele.transactionNumber.toString()) ||
                    regex.test(ele.type);
            });

            this.setState({ searchResult: result }, () => console.log("State set"))
            // console.log("Result: ", result)

        } else {
            if (this.state.isSearch == true) {
                this.setState({ isSearch: false });
            }
        }
    }

    componentDidMount() {
        $(document).ready(function () {
            $('#myTable').DataTable(
                {}
            );
        });


    }

    renderColor = status => {
        if (status == 'reconciled') {
            return 'green-box';
        } else if (status == 'unreconciled') {
            return 'grey-box';
        } else if (status == 'pending') {
            return 'yellow-box';
        }
    }

    renderTextColor = status => {
        if (status == 'reconciled') {
            return 'green-sub';
        } else if (status == 'unreconciled') {
            return 'grey-sub';
        } else if (status == 'pending') {
            return 'yellow-sub';
        }
    }

    render = () => {
        const { data } = this.props;

        return (
            <>
                {/* <input id="mySearch" type="search" onChange={event => {
                    const query = event.target.value;
                                    this.search(query);
                }} className="" placeholder="&#128269;  Search payments" aria-controls="myTable"></input> */}
                <table id="myTable" className="table  table-bordered" style={{ width: '100%' }}>
                    <col style={{ width: "15%" }}></col>
                    <col style={{ width: "30%" }}></col>
                    <col style={{ width: "10%" }}></col>
                    <col style={{ width: "15%" }}></col>
                    <col style={{ width: "10%" }}></col>
                    <col style={{ width: "20%" }}></col>

                    <thead className="table-header-class">
                        <tr>
                            <th>Item Type</th>
                            <th></th>
                            <th>Price</th>
                            <th>Transaction No</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(payment => (
                                    <tr>
                                        <td className="product-type"><div><div>{payment.type}</div></div></td>
                                        <td>{payment.name}</td>
                                        <td>{payment.price}</td>
                                        <td>{payment.transactionNumber}</td>
                                        <td>{new Date(payment.time).toDateString()}</td>
                                        <td>
                                            <div className="status-container">
                                                <div className={`status-indicator ${this.renderColor(payment.status)}`}></div>
                                                <div className={`status-text ${this.renderTextColor(payment.status)}`}>{payment.status}</div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                        }

                    </tbody>
                </table>
            </>
        );
    }
}


interface OrderProps {
    data: Order[]
}


export class OrderDataTable extends Component<OrderProps> {


    componentDidMount() {
        $(document).ready(function () {
            $('#myTable').DataTable(
                {}
            );
        });


    }

    renderColor = status => {
        if (status == 'reconciled') {
            return 'green-box';
        } else if (status == 'unreconciled') {
            return 'grey-box';
        } else if (status == 'pending') {
            return 'yellow-box';
        }
    }

    renderTextColor = status => {
        if (status == 'reconciled') {
            return 'green-sub';
        } else if (status == 'unreconciled') {
            return 'grey-sub';
        } else if (status == 'pending') {
            return 'yellow-sub';
        }
    }

    render = () => {
        const { data } = this.props;

        return (
            <>
                {/* <input id="mySearch" type="search" onChange={event => {
                    const query = event.target.value;
                                    this.search(query);
                }} className="" placeholder="&#128269;  Search payments" aria-controls="myTable"></input> */}
                <table id="myTable" className="table  table-bordered" style={{ width: '100%' }}>
                    <col style={{ width: "10%" }}></col>
                    <col style={{ width: "30%" }}></col>
                    <col style={{ width: "10%" }}></col>
                    <col style={{ width: "15%" }}></col>
                    <col style={{ width: "15%" }}></col>
                    <col style={{ width: "20%" }}></col>

                    <thead className="table-header-class">
                        <tr>
                            <th>Item Type</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Transaction No</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(order => (
                                    <tr>
                                        <td className="product-type"><div><div>{order.type}</div></div></td>
                                        <td>{order.location}</td>
                                        <td>{order.price}</td>
                                        <td>{order.transactionNumber}</td>
                                        <td>{new Date(order.time).toDateString()}</td>
                                        <td>
                                            <div className="status-container">
                                                <div className={`status-indicator ${this.renderColor(order.status)}`}></div> 
                                                <div className={`status-text ${this.renderTextColor(order.status)}`}>{order.status}</div>
                                            </div>
                                        </td>
                                        
                                    </tr>
                                ))
                        }

                    </tbody>
                </table>
            </>
        );
    }
}


