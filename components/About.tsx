import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="">
      <div className="mx-10 lg:mx-20 items-center">
        <div className="flex justify-between items-center gap-[50px] lg:gap-[130px] xl:gap-10 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
            <img src="/ai-doc.png" className="rounded-md " alt="" />
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 text-center">
            <h2 className="heading"> Proud to be one of the nation&apos;s best</h2>
            <p className="text_para">
              {" "}
              For 30 years in a row ,U.S , News & world report has recognized us
              as one of the best public hospitals in the nation and #1 in New
              York
            </p>
            <p className="text_para mt-[30px]">
              {" "}
              Our best is something we strive for everyday , caring for our
              patients -not looking back at what we acomplished but what we can
              do tomorrow. Providing the best.
            </p>
            <Link href={"/"}>
              <button className="btn"> Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
