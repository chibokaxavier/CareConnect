"use client";
import React, { useState } from "react";
import { formateDate } from "../utils/fomatDate";
import { FaStar } from "react-icons/fa";
import FeedbackForm from "./FeedbackForm";

interface Review {
  user: {
    name: string;
    photo: string;
  };
  createdAt: string;
  reviewText: string;
  rating: number;
}

interface FeedbackProps {
  reviews?: Review[];
  totalRating?: number;
  id: string;
  refetchUserData: () => void;
}

const Feedback = ({
  id,
  reviews,
  totalRating,
  refetchUserData,
}: FeedbackProps) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <div>
          <h4 className="text-[20px] leading-[30px] mb-[30px] font-bold text-gray-800">
            All reviews ({totalRating})
          </h4>
          {reviews?.map((review, index) => (
            <div key={index} className="flex justify-between gap-10 mb-[30px]">
              <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full">
                  <img
                    src={review?.user?.photo}
                    className="w-full rounded-full "
                    alt=""
                  />
                </figure>
                <div>
                  <h5 className="text-16px leading-6 text-blue-600 font-bold">
                    {review?.user.name}
                  </h5>
                  <p className="text-[14px] leading-6 text-gray-700">
                    {formateDate(review?.createdAt, "")}
                  </p>
                  <p className="text_para font-medium mt-3 text-[15px]">
                    {review?.reviewText}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(review?.rating).keys()].map((_, index) => (
                  <FaStar className="text-blue-800" />
                ))}
              </div>
            </div>
          ))}
        </div>
        {!showFeedbackForm && (
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
        {showFeedbackForm && <FeedbackForm params={{ id }} refetch={refetchUserData} />}
      </div>
    </div>
  );
};

export default Feedback;
