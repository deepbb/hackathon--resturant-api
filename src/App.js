import './App.css';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Topbar from './Topbar/Topbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from 'react';
import { AuthContext } from "../src/Context/AuthContext"
import Food from './pages/Food';
import Cart from './pages/Cart';
import Scanner from './pages/Scanner';

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Topbar />
      <div>
      </div>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/register" element={user ? <Home /> : <Register />} />
     <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/food" element={user ? <Food /> : <Register />}/>
      <Route path="/scanner" element={<Scanner />}/>
      <Route path="/cart" element={<Cart />}/>
    
    </Routes>
    <ToastContainer position="top-center"/>
    </Router>
  );
}

export default App;
