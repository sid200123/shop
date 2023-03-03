import { EastOutlined, WestOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./Slider.scss";

const Slider = () => {
  const data = [
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=2100",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1700",
    "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2100",
  ];
  //   setInterval(() => {
  //     if (number === data.length - 1) {
  //       setNumber(0);
  //     } else {
  //       setNumber(number + 1);
  //     }
  //   }, [10000]);
  const [number, setNumber] = useState(0);
  return (
    <div className="slider">
      <div className="container">
        <img src={data[number]} alt="" />
      </div>
      <div className="icons">
        <div
          className="icon"
          onClick={() =>
            number === 0 ? setNumber(data.length - 1) : setNumber(number - 1)
          }
        >
          <WestOutlined />
        </div>
        <div
          className="icon"
          onClick={() =>
            number === data.length - 1 ? setNumber(0) : setNumber(number + 1)
          }
        >
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
