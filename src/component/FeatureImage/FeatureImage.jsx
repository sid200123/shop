import React from "react";
import { Link } from "react-router-dom";
import "./FeatureImage.scss";

const FeatureImage = () => {
  const data = ["1", "2", "3", "4"];
  return (
    <div className="faeturedDiv">
      <div className="top">
        <h1>Featured Image</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </div>
      <div className="bottom">
        <div className="card">
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
        </div>
        <div className="card">
          <div className="cardImage">
            <img
              src="https://images.unsplash.com/photo-1631234764568-996fab371596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGUlMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="firstImg"
            />
            <img
              src="https://media.istockphoto.com/id/1156326643/photo/elegant-afro-american-woman-with-sunglasses-and-white-suit.jpg?s=170667a&w=0&k=20&c=JU_GjDdost0X-mrKXzuhX9k8xLcNO9X3pFrsKFKQQdo="
              alt=""
              className="secondImg"
            />
          </div>
          <div className="cardContent">
            <h1>White Dress</h1>
            <div className="cardPrice">
              <p>$ 200</p>
              <p>$ 185</p>
            </div>
          </div>
        </div>
        <div className="card">
          <Link
            to="product"
            state={{
              img1: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
              img2: "https://media.istockphoto.com/id/1257650419/photo/closeup-luxury-wrist-watch.jpg?s=170667a&w=0&k=20&c=VWeAbfFENiip6Hiy1yEq6YXmdjU8JWq49Z7UfY2S12Y=",
              title: "Watch",
              price: "275",
            }}
            style={{
              textDecoration: "none",
            }}
          >
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="firstImg"
              />
              <img
                src="https://media.istockphoto.com/id/1257650419/photo/closeup-luxury-wrist-watch.jpg?s=170667a&w=0&k=20&c=VWeAbfFENiip6Hiy1yEq6YXmdjU8JWq49Z7UfY2S12Y="
                alt=""
                className="secondImg"
              />
            </div>
            <div className="cardContent">
              <h1>Watch</h1>
              <div className="cardPrice">
                <p>$ 300</p>
                <p>$ 275</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="card">
          <div className="cardImage">
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="firstImg"
            />
            <img
              src="https://media.istockphoto.com/id/1339828542/photo/mockup-blank-black-t-shirt-for-advertising-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=jcXu8KkZvpYluaeOVXQ4ytqrOEFP12LrIahDNeI42tA="
              alt=""
              className="secondImg"
            />
          </div>
          <div className="cardContent">
            <h1>T-Shirt</h1>
            <div className="cardPrice">
              <p>$ 100</p>
              <p>$ 90</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureImage;
