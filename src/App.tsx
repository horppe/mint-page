import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Overview from './components/Overview/Overview';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import { Payment } from './types/Payment';
import PaymentService from './services/payment';
import AllPayments from './components/AllPayments/AllPayments';
import ReconciledPayments from './components/ReconciledPayments/ReconciledPayments';
import UnReconciledPayments from './components/UnReconciledPayments/UnReconciledPayments';
import AllOrders from './components/AllOrders/AllOrders';
import OrderService from './services/order';
import { Order } from './types/Order';
import PendingOrders from './components/PendingOrders/PendingOrders';
import ReconciledOrders from './components/ReconciledOrders/ReconciledOrders';


function App() {

  const payments: Payment[] = new PaymentService().getAll(50);
  const orders: Order[] = new OrderService().getAll(50);
  return (
    
    <div className="App">
      <Router>
      <Header />
      
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Switch>
          <Route path="/all-payments">
            <AllPayments payments={payments} />
          </Route>
          <Route path="/all-orders">
            <AllOrders orders={orders} />
          </Route>
          <Route path="/pending-orders">
            <PendingOrders orders={orders.filter(ele => ele.status == 'pending')} />
          </Route>
          <Route path="/reconciled-orders">
            <ReconciledOrders orders={orders.filter(ele => ele.status == 'reconciled')} />
          </Route>
          <Route path="/reconciled-payments">
            <ReconciledPayments payments={payments.filter(ele => ele.status == 'reconciled')} />
          </Route>
          <Route path="/unreconciled-payments">
            <UnReconciledPayments payments={payments.filter(ele => ele.status == 'unreconciled')} />
          </Route>
          <Route path="/overview">
            <Overview payments={payments} orders={orders} />
          </Route>

          <Route path="/">
            <Overview payments={payments} orders={orders} />
          </Route>
          
          </Switch>
         
        </div>
      </div>
      </Router>
     
    </div>
  );
}

export default App;
