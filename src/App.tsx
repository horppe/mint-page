import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">
          
        </div>
      </div>
    </div>
  );
}

export default App;
