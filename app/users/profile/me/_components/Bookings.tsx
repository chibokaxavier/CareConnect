import React from "react";
import useFetchData from "../../../../../hooks/useFetchData";
import { BASE_URL } from "../../../../config";
import BounceLoader from "react-spinners/BounceLoader";
import DoctorCard from "../../../../../components/DoctorCard";

export interface DoctorProps {
  _id: string;
  name: string;
}

const Bookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  console.log(appointments);

  return (
    <div>
      {loading && !error && (
        <div className="flex my-28 justify-center text-center items-center">
          <BounceLoader color="#111111" size={100} />
        </div>
      )}
      {error && !loading && (
        <div className="flex w-full h-full my-20  justify-center text-center items-center">
          <h3 className="text-gray-800 text-[20px] leading-[30px] font-semibold">
            {error}
          </h3>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-col-1 lg:grid-cols-2 gap-5  ">
          {appointments.map((doctor: DoctorProps) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}
      {!loading && !error && appointments?.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-blue-700">
          You did not book any doctor yet
        </h2>
      )}
    </div>
  );
};

export default Bookings;
