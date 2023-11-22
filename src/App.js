import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;