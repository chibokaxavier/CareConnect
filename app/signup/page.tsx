"use client";
import Link from "next/link";
import React, { useState } from "react";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import HashLoader from "react-spinners/HashLoader";

interface FormData {
  name: string;
  email: string;
  password: string;
  photo: File | null;
  gender: string;
  role: string;
}

const page = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });
  const notify = (message: string) => toast.success(message);
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e: any) => {
    const file = e.target.files[0];

    const data = await uploadImageToCloudinary(file);

    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };
  const submitHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message, data } = await res.json();
      if (!res.ok) {
        console.error(message);
        throw new Error(message);
      }
      toast.success(message);
      setTimeout(() => {
        setLoading(false);
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return (
    <section className="px-5 xl:px-0 py-10">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid-cols-1  grid lg:grid-cols-2">
          <div className="hidden lg:block bg-blue-700 rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src="./signup.gif" alt="" className="w-full  rounded-l-lg" />
            </figure>
          </div>
          <div className="rounded-l-lg lg:pl-16 py-10 ">
            <h3 className="text-[22px] text-gray-800 leading-9 font-bold mb-10">
              Create an <span className="text-blue-700">account</span>
            </h3>
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
                  required
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
                  required
                />
              </div>

              <div className="mb-5 flex  items-center justify-between">
                <label className="text-gray-800 font-bold text-[16px] leading-7 ">
                  Are you a:{" "}
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-gray-500 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none "
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label className="text-gray-800 font-bold text-[16px] leading-7 ">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="text-gray-500 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none "
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className="w-[60px] h-[60px] rounded-full  border-2 border-solid border-blue-700 flex items-center justify-center">
                    <img
                      src={previewURL}
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
                    required
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
                  disabled={loading && true}
                  type="submit"
                  className="w-full bg-blue-700 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 "
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    " Sign up"
                  )}
                </button>
              </div>
              <p className="mt-5 text-gray-700 text-center">
                Already have an account ?
                <Link
                  href={"/login"}
                  className="text-blue-600 ml-1 font-medium"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default page;
