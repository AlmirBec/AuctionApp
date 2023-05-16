import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import { Itempage } from './pages/Itempage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<Header/>}/>
          <Route path = "/login" element={<Loginpage/>}/>
          <Route path = "/registration" element={<Registerpage/>}/>
          <Route path = "/items" element={<Itempage/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
