"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import PngLeaf from "../../components/assets/_Pngtree_leaf_logo_design_icon_vector_4400175-removebg-preview.png"
import LadyImage from "../../components/assets/femailetwo.jpg"
import MenImage from "../../components/assets/male_avathar.jpg"
import FEmaleImage from "../../components/assets/female_avathar.jpg"
const testimonials = [

  {
    id: 1,
    name: "Sneha Patel",
    role: "Flat Owner",
    image: LadyImage,
    text: "The quality of construction and attention to detail exceeded my expectations. Samrudhi Properties delivered exactly what they promised — on time and with complete transparency",
  },
  
  {
    id: 2,
    name: "Ramesh Kumar",
    role: "Homebuyer",
    image: MenImage,
    text: "Buying my dream home with Samrudhi Property Developers was the best decision ever. Their team guided me through every step, ensuring clear communication and timely updates. Truly professional and trustworthy",
  },
  {
    id: 3,
    name: "Meera Nair",
    role: "Real Estate Investor",
    // image: "https://img.freepik.com/premium-vector/boy-cartoon-style-isolated-white-background-smiling-man-office-worker-businessman-cartoon-character-vector-illustration_376167-193.jpg?w=360",
    image: FEmaleImage,
    text: "I’ve invested in multiple projects, and Samrudhi Property Developers stand out for their commitment to quality and customer satisfaction. Highly recommended for long-term investments",
  },
  {
    id: 4,
    name: "Deepak Reddy",
    role: "New Homeowner",
    image: MenImage,
    text: "From site visits to registration, everything was smooth and well-organized. The staff were courteous and knowledgeable, making my first purchase worry-free!",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const handleCardClick = (index) => {
    setCurrentIndex(index)
  }

  // Function to get visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    const visibleTestimonials = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visibleTestimonials.push({
        ...testimonials[index],
        position: i, // 0: left, 1: center, 2: right
        isSelected: i === 1 // Center card is always selected
      })
    }
    return visibleTestimonials
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="relative min-h overflow-hidden bg-gradient-to-br  py-0">
      {/* Decorative leaves */}    
      <div className="pointer-events-none absolute right-10 top-10 h-32 w-32 opacity-40">
        <img src={PngLeaf} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="pointer-events-none absolute bottom-32 left-10 h-40 w-40 opacity-30">
        <img src={PngLeaf} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="pointer-events-none absolute left-1/3 top-1/3 h-24 w-24 opacity-25">
        <img src={PngLeaf} alt="" className="h-full w-full object-contain" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-1 max-w-4xl p-8 text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-green-900">Hear From</p>
              {/* <h2 className="mb-6 text-5xl font-bold project-subtitle md:text-6xl text-green-900">Our Happy Customers </h2> */}
          <h2 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-center">
            <span className="text-[#000000] md:text-[50px]">Our Happy</span>{' '}
            <span className="text-yellow-400 md:text-[50px]">Customers</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mb-12 grid max-w-7xl gap-8 md:grid-cols-3">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              onClick={() => {
                // When clicking a card, make it the center card
                if (testimonial.position === 0 ) { 
                  // Clicked left card - go to previous
                  handlePrevious()           
                } else if (testimonial.position === 2) {
                  // Clicked right card - go to next
                  handleNext()
                }
                // Center card click does nothing as it's already selected
              }}
              className={`relative flex flex-col rounded-3xl border-2 cursor-pointer transition-all duration-300 ${
                testimonial.isSelected 
                  ? 'border-[#d4a843] bg-black/70 shadow-lg shadow-[#d4a843]/20 scale-105' 
                  : 'border-white/20 bg-black/50 hover:border-white/40 hover:bg-black/25 scale-100'
              } p-8 backdrop-blur-sm`}
            >
              {/* Avatar */}

              {/* Content */}
              <div className="mt-12 flex flex-1 flex-col">
                <p className="mb-8 flex-1 text-sm leading-relaxed text-white/90">{testimonial.text}</p>
                {/* Author */}
                <div>
                  <h3 className="mb-1 text-xl font-bold text-[#d4a843] font-[Arial,Helvetica,sans-serif]">{testimonial.name}</h3>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>

              {/* Selected indicator - only show on center card */}
              {testimonial.isSelected && (
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-[#d4a843] animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black/30 bg-transparent text-black transition-colors hover:border-white/50 hover:bg-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex gap-2 mx-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#d4a843]' : 'bg-black/30 hover:bg-black/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-transparent text-black transition-colors hover:border-white/50 hover:bg-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
