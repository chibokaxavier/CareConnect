"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async (e: any) => {
    e.preventDefault();
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
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
