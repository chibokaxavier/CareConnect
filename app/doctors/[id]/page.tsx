"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import DoctorAbout from "../../../components/DoctorAbout";
import Feedback from "../../../components/Feedback";

const page = () => {
  const [tabs, setTabs] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 ">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src="/doctor1.jpg" className="rounded-md" alt="" />
              </figure>
              <div>
                <span className="bg-green-200 text-gray-500 py-1 px-6 lg:py-2 text-[12px] lg:text-[16px] lg:leading-7 leading-4 font-semibold rounded ">
                  Surgeon
                </span>
                <h2 className="text-[22px] leading-9 mt-3 font-bold text-gray-700">
                  Jane Sanders
                </h2>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:leading-7 lg:text-[16px] text-gray-700">
                    <FaStar className="text-yellow-400" /> 4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:leading-7 lg:text-[16px]  font-[400] ">
                    (272)
                  </span>
                </div>

                <p className=" text_para text-[14px] leading-6  md:text-[15px] lg:max-w-[390px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias sunt sequi esse vitae fugiat expedita nostrum,
                  magnam, hic, error ipsum beatae ducimus illo quod et. Pariatur
                  reiciendis sequi reprehenderit nostrum.
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTabs("about")}
                className={`${
                  tabs === "about" && "border-blue-600 border-b border-solid"
                } text-[16px] py-2  px-5 leading-7 text-gray-700 mr-5`}
              >
                About
              </button>
              <button
                onClick={() => setTabs("feedback")}
                className={` ${
                  tabs === "feedback" && "border-blue-600 border-b border-solid"
                } py-2 px-5 leading-7 text-gray-700 mr-5`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tabs === "about" && <DoctorAbout />}
              {tabs === "feedback" && <Feedback />}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default page;
