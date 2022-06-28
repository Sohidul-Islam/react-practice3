import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import Privateroute from './components/Privaterouter/Privateroute';
import Placeorder from './components/Placeorder/Placeorder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shipping" element={<Privateroute path="/shipping">
              <Shipping />
            </Privateroute>} />
            <Route path="/placeorder" element={<Privateroute path="/shipping">
              <Placeorder />
            </Privateroute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
