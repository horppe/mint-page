import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Overview from './components/Overview/Overview';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <SideBar />
        <div className="content">
          
          <Overview />
        </div>
      </div>
    </div>
  );
}

export default App;
