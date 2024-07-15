"use client";
import React from "react";
import CountUp from "react-countup";
const Stat = [
  { num: 30, text: "Years of Experience" },
  { num: 15, text: "Clinic location " },
  { num: 100, text: "Patient Satisfaction" },
];
const plus = "+";

const Stats = () => {
  return (
    <>
      <div>
        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] flex items-center ">
          <CountUp className="" end={30} duration={10} delay={0} />+
        </h2>
        <span className="w-[100px] h-2 bg-yellow-300 rounded-full block mt-[-14px]  "></span>
        <p className="text_para">Years of experience</p>
      </div>
      <div>
        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] flex items-center ">
          <CountUp className="" end={15} duration={10} delay={0} />+
        </h2>
        <span className="w-[100px] h-2 bg-purple-300 rounded-full block mt-[-14px]  "></span>
        <p className="text_para">Clinic Location</p>
      </div>
      <div>
        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] flex items-center ">
          <CountUp className="" end={100} duration={10} delay={0} />%
        </h2>
        <span className="w-[100px] h-2 bg-blue-400 rounded-full block mt-[-14px]  "></span>
        <p className="text_para">Patient Satisfaction</p>
      </div>
    </>
  );
};

export default Stats;
