"use client";
import React, { useState } from "react";
import ProtectedRoute from "../../../../components/ProtectedRoute";
import useFetchData from "../../../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
import BounceLoader from "react-spinners/BounceLoader";
import Tabs from "../../_components/Tabs";
import { FaCircleInfo, FaStar } from "react-icons/fa6";
import DoctorAbout from "../../../../components/DoctorAbout";
import Profile from "../../_components/Profile";
import Appointments, { AppointmentProps } from "../../_components/Appointments";

export interface DoctorProfile {
  _id: string;
  email: string;
  name?: string | undefined;
  phone?: number;
  photo?: string;
  gender?: string;
  ticketPrice?: number;
  role?: string;
  specialization?: string;
  qualifications?: string[];
  experiences?: string[];
  bio?: string;
  about?: string;
  timeSlots?: string[];
  reviews?: [];
  averageRating?: number;
  totalRating?: number;
  isApproved?: "pending" | "approved" | "cancelled";
  appointments: AppointmentProps[] | undefined;
}

interface Doctor {
  data: DoctorProfile;
  loading: boolean;
  error: string;
}
const page = () => {
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const { data, loading, error } = useFetchData<DoctorProfile>(
    `${BASE_URL}/doctors/profile/me`,
    [shouldRefetch]
  );
  const refetch = () => {
    setShouldRefetch((prev) => !prev);
  };

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
            <section className="lg:col-span-2 ">
              {data?.isApproved === "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <FaCircleInfo className="h-5 w-5 flex-shrink-0" />
                  <span className="sr-only"> Info</span>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We&apos;ll
                    review manually and approve within 3days
                  </div>
                </div>
              )}
              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    {" "}
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img src={data?.photo} alt="" className="w-full" />
                      </figure>
                      <div>
                        <span className="bg-[#CCF0F3] text-indigo-400 py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                          {data?.specialization}
                        </span>
                        <h3 className="text-[22px] leading-9 font-bold text-gray-800 mt-3">
                          {data?.name}
                        </h3>
                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-gray-800 text-[14px] leading-5 lg:text-[16px] lg:leading-6  font-semibold">
                            <FaStar className="text-yellow-400" />{" "}
                            {data?.averageRating}
                          </span>
                          <span className="flex items-center gap-[6px] text-gray-800 text-[14px] leading-5 lg:text-[16px] lg:leading-6  font-semibold">
                            ({data?.totalRating})
                          </span>
                        </div>

                        <p className="text_para font-[15px] lg:max-w-[390px] leading-6 ">
                          {data?.bio}
                        </p>
                      </div>
                    </div>
                    <DoctorAbout
                      name={data?.name}
                      about={data?.about}
                      qualifications={data?.qualifications}
                      experiences={data?.experiences}
                    />
                  </div>
                )}
                {tab === "appointments" && (
                  <Appointments appointments={data?.appointments} />
                )}
                {tab === "profile" && (
                  <div>
                    <Profile doctorData={data} refetchUserData={refetch} />
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default page;
