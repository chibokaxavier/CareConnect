"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Find a doctor",
      path: "/doctors",
    },
    {
      name: "Services",
      path: "/services",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <div
            key={index}
          >
            <Link
              href={link.path}
              className={`${
                link.path === pathName && "text-blue-600 border-b-2 border-blue-600 "
              }  font-medium hover:text-accent transition-all`}
            >
              {" "}
              {link.name}{" "}
            </Link>
          </div>
        );
      })}{" "}
    </nav>
  );
};

export default Nav;
