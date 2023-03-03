import React from "react";
import "./Footer.scss";
import image from "../../img/payment.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <p>
            <Link className="link">Women</Link>
          </p>
          <p>
            <Link className="link">Men</Link>
          </p>
          <p>
            <Link className="link">Shoes</Link>
          </p>
          <p>
            <Link className="link">Accesories</Link>
          </p>
          <p>
            <Link className="link">New Arrivals</Link>
          </p>
        </div>
        <div className="item">
          <h1>Link</h1>
          <p>
            <Link className="link">FAQ</Link>
          </p>
          <p>
            <Link className="link">Pages</Link>
          </p>
          <p>
            <Link className="link">Stores</Link>
          </p>
          <p>
            <Link className="link">Compare</Link>
          </p>
          <p>
            <Link className="link">Cookies</Link>
          </p>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          Shopping Mall
          <span>@copyright 2023 All Right Reserved</span>
        </div>
        <div className="right">
          <img src={image} alt="imageFooter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
