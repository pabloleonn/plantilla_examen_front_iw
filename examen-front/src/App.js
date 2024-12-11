import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
import Logout from './components/logout/logout';
import Home from './screens/home/home';

import './App.css';

function App() {

  // LO ALMACENO EN EL LOCALSTORAGE. 
  // ESTO SE ENCUENTRA EN EL NAVEGADOR F12 -> APPLICATION -> LOCAL STORAGE -> http://localhost:3000
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  }

  const handleLogout = () => {
    setToken(undefined);
    localStorage.removeItem('token');
  }

  return (
    <div className="App">
      <Router>
        <Navbar usuario={token}/>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* ESTO ESTÁ CONFIGURADO PARA QUE CUANDO HAYA TOKEN NO EXISTA ESTA RUTA */}
          {!token &&
            <Route path="/login" element={<Login setUsuario={handleLogin} />} />
          }
          <Route path="/logout" element={<Logout setUsuario={handleLogout} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
