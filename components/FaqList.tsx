"use client";
import React, { useState } from "react";
import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "To book an appointment, simply log in to the app, select your preferred doctor and available time slot, and confirm your booking. You will receive a confirmation email with the details of your appointment.",
  },
  {
    question: "Can I reschedule or cancel an appointment?",
    answer:
      "Yes, you can reschedule or cancel an appointment through the app. Go to your bookings, select the appointment you wish to change, and choose the reschedule or cancel option. Please note that cancellation policies may vary by doctor.",
  },
  {
    question: "How do I find a doctor who specializes in my condition?",
    answer:
      "You can search for doctors by specialty, condition, or name using the search bar. Additionally, our app allows you to filter doctors based on their specialties and read patient reviews to help you make an informed decision.",
  },
  {
    question:
      "What should I do if I can't find an available slot with my preferred doctor?",
    answer:
      "If you can't find an available slot with your preferred doctor, try selecting another date or time. Alternatively, you can choose to be notified when a slot becomes available, or select another doctor with similar expertise.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we take your privacy and security seriously. Our app uses advanced encryption methods to protect your personal information and complies with all relevant data protection regulations.",
  },
  {
    question: "How can I pay for my appointment?",
    answer:
      "Payments for appointments can be made securely through the app using a variety of payment methods, including credit/debit cards and digital wallets. You will receive a receipt after the payment is processed.",
  },
  {
    question:
      "What if I have an emergency and need immediate medical attention?",
    answer:
      "If you have a medical emergency, please call emergency services or go to the nearest emergency room immediately. Our app is designed for non-emergency medical appointments and consultations.",
  },
];

const FaqList = () => {
  const [isOpenIndex, setIsOpenIndex] = useState(null);
  const onToggle = (index: any) => {
    setIsOpenIndex(isOpenIndex === index ? null : index);
  };
  return (
    <div>
      {faqs.map((item, index) => {
        return (
          <FaqItem
            item={item}
            key={index}
            onToggle={() => onToggle(index)}
            isOpen={index === isOpenIndex}
          />
        );
      })}
    </div>
  );
};

export default FaqList;
