import React from 'react';
import './PendingOrders.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { OrderDataTable } from '../DataTable/DataTable';
import { Order } from '../../types/Order';
interface Props {
    orders: Order[],
}

class PendingOrders extends React.Component<Props> {

    componentDidMount = () => {
        
    }

    render = () => {
        return (<div
            className="overview-container">

            <div
                className="payment-text"
            >Pending Orders</div>
            <div className="record-list" >

            <OrderDataTable data={this.props.orders} />

            </div>
        </div>);

    }

}

export default PendingOrders;
