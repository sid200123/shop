import { CancelOutlined, CheckBox } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Products.scss";

const Products = () => {
  const data = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "1",
    "2",
    "3",
    "4",
    "5",
    "1",
    "2",
    "3",
    "4",
    "5",
    "1",
    "2",
    "3",
    "4",
    "5",
  ];
  return (
    <div className="products">
      <div className="left">
        <div className="categories">
          <span>Categories</span>
          <div className="item">
            <input type="checkbox" /> Men
          </div>
          <div className="item">
            <input type="checkbox" /> Woman
          </div>
          <div className="item">
            <input type="checkbox" /> Shoes
          </div>
          <div className="item">
            <input type="checkbox" /> Watch
          </div>
        </div>
        <div className="filter">
          <span>Filter</span>
          <input type="range" max="250" />
        </div>
        <div className="sort">
          <span>Sort</span>
          <div className="item">
            <input type="radio" name="sort" /> Low To High
          </div>
          <div className="item">
            <input type="radio" name="sort" /> High To Low
          </div>
        </div>
      </div>
      <div className="right">
        <div className="categoriesData">
          <span>
            Woman <CancelOutlined className="cancelIcon" />
          </span>
          <span>
            Dress <CancelOutlined className="cancelIcon" />
          </span>
        </div>
        <div className="productCarts">
          {data.map((item, index) => {
            return (
              <div className="card" key={index}>
                <Link
                  to="/product"
                  state={{
                    img1: "https://images.unsplash.com/photo-1561932850-f13404855e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHllbGxvdyUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    img2: "https://images.unsplash.com/photo-1562244518-a0a9c068ff4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHllbGxvdyUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    title: "Yellow Dress",
                    price: "220",
                  }}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div className="cardImage">
                    <img
                      src="https://images.unsplash.com/photo-1561932850-f13404855e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHllbGxvdyUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="firstImg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1562244518-a0a9c068ff4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHllbGxvdyUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="secondImg"
                    />
                  </div>
                  <div className="cardContent">
                    <h1>Yellow Dress</h1>
                    <div className="cardPrice">
                      <p>$ 250</p>
                      <p>$ 220</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
