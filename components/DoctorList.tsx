"use client";
import React from "react";
import DoctorCard from "./DoctorCard";
import useFetchData from "../hooks/useFetchData";
import { BASE_URL } from "../app/config";
import BounceLoader from "react-spinners/BounceLoader";
import { AppointmentProps } from "../app/doctors/_components/Appointments";
import { Experience } from "../app/doctors/_components/Profile";

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
  timeSlots?: string[];
  reviews?: [];
  averageRating?: number;
  totalRating?: number;
  isApproved?: "pending" | "approved" | "cancelled";
  appointments: AppointmentProps[] | undefined;
}

interface Doctor {
  data: DoctorProfile[];
  loading: boolean;
  error: string;
}

const DoctorList = () => {
  const {
    data: doctors,
    loading,
    error,
  } = useFetchData<DoctorProfile[]>(`${BASE_URL}/doctors`);
  return (
    <>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]  lg:mt-[55px] text-center">
          {doctors?.map((item: DoctorProfile) => {
            return <DoctorCard item={item} key={item._id} />;
          })}
        </div>
      )}
    </>
  );
};

export default DoctorList;
