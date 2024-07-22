import React from "react";
import DoctorCard from "../../components/DoctorCard";
import Testimonial from "../../components/Testimonial";

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

const page = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="mx-10 lg:mx-20 text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-4 bg-transparent w-full focus:outline-none cursor-text placeholder:text-gray-700"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-10 lg:mx-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
            {doctors.map((item) => {
              return <DoctorCard item={item} key={item.id} />;
            })}
          </div>
        </div>
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

export default page;
