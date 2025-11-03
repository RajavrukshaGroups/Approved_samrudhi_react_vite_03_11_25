export default function ProjectCard({ title, imgSrc, imgAlt }) {
  return (
    <article className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col bg-white">
      {/* Image */}
      <div className="p-5">
        <img
          src={'https://images.pexels.com/photos/20580717/pexels-photo-20580717/free-photo-of-ivory-cottage-and-green-bushes-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' || "/placeholder.svg"}
          alt={imgAlt}
          className="w-full aspect-[4/3] object-cover rounded-xl"
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="px-6 pb-6 mt-1">
        <h3 className="text-2xl md:text-[26px] font-semibold leading-tight tracking-tight">{title}</h3>

        <button
          type="button"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-brand-yellowHover focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
          aria-label="Learn more"
        >
          Learn More
          <svg className="size-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  )
}
