import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import { Itempage } from './pages/Itempage';
import { Component } from 'react';
import Categories from './components/Categories';
import ItemList from './components/ItemList';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<Categories/>}/>
          <Route path = "/login" element={<Loginpage/>}/>
          <Route path = "/registration" element={<Registerpage/>}/>
          <Route path = "/items" element={<Itempage/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
