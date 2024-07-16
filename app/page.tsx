import Image from "next/image";
import Stats from "../components/Stats";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import About from "../components/About";
import ServiceList from "../components/ServiceList";

export default function Home() {
  return (
    <>
      <main className="">
        <section className="hero_section pt-[40px] xl:pt-[10px] 2xl:h-[800px]">
          <div className="mx-auto px-5 lg:px-10 xl:px-20 xl:w-full">
            <div className="flex flex-col lg:flex-row xl:gap-[90px] lg:gap-[60px] items-center  ">
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[40px] leading-[46px] text-black font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy , longer life
                  </h1>
                  <p className="text_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi nihil amet, culpa consequuntur rem repudiandae unde
                    iusto ab quaerat a itaque suscipit molestias autem quasi
                    porro. Praesentium consectetur temporibus fugiat.
                  </p>
                  <button className="btn">Request an appointment</button>
                </div>
                <div className="mt-[30px] lg:mt-[60px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <Stats />
                </div>
              </div>

              <div className="">
                <div>
                  <img
                    src="./Doctors-bro.png"
                    className="lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px] "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center ">
                Providing the best medical services
              </h2>
              <p className="text_para text-center">
                World-class care for everyone, Our health system offers
                unmatched expert health care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img
                    src="/Doctors-cuate.png"
                    alt=""
                    className="h-[200px] lg:h-[250px]"
                  />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 font-400 mt-4 text-center text-gray-600">
                    {" "}
                    World-class care for everyone, Our health system offers
                    unmatched expert health care.From the lab to the clinic.
                  </p>
                  <Link
                    href={"/doctors"}
                    className=" rounded-full border border-solid border-black mt-[30px] w-[44px] h-[44px] mx-auto flex items-center justify-center group hover:bg-blue-600 hover:border-none transition-all duration-500 ease-in-out"
                  >
                    <GoArrowRight className="w-5 h-5 group-hover:text-white" />
                  </Link>
                </div>
              </div>{" "}
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img
                    src="/Directions-bro.png"
                    alt=""
                    className="h-[200px] lg:h-[250px]"
                  />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 font-400 mt-4 text-center text-gray-600">
                    {" "}
                    World-class care for everyone, Our health system offers
                    unmatched expert health care.From the lab to the clinic.
                  </p>
                  <Link
                    href={"/doctors"}
                    className=" rounded-full border border-solid border-black mt-[30px] w-[44px] h-[44px] mx-auto flex items-center justify-center group hover:bg-blue-600 hover:border-none transition-all duration-500 ease-in-out"
                  >
                    <GoArrowRight className="w-5 h-5 group-hover:text-white" />
                  </Link>
                </div>
              </div>{" "}
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img
                    src="calendar.png"
                    alt=""
                    className="h-[200px] lg:h-[250px]"
                  />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className="text-[16px] leading-7 font-400 mt-4 text-center text-gray-600">
                    {" "}
                    World-class care for everyone, Our health system offers
                    unmatched expert health care.From the lab to the clinic.
                  </p>
                  <Link
                    href={"/doctors"}
                    className=" rounded-full border border-solid border-black mt-[30px] w-[44px] h-[44px] mx-auto flex items-center justify-center group hover:bg-blue-600 hover:border-none transition-all duration-500 ease-in-out"
                  >
                    <GoArrowRight className="w-5 h-5 group-hover:text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />

        <section>
          <div className="mx-10 lg:mx-20">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our medical services</h2>
              <p className="text_para text-center ">
                World class care for everyone.Our health system offers unmatched
                ,expert health care
              </p>
            </div>
            <ServiceList/>
          </div>
        </section>
      </main>
    </>
  );
}
