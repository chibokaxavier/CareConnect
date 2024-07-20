"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";

const FaqItem = ({ item, onToggle, isOpen }: any) => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const toggleAccordion = () => {
  //     setIsOpen(!isOpen);
  //   };
  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-gray-300 mb-5 cursor-pointer ">
      <div
        className="flex justify-between items-center gap-5 "
        onClick={onToggle}
      >
        <h4 className="text-[16px]  max-w-[90%] leading-7 lg:text-[22px] lg:leading-8 text-gray-700 ">
          {item.question}
        </h4>
        <div
          className={` ${
            !isOpen && "bg-blue-400 text-white border-none"
          } min-w-7 min-h-7 lg:w-8 lg:h-8 border border-solid border-gray-900 rounded flex items-center justify-center`}
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 ">
          <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7  font-400 text-gray-800">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
