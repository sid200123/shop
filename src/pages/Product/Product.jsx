import {
  AddShoppingCart,
  Balance,
  DeleteOutline,
  Favorite,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Product.scss";

const Product = () => {
  const location = useLocation();
  console.log(location.state);
  const [imgNumber, setImgNumber] = useState(0);
  return (
    <div className="product">
      <div className="left">
        <img onClick={() => setImgNumber(0)} src={location.state.img1} alt="" />
        <img onClick={() => setImgNumber(1)} src={location.state.img2} alt="" />
      </div>
      <div className="middle">
        <img
          src={imgNumber === 0 ? location.state.img1 : location.state.img2}
          alt=""
        />
      </div>
      <div className="right">
        <div className="top">
          <div className="left">
            <span className="title">{location.state.title}</span>
            <span className="price">$ {location.state.price}</span>
            <span className="desc">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </span>
            <div className="quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="cardBtn">
              <AddShoppingCart
                sx={{
                  fontSize: "15px",
                }}
              />{" "}
              Add To Cart
            </button>
          </div>
          <div className="right">
            <span className="title">Products in your cart</span>
            <div className="cartContainer">
              <div className="left">
                <img
                  onClick={() => setImgNumber(0)}
                  src={location.state.img1}
                  alt=""
                />
              </div>
              <div className="middle">
                <span className="title">Branded Watch</span>
                <span className="desc">
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </span>
                <span className="detail">1 * {location.state.price}</span>
              </div>
              <div className="right">
                <DeleteOutline />
              </div>
            </div>
            <div className="cartDetail">
              <div className="top">
                <span>SUBTOTAL</span>
                <span>$ {location.state.price}</span>
              </div>
              <div className="middle">
                <button>PROCEED TO CHECKOUT</button>
              </div>
              <div className="bottom">
                <span>Reset Cart</span>
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <span>
            <Favorite
              sx={{
                fontSize: "20px",
              }}
            />{" "}
            Add To Wishlist
          </span>
          <span>
            <Balance
              sx={{
                fontSize: "20px",
              }}
            />{" "}
            Add To Compare
          </span>
        </div>
        <div className="bottom">
          <div className="productBottomDetail">
            <span>Vendor : Rolex</span>
            <span>Product type : Watch</span>
            <span>Tag : HandWatch,Watch,Branded,Accesories</span>
          </div>
          <div className="productBottomAdditionalDetail">
            <span>Description</span>
            <span>Additional Information</span>
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
