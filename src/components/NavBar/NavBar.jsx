import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import "../Cart/CartWidget";
import CartWidget from "../Cart/CartWidget";

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <Link to={"/"}>
          <h1 className="logo">ALGO ASÍ</h1>
        </Link>

        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={"/"}>Todos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"categoria/Calzado"}>Calzado</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={"categoria/Accesorios"}>Accesorios</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={"categoria/Perfumería"}>Perfumería</NavLink>
          </li>
        </ul>

        <div>
          <CartWidget />
        </div>
      </div>
    </>
  );
};

export default Navbar;
