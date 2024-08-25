import React from "react";
import { BiMenu } from "react-icons/bi";

interface TabProps {
  tab: string;
  setTab: (tab: string) => void;
}

const Tabs = ({ tab, setTab }: TabProps) => {
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        
      </div>
    </div>
  );
};

export default Tabs;
