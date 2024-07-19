import React from "react";
import DoctorCard from "./DoctorCard";

const doctors = [
  {
    id: "01",
    name: "Dr, James Anderson",
    specialization: "Surgeon",
    avgRating: 4.8,
    totalrating: 272,
    photo: "./male.jpg",
    totalpatients: 1500,
    hospital: "Mount Horeb Hospital,Tankuya",
  },
  {
    id: "02",
    name: "Dr, Sandra Michael",
    specialization: "Neurologist",
    avgRating: 4.9,
    totalrating: 22,
    photo: "./ai-doc.png",
    totalpatients: 256,
    hospital: "Rehoboths Hospital,uhutu",
  },
  {
    id: "03",
    name: "Dr, Sarah Edward",
    specialization: "Dermatologist",
    avgRating: 4.2,
    totalrating: 122,
    photo: "./doctor.png",
    totalpatients: 935,
    hospital: " Jacobs memorial Hospital,Ibiza",
  },
];

const DoctorList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]  lg:mt-[55px] text-center">
      {doctors.map((item) => {
        return <DoctorCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default DoctorList;
