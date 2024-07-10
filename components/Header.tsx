"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Conatct",
  },
];
const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>CareConnect</div>
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.path}
                    className={
                      pathName === link.path
                        ? "text-blue-500 text-[16px] leading-7 font-[600] "
                        : "text-gray-500 text-[16px] leading-7 font-[500] hover:text-blue-500"
                    }
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
