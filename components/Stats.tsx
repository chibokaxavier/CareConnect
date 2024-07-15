"use client";
import React from "react";
import CountUp from "react-countup";
const Stat = [
  { num: 3, text: "Years of Experience" },
  { num: 15, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 600, text: "Code Commits" },
];
const plus = "+";

const Stats = () => {
  return (
    <section>
      <div className="mx-auto container mb-4">
        <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none mx-auto">
          {Stat.map((item, index) => {
            return (
              <div
                className="flex justify-center xl:justify-start items-center flex-1 gap-4"
                key={index}
              >
                <span className="flex justify-center items-center">
                  <CountUp
                    className="font-semibold text-[30px] xl:text-6xl"
                    end={item.num}
                    duration={5}
                    delay={2}
                  />
                  +
                </span>
                <p
                  className={`${
                    item.text.length > 15 ? "max-w-[150px]" : "max-w-[100px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
