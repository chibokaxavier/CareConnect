import { useRouter } from "next/navigation";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { useAuth } from "../../../context/AuthContext";

interface TabProps {
  tab: string;
  setTab: (tab: string) => void;
}

const Tabs = ({ tab, setTab }: TabProps) => {
  const router = useRouter();
  const { dispatch } = useAuth();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    router.push("/");
  };
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

        <div className="mt-[50px] md:mt-[100px] w-full  text-white">
          <button
            onClick={handleLogout}
            className="w-full bg-gray-700 p-3 text-[16px] leading-7 rounded-md"
          >
            Logout
          </button>
          <button className="w-full bg-red-700 p-3 mt-4 text-[16px] leading-7 rounded-md">
            Delete account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
