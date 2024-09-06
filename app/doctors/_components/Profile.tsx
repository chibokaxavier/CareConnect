"use client";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import uploadImageToCloudinary from "../../../utils/uploadCloudinary";
import { BASE_URL } from "../../config";
import { useAuth } from "../../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { DoctorProfile } from "../profile/me/page";
import "react-toastify/dist/ReactToastify.css";

interface FormDataRecord {
  [key: string]: any[];
}
interface Qualification {
  startingDate: string | undefined;
  endingDate: string | undefined;
  degree: string;
  university: string;
}

interface Experience {
  startingDate: string | undefined;
  endingDate: string | undefined;
  position: string;
  hospital: string;
}

interface TimeSlot {
  day: string | number | readonly string[] | undefined;
  startingTime: string | number | readonly string[] | undefined;
  endingTime: string | number | readonly string[] | undefined;
}

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: number | string;
  bio: string;
  gender: string;
  specialization: string;
  ticketPrice: string | number | readonly string[] | undefined | null;
  qualifications: Qualification[];
  experiences: Experience[];
  timeSlots: TimeSlot[];
  about: string;
  photo: File | null | string | undefined;
}

interface DoctorProps {
  doctorData: DoctorProfile | null;
  refetchUserData: () => void;
}

const Profile = ({ doctorData, refetchUserData }: DoctorProps) => {
  const { token, dispatch } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: null,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  });
  useEffect(() => {
    if (doctorData) {
      setFormData({
        name: doctorData.name || "",
        email: doctorData.email || "",
        password: "", // Assuming you don't want to prefill passwords for security reasons
        phone: doctorData.phone || "",
        bio: doctorData.bio || "",
        gender: doctorData.gender || "",
        specialization: doctorData.specialization || "",
        ticketPrice: doctorData.ticketPrice || null,
        qualifications: doctorData.qualifications
          ? doctorData.qualifications.map((qualification: any) => ({
              startingDate: qualification.startingDate,
              endingDate: qualification.endingDate,
              degree: qualification.degree,
              university: qualification.university,
            }))
          : [],
        experiences: doctorData.experiences
          ? doctorData.experiences.map((experience: any) => ({
              startingDate: experience.startingDate,
              endingDate: experience.endingDate,
              position: experience.position,
              hospital: experience.hospital,
            }))
          : [],
        timeSlots: doctorData.timeSlots
          ? doctorData.timeSlots.map((timeSlot: any) => ({
              day: timeSlot.day,
              startingTime: timeSlot.startingTime,
              endingTime: timeSlot.endingTime,
            }))
          : [],
        about: doctorData.about || "",
        photo: doctorData.photo || null,
      });
    }
  }, [doctorData]);
  const [photoPreview, setPhotoPreview] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (formData.photo instanceof File) {
      const objectUrl = URL.createObjectURL(formData.photo);
      setPhotoPreview(objectUrl);

      // Clean up memory when the component unmounts or when the photo changes
      return () => URL.revokeObjectURL(objectUrl);
    } else if (typeof formData.photo === "string") {
      // If photo is a string (e.g., a URL from Cloudinary)
      setPhotoPreview(formData.photo);
    } else {
      setPhotoPreview(undefined);
    }
  }, [formData.photo]);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e: any) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData?._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const { message, data } = await res.json();
      if (!res.ok) {
        throw Error;
      }
      dispatch({
        type: "UPDATE",
        payload: {
          user: data,
        },
      });
      toast.success(message);
      setTimeout(() => {
        // setLoacalLoading(false);
        refetchUserData();
      }, 5000);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const addItem = (key: keyof FormData, item: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: [...(prev[key] as any[]), item],
    }));
  };

  const handleReusableInputChangeFunc = (
    key: keyof FormData,
    index: number,
    e: any
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedItems = [...(prev[key] as any[])]; // Clone the array

      if (!updatedItems[index]) {
        updatedItems[index] = {}; // Initialize the object if it's undefined
      }

      updatedItems[index][name] = value; // Update the specific field in the object

      return {
        ...prev, // Spread the previous state
        [key]: updatedItems, // Set the updated array
      };
    });
  };
  const deleteItem = (key: keyof FormData, index: number) => {
    setFormData((prev) => {
      const currentValue = prev[key];
      // Ensure the value is an array before using filter
      if (Array.isArray(currentValue)) {
        return {
          ...prev,
          [key]: currentValue.filter((_, i: number) => i !== index),
        };
      }
      // If it's not an array, just return the previous state without changes
      return prev;
    });
  };
  const addQualifications = (e: any) => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: undefined,
      endingDate: undefined,
      degree: "PHD",
      university: "Havard medical school",
    });
  };
  const handleQualificationChange = (e: any, index: number) => {
    handleReusableInputChangeFunc("qualifications", index, e);
  };
  const deleteQualification = (e: any, index: number) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  const addExperiences = (e: any) => {
    e.preventDefault();
    addItem("experiences", {
      startingDate: undefined,
      endingDate: undefined,
      position: "Senior surgeon",
      hospital: "Havard Teaching Hospital ",
    });
  };
  const handleExperienceChange = (e: any, index: number) => {
    handleReusableInputChangeFunc("experiences", index, e);
  };
  const deleteExperience = (e: any, index: number) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };
  const addTimeSlot = (e: any) => {
    e.preventDefault();
    addItem("timeSlots", {
      day: "Monday",
      startingTime: "10:00",
      endingTime: "04:00",
    });
  };
  const handleTimeSlotChange = (e: any, index: number) => {
    handleReusableInputChangeFunc("timeSlots", index, e);
  };
  const deleteTimeSlot = (e: any, index: number) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };
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
            name="phone"
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
                placeholder="100"
                onChange={handleInputChange}
                //@ts-ignore
                value={formData.ticketPrice}
                name="ticketPrice"
                className="form_input"
              />
            </div>
          </div>
        </div>
        <div className="mb-5 ">
          <p className="form_label">Qualifications*</p>
          {formData.qualifications?.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p>Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p>Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5 ">
                  <div>
                    <p>Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>{" "}
                  <div>
                    <p>University*</p>
                    <input
                      type="type"
                      name="university"
                      value={item.university}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="bg-red-500  p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer  "
                >
                  <MdDeleteForever />
                </button>
              </div>
            );
          })}
          <button
            onClick={addQualifications}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit "
          >
            Add Qualification
          </button>
        </div>
        <div className="mb-5 ">
          <p className="form_label">Experiences*</p>
          {formData.experiences?.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p>Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>{" "}
                  <div>
                    <p>Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5 ">
                  <div>
                    <p>Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>{" "}
                  <div>
                    <p>Hospital*</p>
                    <input
                      type="type"
                      name="hospital"
                      value={item.hospital}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className="bg-red-500  p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer  "
                >
                  <MdDeleteForever />
                </button>
              </div>
            );
          })}
          <button
            onClick={addExperiences}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit "
          >
            Add Experience
          </button>
        </div>
        <div className="mb-5 ">
          <p className="form_label">Time slots*</p>
          {formData.timeSlots?.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p>Day*</p>
                    <select
                      name="day"
                      value={item.day}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className="form-input py-3.5 outline-none focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div>
                    <p>Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className="form_input"
                    />
                  </div>
                  <div>
                    <p>Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className="form_input"
                    />
                  </div>
                  <div className="flex items-center ">
                    <button
                      onClick={(e) => deleteTimeSlot(e, index)}
                      className="bg-red-500  p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer  "
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={addTimeSlot}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit "
          >
            Add TimeSlot
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">About*</p>
          <textarea
            name="about"
            id=""
            rows={5}
            value={formData.about}
            placeholder="Write about you"
            onChange={handleInputChange}
            className="form_input"
          ></textarea>
        </div>
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full  border-2 border-solid border-blue-700 flex items-center justify-center">
              <img src={photoPreview} alt="" className="w-full rounded-full" />
            </figure>
          )}
          <div className="relative w-[130px] h-[50px] ">
            <input
              type="file"
              name="photo"
              id="customFile"
              accept=".jpg,.png"
              onChange={handleFileInputChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-blue-300 text-gray-800 font-semibold rounded-lg truncate cursor-pointer "
            >
              Upload photo
            </label>
          </div>
        </div>
        <div className="mt-7">
          <button
            className="bg-blue-600 text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg "
            type="submit"
            onClick={updateProfileHandler}
          >
            Update Profile
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Profile;
