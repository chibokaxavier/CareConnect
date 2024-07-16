import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    name: "Cancer Care",
    desc: "Our Cancer Care services provide comprehensive diagnosis, treatment, and support for patients with cancer. Our multidisciplinary team uses the latest technologies and personalized care plans to ensure the best possible outcomes.",
    bgColor: "#84f773",
  },
  {
    name: "Labor and Delivery",
    desc: "Our Labor and Delivery unit offers a safe, supportive environment for expectant mothers. With experienced obstetricians, advanced medical facilities, and personalized birthing plans, we ensure a comfortable and memorable birthing experience.",
    bgColor: "#927535",
  },
  {
    name: "Heart and Vascular",
    desc: "Our Heart and Vascular services focus on the prevention, diagnosis, and treatment of cardiovascular diseases. Our expert cardiologists and state-of-the-art facilities provide top-notch care to keep your heart healthy and strong",
    bgColor: "#Ff2983",
  },
  {
    name: "Mental Health",
    desc: "Our Mental Health services offer a range of treatments and support for individuals facing mental health challenges. From therapy to medication management, our compassionate team is here to help you achieve mental wellness.",
    bgColor: "#f09754",
  },
  {
    name: "Neurology",
    desc: "Our Neurology services specialize in the diagnosis and treatment of neurological disorders. Our skilled neurologists use cutting-edge technology to provide comprehensive care for conditions such as stroke, epilepsy, and multiple sclerosis.",
    bgColor: "#e22526",
  },
  {
    name: "Burn Treatments",
    desc: "Our Burn Treatment center provides specialized care for burn injuries. With advanced treatments and a dedicated team, we ensure optimal healing and recovery for patients with burn injuries.",
    bgColor: "#017524",
  },
];

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]  lg:mt-[55px] text-center md:text-left">
      {services.map((item, index) => {
        return <ServiceCard item={item} key={index} index={index} />;
      })}
    </div>
  );
};

export default ServiceList;
