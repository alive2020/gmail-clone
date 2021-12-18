import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='app-body'>
          <Sidebar />
          <Routes>
            <Route path='/mail' exact element={<Mail />}></Route>
            <Route path='/' exact element={<EmailList />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
