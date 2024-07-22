import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const DoctorCard = ({ item }: any) => {
  const {
    name,
    specialization,
    avgRating,
    totalrating,
    photo,
    totalpatients,
    hospital,
  } = item;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img
          src={photo}
          alt=""
          className="md:h-[60vh] h-[40vh] w-[70vw] md:w-[55vw] rounded-md"
        />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-gray-900 mt-3 lg:mt-5 font-[700]">
        {name}
      </h2>
      <div className="mt-2 lhg:mt-4 flex items-center justify-between ">
        <span className="bg-blue-300 text-blue-600 py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded   ">
          {specialization}
        </span>
        <div className="flex items-center gap-[6px] ">
          <span className="flex items-center gap-[6px] text-[14px]  leading-6 lg:text-[16px] lg:leading-7 font-semibold text-gray-700 ">
            <FaStar className="text-2xl text-yellow-400" />
            {avgRating}
          </span>
          <span className="tetx-[14px] leading-6 lg:text-[16px] lg:leading-7 font-400 text-gray-700">
            ({totalrating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between ">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-gray-700">
            + {totalpatients} Patients
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-gray-700">
            {" "}
            at {hospital}
          </p>
        </div>
        <Link
          href={"/doctors"}
          className=" rounded-full border border-solid border-black w-[44px] h-[44px]  flex items-center justify-center group hover:bg-blue-600 hover:border-none transition-all duration-500 ease-in-out"
        >
          <GoArrowRight className="w-5 h-5 group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
