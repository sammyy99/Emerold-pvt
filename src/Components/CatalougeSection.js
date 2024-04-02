import React, { useState } from "react";
import CatalougeCarousel from "./CatalougeCaraousel";
import { catalougeInfo } from "../Utils/constants";

const CatalougeSection = () => {

  const [product, setProduct] = useState(catalougeInfo[0])

  const handleCategory = (id)=>{
    setProduct(catalougeInfo[id-1])
  }

  //console.log(catalougeInfo);
  return (
    <div className="pt-20">
      <div className="md:my-10">
      <CatalougeCarousel product = {product.products}/>
      </div>
      <div className="flex justify-center">
        {catalougeInfo.map((category) => {
          return (
            <div onClick={()=>handleCategory(category.id)} key={category.id} className=" mx-1">
              <img
                className="md:w-36 md:h-24 rounded-md shadow-lg hover:cursor-pointer hover:shadow-slate-500 transition-all duration-300 hover:md:w-40 hover:md:h-28"
                alt="Category"
                src={category.img}
              ></img>
              <h1 className="text-center">{category.category}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatalougeSection;
