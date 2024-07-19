import Image from "next/image";
import Stats from "../components/Stats";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import About from "../components/About";
import ServiceList from "../components/ServiceList";
import { FaFileVideo } from "react-icons/fa";
import DoctorList from "../components/DoctorList";

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
            <ServiceList />
          </div>
        </section>

        <section>
          <div className="mx-10 lg:mx-20">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              <div className="xl:w-[670px]">
                <h2 className="heading">
                  Get virtual treatment <br />
                  anytime
                </h2>
                <ul className="pl-4">
                  <li className="text_para">1. Schedule appointments daily</li>
                  <li className="text_para">
                    2. Search for your physician here, and contact their office
                  </li>
                  <li className="text_para">
                    3. View our physicians who are accepting new patients , use
                    the online scheduling tool to select an appointment time
                  </li>
                </ul>
                <Link href={"/"}>
                  <button className="btn">Learn more</button>
                </Link>
              </div>
              <div className="relative z-10 xl:w-[770px] flex lg:justify-end justify-center  mt-[50px] lg:mt-0">
                <img src="/doctor.png" alt="" className="w-3/4 rounded-lg" />

                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                      <p className="text-[10px] leadinhg-[10px] lg:text-[14px] lg:leading-5 text-gray-600  font-[600]">
                        Tue,24
                      </p>
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-gray-600 font-[400]">
                        {" "}
                        10:00AM
                      </p>
                    </div>
                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center text-yellow-500 rounded py-1 px-[6px] lg:py-[3px] lg:px-[9px] text-2xl">
                      <FaFileVideo />
                    </span>
                  </div>

                  <div className="w-[65px] lg:w-[96px] bg-blue-300 py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-gray-500 font-[500] mt-2 lg:mt-4  rounded-full ">
                    Consultation
                  </div>

                  <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                    <img
                      src="/doctor.png"
                      className="w-8 h-8 rounded-full "
                      alt=""
                    />
                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-gray-600">
                      Jane Sanders
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-10 lg:mx-20">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our great doctors</h2>
              <p className="text_para text-center ">
                World class care for everyone.Our health system offers unmatched
                ,expert health care
              </p>
            </div>
            <DoctorList />
          </div>
        </section>
      </main>
    </>
  );
}
