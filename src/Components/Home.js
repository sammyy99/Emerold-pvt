import React, { useEffect, useState } from "react";
import {
  foundation,
  imgNames,
  imgQuotes,
  welcome1,
  welcome2,
} from "../Utils/constants";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  const [activeCaption, setActiveCaption] = useState(0);
  const [activeImg, setActiveImage] = useState(0);

  const handleCaptionplus = () => {
    if (
      activeCaption === imgQuotes.length - 1 &&
      activeImg === imgQuotes.length - 1
    ) {
      setActiveCaption(0);
      setActiveImage(0);
    } else {
      setActiveCaption(activeCaption + 1);
      setActiveImage(activeImg + 1);
    }
  };

  const handleCaptionminus = () => {
    if (activeCaption === 0 && activeImg === 0) {
      setActiveCaption(imgQuotes.length - 1);
      setActiveImage(imgQuotes.length - 1);
    } else {
      setActiveCaption(activeCaption - 1);
      setActiveImage(activeImg - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCaptionplus();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeCaption]);

  return (
    <div>
      <div className="grid grid-cols-12 pt-24 mx-1 md:mx-0 md:pt-40 py-20 md:py-24 bg-slate-200 font-serif">
        <div className="hidden md:flex md:items-center md:col-span-1">
          <div
            onClick={() => {
              handleCaptionminus();
            }}
            className="hover:bg-emerald-500 p-1 rounded-full transition-all duration-500"
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 flex justify-center items-center">
          <div className="">
            {imgNames.map((img, i) => {
              return (
                <img
                  key={i}
                  className={`${
                    i === activeImg
                      ? "block md:w-[50rem] md:h-[35rem] shadow-xl rounded-xl shadow-black"
                      : "hidden"
                  }`}
                  alt=""
                  src={img}
                ></img>
              );
            })}
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 md:pl-12 flex justify-center items-center">
          <div className="">
            {imgQuotes.map((caption, i) => {
              return (
                <div
                key={i}
                className={`${i === activeCaption ? "block" : "hidden"}`}>
                  <div className="py-8 md:py-4 text-3xl text-center md:text-left md:text-5xl">
                    {caption.head}
                  </div>
                  <div className="py-1 md:py-4 text-xl text-center md:text-left md:text-2xl text-gray-600">
                    {caption.caption}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:justify-end md:col-span-1">
          <div
            onClick={() => {
              handleCaptionplus();
            }}
            className="hover:bg-emerald-500 p-1 rounded-full transition-all duration-500"
          >
            <ArrowForwardIosIcon fontSize="large" />
          </div>
        </div>
      </div>

      <div className="text-center font-serif py-4 md:py-10 px-6 md:px-[20rem] ">
        <div className="py-6 text-2xl border-b border-emerald-500 ">
          WELCOME TO EMEROLD
        </div>
        <div className="md:py-6 text-lg text-gray-600">
          <div className="pb-6">{welcome1}</div>{" "}
          <div className="pb-6">{welcome2}</div>
        </div>
        <div className="text-center pb-2">
          <button className="py-2 px-6 text-emerald-500 rounded-full border shadow-md border-emerald-500 hover:text-white hover:bg-emerald-500 transition-all duration-300">
            KNOW MORE
          </button>
        </div>
      </div>

      <div className="bg-sky-800 relative flex justify-center font-serif">
        <div className="bg-sky-800 bg-opacity-60 hover:bg-opacity-35 transition-all duration-300 absolute w-full h-full flex justify-center items-center z-10">
          <div className="text-center">
          <div className="text-2xl md:text-4xl text-white"> Are you excited to explore Emerold's projects?</div>
          <div className="py-6">
            <button className="py-2 px-4 border rounded-full text-white text-xl transition-all duration-300 hover:text-black hover:bg-white ">Check all</button>
          </div>
        </div>
        </div>
        <img className="blur-sm md:w-2/3" alt="" src="products.jpg"></img>
      </div>

      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
