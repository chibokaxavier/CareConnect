"use client";
import React, { useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import ProtectedRoute from "../../../../components/ProtectedRoute";
import Bookings from "./_components/Bookings";
import Profile from "./_components/Profile";
import useGetProfile from "../../../../hooks/useFetchData";
import { BASE_URL } from "../../../../app/config";
import BounceLoader from "react-spinners/BounceLoader";
import { useRouter } from "next/navigation";

interface UserProfile {
  appointments: [];
  name: string;
  email: string;
  photo: string | null;
  gender: string;
  bloodType: string;
  _id: string;
}

const Page = () => {
  const { dispatch } = useAuth();
  const [tabs, setTabs] = useState("bookings");
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const router = useRouter();

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile<UserProfile>(`${BASE_URL}/users/profile/me`, [
    shouldRefetch,
  ]);
  console.log(userData);

  const refetch = () => {
    setShouldRefetch((prev) => !prev);
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    router.push("/");
  };

  return (
    <ProtectedRoute allowedRoles={["patient"]}>
      <section>
        <div className="max-w-[1170px] px-5 mx-auto ">
          {loading && !error && (
            <div className="flex my-28 justify-center text-center items-center">
              <BounceLoader color="#111111" size={100} />
            </div>
          )}
          {error && !loading && (
            <div className="flex w-full h-full my-20  justify-center text-center items-center">
              <h3 className="text-gray-800 text-[20px] leading-[30px] font-semibold">
                {error}
              </h3>
            </div>
          )}
          {!loading && !error && (
            <div className="grid md:grid-cols-3 gap-10">
              <div className="pb-[50px] px-[30px] rounded-md">
                <div className="flex items-center justify-center">
                  <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-blue-600">
                    <img
                      src={userData?.photo || ""}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </figure>
                </div>
                <div className="text-center mt-4 ">
                  <h3 className="text-[18px] leading-[30px] text-gray-800 font-bold">
                    {userData?.name}
                  </h3>
                  <p className=" text-gray-800 text-[15px] leading-6 font-medium ">
                    {userData?.email}
                  </p>
                  <p className=" text-gray-800 text-[15px] leading-6 font-medium ">
                    Blood Type:{" "}
                    <span className="ml-2 text-gray-800 text-[22px] leading-8 ">
                      {userData?.bloodType}
                    </span>
                  </p>
                </div>
                <div className="mt-[50px] md:mt-[100px] text-white">
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
              <div className="md:col-span-2 md:px-[30px]">
                <div>
                  <button
                    onClick={() => setTabs("bookings")}
                    className={`${
                      tabs === "bookings" &&
                      "bg-blue-600 text-white font-normal"
                    } p-2 mr-5 px-5 rounded-md text-gray-800 font-semibold text-[16px] leading-7 border border-solid border-blue-700 `}
                  >
                    My Bookings
                  </button>
                  <button
                    onClick={() => setTabs("settings")}
                    className={`${
                      tabs === "settings" &&
                      "bg-blue-600 text-white font-normal"
                    } p-2 mr-5 px-5 rounded-md text-gray-800 font-semibold text-[16px] leading-7 border border-solid border-blue-700 `}
                  >
                    Profile Settings
                  </button>
                </div>
                {tabs === "bookings" && <Bookings />}{" "}
                {tabs === "settings" && (
                  <Profile user={userData} refetchUserData={refetch} />
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default Page;
