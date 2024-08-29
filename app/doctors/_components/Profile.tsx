"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  gender: string;
  specialization: string;
  ticketPrice: string | number | readonly string[] | undefined | null;
  qualifications: [];
  experiences: [];
  timeSlots: [];
}

const Profile = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: null,
    qualifications: [],
    experiences: [],
    timeSlots: [],
  });
  const handleInputChange = () => {};
  return (
    <div>
      <h2 className="text-gray-800 font-bold text-[24px] leading-9 mb-10 ">
        Profile information
      </h2>
      <form action="">
        <div className="mb-5">
          <p className="form_label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form_input"
          />
        </div>{" "}
        <div className="mb-5">
          <p className="form_label">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email "
            className="form_input"
            readOnly
            aria-readonly
            disabled
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Phone*</p>
          <input
            type="number"
            name="email"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number "
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio "
            className="form_input"
            maxLength={100}
          />
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form_label">Gender*</p>
              <select
                name="gender"
                id=""
                value={formData.gender}
                onChange={handleInputChange}
                className="py-3.5 form_input"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form_label">Specialization*</p>
              <select
                name="specialization"
                id=""
                value={formData.specialization}
                onChange={handleInputChange}
                className="py-3.5 form_input"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div>
              <p className="form_label"> Ticket Price*</p>
              <input
                type="number"
                onChange={handleInputChange}
                //@ts-ignore
                value={formData.ticketPrice}
                name="ticketPrice"
                className="form_input"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
