import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/LoginPage';
import { Itempage } from './pages/ItemPage';
import Item from './components/Item';
import Registerpage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/item/:itemId" element={<Item/>}/>
          <Route path = "/login" element={<Loginpage/>}/>
          <Route path = "/registration" element={<Registerpage/>}/>
          <Route path = "/items" element={<Itempage/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
