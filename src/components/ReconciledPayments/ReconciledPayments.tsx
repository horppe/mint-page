import React from 'react';
import './ReconciledPayments.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { Payment } from '../../types/Payment';
import { PaymentDataTable } from '../DataTable/DataTable';
interface Props {
    payments: Payment[],
}

class ReconciledPayments extends React.Component<Props> {

    componentDidMount = () => {
        
    }

    render = () => {
        return (<div
            className="overview-container">

            <div
                className="payment-text"
            >Reconciled Payments</div>
            <div className="record-list" >

            <PaymentDataTable data={this.props.payments} />

            </div>
        </div>);

    }

}

export default ReconciledPayments;
