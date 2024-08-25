"use client";
import React, { useState } from "react";
import ProtectedRoute from "../../../../components/ProtectedRoute";
import useFetchData from "../../../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
import BounceLoader from "react-spinners/BounceLoader";
import Tabs from "../../_components/Tabs";

const page = () => {
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/doctors/profile/me`
  );
  const [tab, setTab] = useState("overview");
  return (
    <ProtectedRoute allowedRoles={["doctor"]}>
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
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default page;
