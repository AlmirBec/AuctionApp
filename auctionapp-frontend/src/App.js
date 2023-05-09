import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import { Itempage } from './pages/Itempage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<Itempage/>}/>
          <Route path = "/login" element={<Loginpage/>}/>
          <Route path = "/registration" element={<Registerpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
