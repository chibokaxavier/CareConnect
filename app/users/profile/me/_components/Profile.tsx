"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import uploadImageToCloudinary from "../../../../../utils/uploadCloudinary";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../../../config";
import HashLoader from "react-spinners/HashLoader";
import { useAuth } from "../../../../../context/AuthContext";

interface FormData {
  name: string | undefined; // Allowing undefined here
  email: string | undefined;
  password: string | undefined;
  photo: string | null;
  bloodType: string | undefined;
}
interface UserProps {
  appointments: [];
  name: string;
  email: string;
  photo: string | null;
  gender: string;
  bloodType: string;
  _id: string;
}
interface UserListProps {
  user: UserProps | null; // Expecting an array of UserProps or null
  refetchUserData: () => void;
}

const Profile = ({ user, refetchUserData }: UserListProps) => {
  const router = useRouter();
  const { token, dispatch } = useAuth();
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [localLoading, setLoacalLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    photo: null,
    bloodType: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: user?.name ?? "",
      email: user?.email ?? "",
      photo: user?.photo ?? null,
      bloodType: user?.bloodType ?? "",
    }));
  }, [user]);

  const notify = (message: string) => toast.success(message);
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e: any) => {
    const file = e.target.files[0];

    const data = await uploadImageToCloudinary(file);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };
  const submitHandler = async (e: any) => {
    e.preventDefault();
    setLoacalLoading(true);
    const updatedData = { ...formData };

    // Remove password if it's empty
    if (!updatedData.password) {
      delete updatedData.password;
    }
    try {
      const res = await fetch(`${BASE_URL}/users/${user?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Cache-Control": "no-store",
        },
        body: JSON.stringify(updatedData),
      });

      const { message, data } = await res.json();

      if (!res.ok) {
        console.error(message);
        throw new Error(message);
      }
      dispatch({
        type: "UPDATE",
        payload: {
          user: data,
        },
      });
      toast.success(message);
      setTimeout(() => {
        setLoacalLoading(false);
        refetchUserData();
      }, 5000);
    } catch (error: any) {
      toast.error(error.message);
      setLoacalLoading(false);
    }
  };
  return (
    <div className="mt-10">
      {" "}
      <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-black focus:outline-none focus:border-blue-700 text-[16px] leading-7 text-gray-700 placeholder:text-gray-400 cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-black focus:outline-none focus:border-blue-700 text-[16px] leading-7 text-gray-700 placeholder:text-gray-400 cursor-pointer"
            aria-readonly
            readOnly
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-black focus:outline-none focus:border-blue-700 text-[16px] leading-7 text-gray-700 placeholder:text-gray-400 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-black focus:outline-none focus:border-blue-700 text-[16px] leading-7 text-gray-700 placeholder:text-gray-400 cursor-pointer"
            required
          />
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full  border-2 border-solid border-blue-700 flex items-center justify-center">
              <img
                // src="./patient-avatar.png"
                src={formData.photo}
                alt=""
                className="w-full rounded-full"
              />
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
              {selectedFile ? selectedFile.name : "Upload Photo"}
            </label>
          </div>
        </div>
        <div className="mt-7">
          <button
            disabled={localLoading && true}
            type="submit"
            className="w-full bg-blue-700 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 "
          >
            {localLoading ? (
              <HashLoader size={25} color="#ffffff" />
            ) : (
              " Update"
            )}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Profile;
