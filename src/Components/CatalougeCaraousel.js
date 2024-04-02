import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const CatalougeCaraousel = ({ product }) => {
  const [activeImg, setActiveImg] = useState(0);

  const handleForward = () => {
    if (activeImg === product.length - 1) {
      setActiveImg(0);
    } else {
      setActiveImg(activeImg + 1);
    }
  };

  const handleBack = () => {
    if (activeImg === 0) {
      setActiveImg(product.length - 1);
    } else {
      setActiveImg(activeImg - 1);
    }
  };

  console.log(product);
  return (
    <div className="flex justify-center items-center md:space-x-1">
      <div
        onClick={() => {
          handleBack();
        }}
        className="hover:bg-emerald-500 p-1 rounded-full transition-all duration-500"
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </div>

      {product.map((item, i) => {
        return (
          <div key={item.name}>
            <img
              className={`w-[45rem] h-[27rem] shadow-xl rounded-xl shadow-gray-700 ${
                activeImg === i ? "block" : "hidden"
              }`}
              alt="Product"
              src={item.img}
            ></img>
          </div>
        );
      })}

      <div
        onClick={() => {
          handleForward();
        }}
        className="hover:bg-emerald-500 p-1 rounded-full transition-all duration-500"
      >
        <ArrowForwardIosIcon fontSize="large" />
      </div>
    </div>
  );
};

export default CatalougeCaraousel;
