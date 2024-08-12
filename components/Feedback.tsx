"use client";
import React, { useState } from "react";
import { formateDate } from "../utils/fomatDate";
import { FaStar } from "react-icons/fa";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  const [shwoFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <div>
          <h4 className="text-[20px] leading-[30px] mb-[30px] font-bold text-gray-800">
            All reviews (272)
          </h4>
          <div className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2017/11/10/05/46/group-2935521_640.png"
                  className="w-full rounded-full "
                  alt=""
                />
              </figure>
              <div>
                <h5 className="text-16px leading-6 text-blue-600 font-bold">
                  Jadon Sancho
                </h5>
                <p className="text-[14px] leading-6 text-gray-700">
                  {formateDate("1-12-2022", "")}
                </p>
                <p className="text_para font-medium mt-3 text-[15px]">
                  Good Services, Highly recommend
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(5).keys()].map((_, index) => (
                <FaStar className="text-blue-800" />
              ))}
            </div>
          </div>
        </div>
        {!shwoFeedbackForm && (
          <div className="text-center">
            <button
              className="btn"
              onClick={() => {
                setShowFeedbackForm(true);
              }}
            >
              Give Feedback
            </button>
          </div>
        )}
        {shwoFeedbackForm && <FeedbackForm/>}
      </div>
    </div>
  );
};

export default Feedback;
