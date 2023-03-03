import React from "react";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="title">
        <span>Categories</span>
      </div>
      <div className="categoryData">
        <div className="col-1">
          <div className="row">
            <div className="item">
              <img
                className="img1"
                src="https://images.unsplash.com/photo-1596484552993-aec4311d3381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhzJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <button className="button1">Sale</button>
            </div>
            <div className="item">
              <img
                className="img2"
                src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <button className="button2">Woman</button>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="row">
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1636017510501-ab5e3d121c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMGNsb3Roc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <button>New Season</button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row1">
            <div className="item">
              <img
                className="img1"
                src="https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <button className="button1">Men</button>
            </div>
            <div className="item">
              <img
                className="img2"
                src="https://images.unsplash.com/photo-1584184804426-5e2aa23c2937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWNjZXNvcmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <button className="button2">Accesories</button>
            </div>
          </div>
          <div className="row2">
            <div className="item">
              <img
                className="img3"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <button>Shoes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
