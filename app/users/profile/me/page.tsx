"use client";
import React from "react";
import { useAuth } from "../../../../context/AuthContext";
import ProtectedRoute from "../../../../components/ProtectedRoute";

const page = () => {
  const { token, role, user } = useAuth();

  return (
    // <ProtectedRoute allowedRoles={["patient"]}>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-blue-600">
                <img src="" alt="" className="w-full h-full rounded-full" />
              </figure>
            </div>
            <div className="text-center mt-4 ">
              <h3 className="text-[18px] leading-[30px] text-gray-800 font-bold">
                Chiboka Xavier
              </h3>
              <p className=" text-gray-800 text-[15px] leading-6 font-medium ">
                example@gmail.com
              </p>
              <p className=" text-gray-800 text-[15px] leading-6 font-medium ">
                Blood Type:{" "}
                <span className="ml-2 text-gray-800 text-[22px] leading-8 ">
                  O-
                </span>
              </p>
            </div>
            <div className="mt-[50px] md:mt-[100px]">
              <button className="w-full bg-gray-700 p-3 text-[16px] leading-7 rounded-md">
                Logout
              </button>
              <button className="w-full bg-red-700 p-3 text-[16px] leading-7 rounded-md">
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
    // </ProtectedRoute>
  );
};

export default page;
