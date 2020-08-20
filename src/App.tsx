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


function App() {

  const payments: Payment[] = new PaymentService().getAll(50);
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
          <Route path="/reconciled-payments">
            <ReconciledPayments payments={payments.filter(ele => ele.status == 'reconciled')} />
          </Route>
          <Route path="/unreconciled-payments">
            <UnReconciledPayments payments={payments.filter(ele => ele.status == 'unreconciled')} />
          </Route>
          <Route path="/overview">
            <Overview payments={payments} />
          </Route>

          <Route path="/">
            <Overview payments={payments} />
          </Route>
          
          </Switch>
         
        </div>
      </div>
      </Router>
     
    </div>
  );
}

export default App;
