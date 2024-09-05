import React from "react";
import { formateDate } from "../utils/fomatDate";
interface DoctorProfile {
  name: string | undefined;
  qualifications?: any[];
  experiences?: any[];
  about?: string;
}
const DoctorAbout = ({
  name,
  qualifications,
  experiences,
  about,
}: DoctorProfile) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-gray-700  font-semibold flex items-center gap-2">
          About
          <span className="text-gray-400 font-bold text-[24px] leading-9">
            {" "}
            {name}
          </span>
        </h3>
        <p className="text_para">{about}</p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-gray-700  font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className="flex sm:flex-row mb-[30px] sm:justify-between flex-col sm:items-end md:gap-5 "
            >
              <div>
                <span className="text-gray-300 text-[15px] leading-7 font-semibold">
                  {formateDate(item.startingDate, "")} -
                  {formateDate(item.endingDate, "")}
                </span>
                <p className="text-[16px] font-normal leading-6 text-gray-600 ">
                  {item.degree}
                </p>
              </div>
              <p className="text-[16px] font-normal leading-6 text-gray-600 ">
                {item.university}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-gray-700 font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experiences?.map((item, index) => (
            <li key={index} className="p-4 rounded bg-[#fff9ea]">
              <span>
                {formateDate(item.startingDate, "")} -
                {formateDate(item.endingDate, "")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-gray-900">
                {item.position}
              </p>
              <p className="text-[14px] leading-5 text-gray-900 font-medium">
                {item.hospital}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
