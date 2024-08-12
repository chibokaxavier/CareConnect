import React from "react";

const SidePanel = () => {
  return (
    <div className="shadow-2xl p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket price</p>
        <span className="text-gray-700 text-[16px] leading-7 lg:text-[22px] lg:leading-8 font-bold ">
          50 USD
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-gray-700">
          {" "}
          Available Time slots:
        </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 font-semibold text-gray-800">
              Sundays
            </p>{" "}
            <p className="text-[15px] leading-6 font-semibold text-gray-800">
              4:00pm - 9:30pm
            </p>
          </li>{" "}
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 font-semibold text-gray-800">
              Tuesdays
            </p>{" "}
            <p className="text-[15px] leading-6 font-semibold text-gray-800">
              4:00pm - 9:30pm
            </p>
          </li>{" "}
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 font-semibold text-gray-800">
              Thursdays
            </p>{" "}
            <p className="text-[15px] leading-6 font-semibold text-gray-800">
              4:00pm - 9:30pm
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full  rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
