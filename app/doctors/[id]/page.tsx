"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import DoctorAbout from "../../../components/DoctorAbout";
import Feedback from "../../../components/Feedback";
import SidePanel, { TimeSlot } from "../../../components/SidePanel";
import { BASE_URL } from "../../config";
import BounceLoader from "react-spinners/BounceLoader";
import useFetchData from "../../../hooks/useFetchData";
import { AppointmentProps } from "../_components/Appointments";
import { Experience } from "../_components/Profile";

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
  experiences?: Experience[];
  bio?: string;
  about?: string;
  timeSlots?: TimeSlot[];
  reviews?: [];
  averageRating?: number;
  totalRating?: number;
  isApproved?: "pending" | "approved" | "cancelled";
  appointments: AppointmentProps[] | undefined;
}

const page = ({ params }: { params: { id: string } }) => {
  const [tabs, setTabs] = useState("about");
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData<DoctorProfile>(`${BASE_URL}/doctors/${params.id}`, [
    shouldRefetch,
  ]);
  const refetch = () => {
    setShouldRefetch((prev) => !prev);
  };
  if (!doctor) {
    return (
      <div className="flex my-28 justify-center text-center items-center">
        <BounceLoader color="#111111" size={100} />
      </div>
    );
  }
  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
  } = doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
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
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5 ">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} className="rounded-md" alt="" />
                </figure>
                <div>
                  <span className="bg-green-200 text-gray-500 py-1 px-6 lg:py-2 text-[12px] lg:text-[16px] lg:leading-7 leading-4 font-semibold rounded ">
                    {specialization}
                  </span>
                  <h2 className="text-[22px] leading-9 mt-3 font-bold text-gray-700">
                    {name}
                  </h2>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:leading-7 lg:text-[16px] text-gray-700">
                      <FaStar className="text-yellow-400" /> {averageRating?.toFixed(2)}
                    </span>
                    <span className="text-[14px] leading-5 lg:leading-7 lg:text-[16px]  font-[400] ">
                      ({totalRating})
                    </span>
                  </div>

                  <p className=" text_para text-[14px] leading-6  md:text-[15px] lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTabs("about")}
                  className={`${
                    tabs === "about" && "border-blue-600 border-b border-solid"
                  } text-[16px] py-2  px-5 leading-7 text-gray-700 mr-5`}
                >
                  About
                </button>
                <button
                  onClick={() => setTabs("feedback")}
                  className={` ${
                    tabs === "feedback" &&
                    "border-blue-600 border-b border-solid"
                  } py-2 px-5 leading-7 text-gray-700 mr-5`}
                >
                  Feedback
                </button>
              </div>
              <div className="mt-[50px]">
                {tabs === "about" && (
                  <DoctorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                  />
                )}
                {tabs === "feedback" && (
                  <Feedback
                    id={params.id}
                    reviews={reviews}
                    totalRating={totalRating}
                    refetchUserData={refetch}
                  />
                )}
              </div>
            </div>
            <div>
              <SidePanel
                doctorId={doctor._id}
                ticketPrice={ticketPrice}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
