import React from "react";
import { BiMenu } from "react-icons/bi";

interface TabProps {
  tab: string;
  setTab: (tab: string) => void;
}

const Tabs = ({ tab, setTab }: TabProps) => {
  return (
    <section>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-2xl items-center h-max rounded-md">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-blue-700 "
              : "bg-transparent text-gray-800 "
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-blue-700 "
              : "bg-transparent text-gray-800 "
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("profile")}
          className={`${
            tab === "profile"
              ? "bg-indigo-100 text-blue-700 "
              : "bg-transparent text-gray-800 "
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>
      </div>
    </section>
  );
};

export default Tabs;
