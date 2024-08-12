"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg  shadow-md px-5 md:p-10">
        <h3 className="text-gray-900 text-[22px] mb-10 font-bold leading-9">
          Hello <span className="text-gray-500">Welcome</span> Back 🎉
        </h3>
        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-black focus:outline-none focus:border-blue-700 text-[16px] leading-7 text-gray-700 placeholder:text-gray-400 cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-black focus:outline-none focus:border-blue-700 text-[16px] leading-7 text-gray-700 placeholder:text-gray-400  cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-blue-700 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 "
            >
              Login
            </button>
          </div>

          <p className="mt-5 text-gray-700 text-center">
            Dont&apos;t have an account?{" "}
            <Link href={"/signup"} className="text-blue-700 font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default page;
