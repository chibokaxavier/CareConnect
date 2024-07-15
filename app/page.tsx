import Image from "next/image";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <>
      <main className="">
        <section className="hero_section pt-[10px] 2xl:h-[800px]">
          <div className="mx-auto px-5 lg:px-10 xl:w-full">
            <div className="flex flex-col lg:flex-row xl:gap-[90px] lg:gap-[60px] items-center  ">
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-black font-[800] md:text-[60px] md:leading-[70px]">
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
      </main>
    </>
  );
}
