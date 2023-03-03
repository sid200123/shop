import {
  Favorite,
  KeyboardArrowDown,
  Person,
  Search,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="left">
        <div className="item">
          Ind
          <KeyboardArrowDown />
        </div>
        <div className="item">
          <Link className="link">Men</Link>
        </div>
        <div className="item">
          <Link className="link">Women</Link>
        </div>
        <div className="item">
          <Link className="link">Children</Link>
        </div>
      </div>
      <div className="middle">Shopping Mall</div>
      <div className="right">
        <div className="item">
          <Link className="link" to="/">
            HomePage
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/about">
            About
          </Link>
        </div>
        <div className="item">
          <Link className="link">Contact</Link>
        </div>
        <div className="item">
          <Link className="link" to="products">Stores</Link>
        </div>
        <div className="item">
          <Link className="link">
            <Search className="linkIcon" />
          </Link>
        </div>
        <div className="item">
          <Link className="link">
            <Person className="linkIcon" />
          </Link>
        </div>
        <div className="item">
          <Link className="link">
            <Favorite className="linkIcon" />
          </Link>
        </div>
        <div className="item">
          <Link className="link">
            <div className="cartIcon">
              <ShoppingCart className="linkIcon" />
              <span>0</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
