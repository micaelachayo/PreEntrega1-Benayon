import React from "react";
import "../app.css"; 
import { CartWidget } from "./CartWidget";

export default function NavBar() {
  return (
    <>
      <div className="row">
        <nav className=" navbar navbar-expand-lg">
          <div className="col-2">
            <h1 className="text-center">DASA</h1>
          </div>
          <div className="col-8 ">
            <ul className="navbar-nav  justify-content-center">
              <li className="nav-item mx-1">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#">
                  Tienda
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </nav>
      </div>
    </>
  );
}
