"use client"

import { ServiceCard } from "../../components/services-atm-cards/servicsCards.jsx"
import "../../components/ourOnGoingProjects/ourOnGoingProjects.css";

const ServicesSection = () => {
  return (
    <section class="relative isolate overflow-hidden py-12 sm:py-16 lg:py-20 ">
      {/* Background image */}
      {/* Dark overlay for readability */}
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-green-100 to-emerald-300"></div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        {/* Headline */}
        
        {/* <h2 class="text-center text-pretty font-extrabold tracking-tight text-[#0e3b01] leading-tight text-4xl sm:text-5xl lg:text-6xl">
         Investor-Centric Approach
        </h2> */}

        <h2 className=" project-subtitle-keyConcept text-center font-light tracking-tight text-[#0e3b01] leading-tight text-5xl md:text-6xl lg:text-7xl mb-8">
            Investor-Centric Approach
          </h2>
        <p>At Samrudhi, we recognize that our investors are pivotal to our success. We are
        committed to fostering transparent, mutually beneficial relationships by providing clear
        communication, tailored investment opportunities, and consistent returns.</p>
        {/* Card tray (subtle rounded container behind cards) */}
        <div class="mt-8 sm:mt-10 rounded-[28px] border border-white/40 bg-white/10 p-3 sm:p-4">
          {/* Cards grid - Changed to flex for single row */}
          <div class="flex flex-row gap-4 sm:gap-6 overflow-x-auto">
            {/* Card 1 */}
            <article class="min-w-[280px] flex-1 rounded-[28px] bg-[#18473F] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
              <div class="flex items-center justify-center">
                {/* House icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-14 w-14 text-[#F3C64E]" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l9-7.5 9 7.5M4.5 10.5V21h5.25v-6h4.5v6H19.5V10.5" />
                </svg>
              </div>
              <h3 class="mt-6 text-center text-2xl font-extrabold leading-snug text-[#F3C64E]">
                Transparent <br />Communication
              </h3>
              <p class="mt-4 text-center text-base leading-relaxed text-white/85">
               We prioritize transparency by offering regular updates on project progress, financial
               performance, and market trends.
              </p>
              <div class="mt-8 flex justify-center">
                <a href="#" class="inline-flex items-center rounded-full bg-[#F3C64E] px-6 py-3 font-semibold text-[#18473F] shadow hover:bg-[#e2b843] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3C64E]">
                  Read More <span aria-hidden="true" class="ml-2">→</span>
                </a>
              </div>
            </article>

            {/* Card 2 */}
            <article class="min-w-[280px] flex-1 rounded-[28px] bg-[#18473F] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
              <div class="flex items-center justify-center">
                {/* Building icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-14 w-14 text-[#F3C64E]" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M6 21V5.25A1.5 1.5 0 0 1 7.5 3.75h6A1.5 1.5 0 0 1 15 5.25V21M9.75 8.25h1.5m-1.5 3h1.5m-1.5 3h1.5M15 9.75h3v8.25" />
                </svg>
              </div>
              <h3 class="mt-6 text-center text-2xl font-extrabold leading-snug text-[#F3C64E]">
                Tailored Investment  <br /> Opportunities
              </h3>
              <p class="mt-4 text-center text-base leading-relaxed text-white/85">
              Understanding that each investor has unique goals, we offer customized investment solutions
            
              </p>
              <div class="mt-8 flex justify-center">
                <button href="#" class="inline-flex items-center rounded-full bg-[#F3C64E] px-6 py-3 font-semibold text-[#18473F] shadow hover:bg-[#e2b843] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3C64E]">
                  Read More <span aria-hidden="true" class="ml-2">→</span>
                </button>
              </div>

            </article>

            {/* Card 3 */}
            <article class="min-w-[280px] flex-1 rounded-[28px] bg-[#18473F] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
              <div class="flex items-center justify-center">
                {/* Battery icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-14 w-14 text-[#F3C64E]" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 7.5h1.125a1.875 1.875 0 0 1 1.875 1.875V15a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V9.375A1.875 1.875 0 0 1 6.375 7.5H7.5M9.75 12l2.25-3v2.25h2.25l-2.25 3V12H9.75zM16.5 7.5V6a.75.75 0 0 0-.75-.75h-7.5A.75.75 0 0 0 7.5 6v1.5" />
                </svg>
              </div>
              <h3 class="mt-6 text-center text-2xl font-extrabold leading-snug text-[#F3C64E]">
                Competitive <br />Financial Terms
              </h3>
              <p class="mt-4 text-center text-base leading-relaxed text-white/85">
                We offer attractive returns on investment, clearly outlining timelines and exit strategies.
            <br />
              </p>
              <div class="mt-8 flex justify-center">
                <a href="#" class="inline-flex items-center rounded-full bg-[#F3C64E] px-6 py-3 font-semibold text-[#18473F] shadow hover:bg-[#e2b843] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3C64E]">
                  Read More <span aria-hidden="true" class="ml-2">→</span>
                </a>
              </div>
            </article>

            {/* Card 4 */}
            <article class="min-w-[280px] flex-1 rounded-[28px] bg-[#18473F] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
              <div class="flex items-center justify-center">
                {/* Sun icon (changed from duplicate battery icon) */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-14 w-14 text-[#F3C64E]" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3 class="mt-6 text-center text-2xl font-extrabold leading-snug text-[#F3C64E]">
                Ongoing Support <br /> and Engagement
              </h3>
              <p class="mt-4 text-center text-base leading-relaxed text-white/85">
               Our commitment extends beyond the initial investment. We maintain regular
communication with our investors
              </p>
              <div class="mt-8 flex justify-center">
                <a href="#" class="inline-flex items-center rounded-full bg-[#F3C64E] px-6 py-3 font-semibold text-[#18473F] shadow hover:bg-[#e2b843] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3C64E]">
                  Read More <span aria-hidden="true" class="ml-2">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection