import React from "react";
import useFetchData from "../../../../../hooks/useFetchData";
import { BASE_URL } from "../../../../config";
import BounceLoader from "react-spinners/BounceLoader";
import DoctorCard from "../../../../../components/DoctorCard";

export interface DoctorProps {
  _id: string;
  name: string;
}
export interface Appointment {
  _id: string;
  name: string;
}

const Bookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData<Appointment[]>(
    `${BASE_URL}/users/appointments/my-appointments`
  );

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
        <>
          {appointments && appointments.length > 0 ? (
            <div className="grid grid-col-1 lg:grid-cols-2 gap-5">
              {appointments.map((appointment) => (
                <DoctorCard doctor={appointment} key={appointment._id} />
              ))}
            </div>
          ) : (
            <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-blue-700">
              You did not book any doctor yet
            </h2>
          )}
        </>
      )}
      {/* {!loading && !error && appointments?.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-blue-700">
          You did not book any doctor yet
        </h2>
      )} */}
    </div>
  );
};

export default Bookings;
