import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ item, index }: any) => {
  const { name, desc, bgColor } = item;
  return (
    <div className=" px-3 lg:px-5 flex flex-col">
      <h2 className="text-[26px] leading-9 text-gray-600 font-700">{name}</h2>
      <p className="text-[16px] min-h-[150px] leading-7 font-[400] text-gray-600 mt-4">
        {desc}
      </p>
      <div className=" mt-[10px] flex justify-between items-center">
        <Link
          href={"/doctors"}
          className=" rounded-full border border-solid border-black mt-[30px] w-[44px] h-[44px]  flex items-center justify-center group hover:bg-blue-600 hover:border-none transition-all duration-500 ease-in-out"
        >
          <GoArrowRight className="w-5 h-5 group-hover:text-white" />
        </Link>
        <div
          className={` text-white w-[44px] h-[44px] rounded-md flex items-center justify-center mt-10 text-[18px] leading-[30px] font-[600px]`}
          style={{ backgroundColor: `${bgColor}` }}
        >
          {index + 1}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
