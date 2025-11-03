"use client";

import React from "react";
import { InfiniteMovingCards } from "../../utils/InfiniteMovingCards.jsx";
import "./style.css"

export function InfiniteMovingCardsDemo() {
  return (
    <div className="inf-card h-[20rem] sm:mt-4 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The quality of construction and attention to detail exceeded my expectations. Samrudhi Properties delivered exactly what they promised — on time and with complete transparency",
    name: "Sneha Patel",
    title: "Flat Owner",
  },
  {
    quote:
      "Buying my dream home with Samrudhi Property Developers was the best decision ever. Their team guided me through every step, ensuring clear communication and timely updates. Truly professional and trustworthy",
    name: "Ramesh Kumar",
    title: "Homebuyer",
  },
  {
    quote:
      "From site visits to registration, everything was smooth and well-organized. The staff were courteous and knowledgeable, making my first purchase worry-free!",
    name: "Deepak Reddy",
    title: "New Homeowner",
  },
  {
    quote:
      "I’ve invested in multiple projects, and Samrudhi Property Developers stand out for their commitment to quality and customer satisfaction. Highly recommended for long-term investments",
    name: "Meera Nair",
    title: "Real Estate Investor",
  },
];
