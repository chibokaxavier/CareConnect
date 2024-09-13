import React from "react";
import { converTime } from "../utils/ConvertTime";
import { BASE_URL } from "../app/config";
import { useAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export interface TimeSlot {
  day: string | number | readonly string[] | undefined;
  startingTime: string | number | readonly string[] | undefined;
  endingTime: string | number | readonly string[] | undefined;
}

interface SidepanelProps {
  doctorId: string;
  ticketPrice?: number | undefined;
  timeSlots?: TimeSlot[] | undefined;
}

const SidePanel = ({ doctorId, ticketPrice, timeSlots }: SidepanelProps) => {
  const { token, dispatch } = useAuth();

  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      console.log("Response Status: ", res.status);  // Log response status
      console.log("Response Data: ", data);  
      if (!res.ok) {
        console.log(data.message);
        throw new Error(data.message + "Please try again ");
      }

      if (data.session.url) {
        console.log("Redirecting to: ", data.session.url); 
        window.location.href = data.session.url;
      }
      console.log("working");
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="shadow-2xl p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket price</p>
        <span className="text-gray-700 text-[16px] leading-7 lg:text-[22px] lg:leading-8 font-bold ">
          {ticketPrice} USD
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-gray-700">
          {" "}
          Available Time slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((timeSlot, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] capitalize leading-6 font-semibold text-gray-800">
                {timeSlot?.day}
              </p>{" "}
              <p className="text-[15px] leading-6 font-semibold text-gray-800">
                {converTime(timeSlot.startingTime)} -{" "}
                {converTime(timeSlot.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={bookingHandler} className="btn px-2 w-full  rounded-md">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
