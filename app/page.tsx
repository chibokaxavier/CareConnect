import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="">
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
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
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] ">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellow-300 rounded-full block mt-[-14px]  "></span>
                    <p className="text_para">Years of experience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] ">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purple-300 rounded-full block mt-[-14px]  "></span>
                    <p className="text_para">Clinic Location</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] ">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-blue-400 rounded-full block mt-[-14px]  "></span>
                    <p className="text_para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
