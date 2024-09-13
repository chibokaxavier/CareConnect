import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6 md:mx-auto">
        <div className="text-center ">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done !
          </h3>
          <p className="text-gray-600 my-2 ">
            Thank you for completing your secure online payment
          </p>
          <p>Have a great day !</p>
          <div className="py-10 text-center">
            <Link
              href="/"
              className="px-12 bg-blue-700 text-white font-semibold py-3 "
            >
              Go back home{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
