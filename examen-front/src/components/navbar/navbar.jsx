import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({ usuario }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand ms-2" to="/">
            GO TO HOME
          </Link>
          <div className="elementos-navbar-derecha">
            {usuario ?
              (
                <div className="cuadro-notificaciones-navbar">
                  <Link className="btn btn-outline-light" to="/logout">
                    Cerrar Sesión
                  </Link>
                </div>
              )
              :
              (
                <div className="cuadro-notificaciones-navbar">
                  <Link className="btn btn-outline-light" to="/login">
                    Iniciar Sesión
                  </Link>
                </div>
              )
            }



            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
