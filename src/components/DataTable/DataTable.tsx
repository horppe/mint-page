import React, { Component } from 'react';
import './DataTable.css'
import { Payment } from '../../types/Payment';
var $ = require('jquery');

interface Props {
    data: Payment[],
}

interface State {
    isSearch: boolean,
    searchResult: Payment[],
}

export class PaymentDataTable extends Component<Props> {

    state : State = {
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
                {
                    // searching: false
                }
            );
        });

        
        // $("#myTable_filter").html( `
        // <label>
        //     <input type="search" class="" placeholder="&#128269;  Search payments" aria-controls="myTable">
        // </label>
        // `); 
        // setTimeout(() => {
        //     $("#myTable_filter").html(`
        //         <div>
        //             <input type="search" class="" placeholder="&#128269;  Search payments" aria-controls="myTable">
        //         </div>
        //         `);
        //             $("#myTable_filter input").change((event) => {
        //                 const query = event.target.value;
        //                 this.search(query);
        //             })
        //         }, 500);

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
                            this.state.isSearch ?
                                this.state.searchResult.map(payment => (
                                    <tr>
                                        <td className="product-type"><div><div>{payment.type}</div></div></td>
                                        <td>{payment.name}</td>
                                        <td>{payment.price}</td>
                                        <td>{payment.transactionNumber}</td>
                                        <td>{payment.time}</td>
                                        <td>{payment.price}</td>
                                    </tr>
                                ))
                                : data.map(payment => (
                                    <tr>
                                        <td className="product-type"><div><div>{payment.type}</div></div></td>
                                        <td>{payment.name}</td>
                                        <td>{payment.price}</td>
                                        <td>{payment.transactionNumber}</td>
                                        <td>{payment.time}</td>
                                        <td>{payment.price}</td>
                                    </tr>
                                ))
                        }

                    </tbody>
                </table>
            </>
        );
    }
}


