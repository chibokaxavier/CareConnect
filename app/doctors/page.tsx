"use client";
import React, { useEffect, useState } from "react";
import DoctorCard from "../../components/DoctorCard";
import Testimonial from "../../components/Testimonial";
import { BASE_URL } from "../config";
import BounceLoader from "react-spinners/BounceLoader";
import useFetchData from "../../hooks/useFetchData";
import { AppointmentProps } from "./_components/Appointments";
import { Experience } from "./_components/Profile";

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

const Page = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const handleSearch = () => {
    setQuery(query.trim());
    console.log("handle search");
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);
  }, [query]);
  const {
    data: doctors,
    loading,
    error,
  } = useFetchData<DoctorProfile[]>(
    `${BASE_URL}/doctors?query=${debounceQuery}`
  );

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="mx-10 lg:mx-20 text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-4 bg-transparent w-full focus:outline-none cursor-text placeholder:text-gray-700"
              placeholder="Search Doctor by name or specilizations"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button
              onClick={handleSearch}
              className="btn mt-0 rounded-[0px] rounded-r-md"
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
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
          <div className="mx-10 lg:mx-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]  lg:mt-[55px] text-center">
              {doctors?.map((item: DoctorProfile) => {
                return <DoctorCard item={item} key={item._id} />;
              })}
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="mx-10 lg:mx-20">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text_para text-center ">
              World class care for everyone.Our health system offers unmatched
              ,expert health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Page;
