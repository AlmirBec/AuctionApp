import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/LoginPage';
import ItemPage from './pages/ItemPage';
import Item from './components/Item';
import Registerpage from './pages/RegisterPage';
import './App.css'

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<ItemPage />} />      
            <Route path="/item/:itemId" element={<Item />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/registration" element={<Registerpage />} />
            <Route path="/items" element={<ItemPage />} />
        </Routes>
      </Router>
  );
}

export default App;
