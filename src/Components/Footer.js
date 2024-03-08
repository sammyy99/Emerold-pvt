import React from "react";
import { footerData } from "../Utils/constants";

const Footer = () => {
  return (
    <div>

    <div className="flex justify-center font-serif bg-neutral-800 text-white text-sm text-center md:text-left">
    <div className="grid grid-cols-3 md:w-2/3 py-6 md:py-10 ">
      <div className="col-span-3 md:col-span-1   ">
        <div className="text-lg mb-2 md:mb-4">{footerData[0].heading}</div>
        <div className="mb-1 hover:cursor-pointer hover:text-emerald-500 transition-all duration-500">{footerData[0].content}</div>
      </div>
      <div className="col-span-3 md:col-span-1 py-5 md:py-0 md:mx-10 ">
        <div className="text-lg mb-2 md:mb-4">{footerData[1].heading}</div>
        <div className="mb-1 hover:cursor-pointer hover:text-emerald-500 transition-all duration-500">
            <div className="text-gray-300 ">{footerData[1].post1?.designation}</div>
            <div>{footerData[1].post1?.name}</div>
        </div>
        <div className="mt-1 mb-1 hover:cursor-pointer hover:text-emerald-500 transition-all duration-500">
            <div className="text-gray-300">{footerData[1].post2?.designation}</div>
            <div>{footerData[1].post2?.name}</div>
        </div>
      </div>
      <div className="col-span-3 md:col-span-1  ">
        <div className="text-lg mb-2 md:mb-4">{footerData[2].heading}</div>
        <div>
            <div className="mb-1 hover:cursor-pointer hover:text-emerald-500 transition-all duration-500">{footerData[2].address}</div>
            <div className="mb-1 hover:cursor-pointer hover:text-emerald-500 transition-all duration-500">{footerData[2].phone}</div>
            <div className="mb-1 hover:cursor-pointer hover:text-emerald-500 transition-all duration-500">{footerData[2].mobile}</div>
            <div className="mb-1 hover:cursor-pointer hover:text-emerald-500 transition-all duration-500">{footerData[2].email}</div>
            <a href={`${footerData[2].website}`} target="_blank" ><div className="mb-1 hover:cursor-pointer hover:text-emerald-500 transition-all duration-500">{footerData[2].website}</div></a> 
        </div>
      </div>
    </div>
    </div>


    <div className="flex justify-center bg-neutral-900 text-sm">
    <div className="md:w-2/3 border-t border-emerald-500 py-2 text-white text-center">
        <div>
        © 2018 Emerold International. All rights reserved. Website designed and developed by&nbsp;
            <a href="https://sammy99.netlify.app" target="_blank" rel="noopener noreferrer" className="">Samarth Bhardwaj</a>
        </div>
    </div>
</div>

    </div>
  );
};

export default Footer;
