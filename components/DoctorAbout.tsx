import React from "react";
import { formateDate } from "../utils/fomatDate";
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-gray-700  font-semibold flex items-center gap-2">
          About
          <span className="text-gray-400 font-bold text-[24px] leading-9">
            {" "}
            Jane Sanders
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque impedit
          nesciunt dolorem voluptas? Modi illum similique maiores sit, officia
          unde? Similique, dolores suscipit! Deleniti accusantium, porro
          cupiditate id veritatis facilis?
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-gray-700  font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex sm:flex-row mb-[30px] sm:justify-between flex-col sm:items-end md:gap-5 ">
            <div>
              <span className="text-gray-300 text-[15px] leading-7 font-semibold">
                {formateDate("2-05-2007", "")} - {formateDate("11-19-2009", "")}
              </span>
              <p className="text-[16px] font-normal leading-6 text-gray-600 ">
                PHD in surgeon
              </p>{" "}
            </div>
            <p className="text-[16px] font-normal leading-6 text-gray-600 ">
              St Mary's Catholic hospital,San Anthonio
            </p>
          </li>
          <li className="flex sm:flex-row mb-[30px] sm:justify-between flex-col sm:items-end md:gap-5 ">
            <div>
              <span className="text-gray-300 text-[15px] leading-7 font-semibold">
                {formateDate("9-8-2010", "")} - {formateDate("4-7-2012", "")}
              </span>
              <p className="text-[16px] font-normal leading-6 text-gray-600 ">
                PHD in Optometry
              </p>{" "}
            </div>
            <p className="text-[16px] font-normal leading-6 text-gray-600 ">
              St Mary's Catholic hospital,San Anthonio
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-gray-700 font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span>
              {formateDate("9-9-2015", "")} - {formateDate("1-3-2021", "")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-gray-900">
              Sr Surgeon
            </p>
            <p className="text-[14px] leading-5 text-gray-900 font-medium">
              New Apollo Hospital,New York
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span>
              {formateDate("1-22-2021", "")} - Present
            </span>
            <p className="text-[16px] leading-6 font-medium text-gray-900">
              Sr Surgeon
            </p>
            <p className="text-[14px] leading-5 text-gray-900 font-medium">
              Last Haven Hospital,New York
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
