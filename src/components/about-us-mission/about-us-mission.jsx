// import { AwardBadge } from "@/components/award-badge"
// import { ProgressBar } from "@/components/progress-bar"
import aboutusimg1 from "../../components/assets/aboutusimage.jpg"

const  AboutUSMISSION=()=> {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 md:py-16">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
        {/* Left collage */}
        <section className="md:col-span-5">
          <div className="grid grid-cols-3 gap-6">
            {/* big top-left image */}
            <figure className="col-span-3 md:col-span-1">
              <div className="group relative overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img
                  src={aboutusimg1}
                  alt="Solar panels in a field"
                  className="h-72 w-full object-cover md:h-[280px]"
                />
              </div>
            </figure>

            {/* tall image right */}
            <figure className="col-span-3 md:col-span-2">
              <div className="relative group overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img
                  src={aboutusimg1}
                  alt="Technician working on solar array"
                  className="h-[520px] w-full object-cover"
                />
                {/* circular arrow button */}
                <button
                  className="group/button absolute bottom-6 left-6 grid h-16 w-16 place-items-center rounded-full bg-card text-foreground shadow-md ring-1 ring-black/5 transition-transform duration-300 hover:scale-105"
                  aria-label="Open"
                >
                  <svg
                    className="h-6 w-6 transition-transform duration-300 group-hover/button:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </figure>

            {/* bottom-left image */}
            <figure className="col-span-3 md:col-span-1">
              <div className="group relative overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img
                  src={aboutusimg1}
                  alt="Wind turbines on hills"
                  className="h-52 w-full object-cover md:h-[200px]"
                />
              </div>
            </figure>
          </div>

          {/* badge */}
          <div className="mt-6">
            {/* <AwardBadge /> */}
          </div>
        </section>

        {/* Right content */}
        <section className="md:col-span-7">
          <div className="space-y-7">
            <p className="text-sm font-semibold tracking-wide text-muted-foreground">{"*** About Us"}</p>
            <h1 className="text-pretty text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Let the Sun Light Up Your Home Go Green
            </h1>

            <div className="group space-y-5 pt-2">
              {/* <ProgressBar label="Pure Sub Panels" value={85} />
              <ProgressBar label="Eco Sun Electric" value={75} /> */}
            </div>

            <p className="max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </p>

            <div>
              <a
                href="#"
                className="group  inline-flex items-center gap-3 rounded-full bg-brand px-6 py-4 text-base font-semibold text-brand-contrast shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl  hover:shadow-brand/25"
              >
                Explore Solutions
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-contrast/15 text-brand-contrast transition-transform duration-300 group-hover:translate-x-1">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AboutUSMISSION