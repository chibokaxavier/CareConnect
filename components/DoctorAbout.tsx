import React from "react";
import { formateDate } from "../utils/fomatDate";
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-gray-700  font-semibold flex items-center gap-2">
          About of
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
                {formateDate("2-05-2012", "")} - {formateDate("11-19-2014", "")}
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
    </div>
  );
};

export default DoctorAbout;
