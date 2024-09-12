"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { BASE_URL } from "../app/config";
import { useAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { error } from "console";
import HashLoader from "react-spinners/HashLoader";

const FeedbackForm = ({ params }: { params: { id: string } }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const { token, dispatch } = useAuth();

  const handleSubmitReview = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error("Rating and Review Fields are required");
      }
      const res = await fetch(`${BASE_URL}/doctors/${params.id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, reviewText }),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      setLoading(false);
      toast.success(result.message);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <form action="">
      <div>
        <h3 className="text-gray-600 text-[16px] leading-6 font-semibold mb-4 mt-0 ">
          How would rate the overall experience?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index: number) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellow-600"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <FaStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-gray-600 text-[16px] leading-6 font-semibold mb-4 mt-0 ">
          Share your feedback or suggestions ?*
        </h3>
        <textarea
          rows={5}
          className="border border-solid border-gray-700 focus:outline outline-blue-700 w-full px-4 py-3 rounded-md"
          placeholder="Write your message "
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn" onClick={handleSubmitReview}>
        {loading ? <HashLoader size={25} color="#fff" /> : "Submit Feedback"}
      </button>
      <ToastContainer />
    </form>
  );
};

export default FeedbackForm;
