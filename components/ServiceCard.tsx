import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ item, index }: any) => {
  const { name, desc, bgColor } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5 ">
      <h2 className="text-[26px] leading-9 text-gray-600 font-700">{name}</h2>
      <p className="text-[16px] leading-7 font-[400] text-gray-600 mt-4">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[30px] ">
        <Link
          href={"/doctors"}
          className=" rounded-full border border-solid border-black mt-[30px] w-[44px] h-[44px] mx-auto flex items-center justify-center group hover:bg-blue-600 hover:border-none transition-all duration-500 ease-in-out"
        >
          <GoArrowRight className="w-5 h-5 group-hover:text-white" />
        </Link>
        <span
          className={` text-white w-[44px] h-[44px] rounded-md flex items-center justify-center text-[18px] leading-[30px] font-[600px]`}
          style={{ backgroundColor: `${bgColor}` }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
