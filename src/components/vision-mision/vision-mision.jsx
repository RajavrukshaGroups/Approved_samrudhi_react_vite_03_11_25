export default function SolarOverview() {
  return (
    <div className="bg-white text-[#232323] min-h-screen py-8 px-36 md:px-16">
      {/* Top grid: Who We Are */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left column */}
        <div>
          <div className="font-semibold tracking-wide text-lg mb-2">••• Who We Are</div>
          <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-4">
            werqwr
          </h1>
          <div className="grid grid-cols-2 gap-4 mt-4">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="" className="rounded-xl object-cover h-[160px] w-full"/>
          
            <div className="bg-[#29523c] text-white flex flex-col justify-center items-center rounded-xl h-[160px]">
              <svg className="mb-2" width="36" height="36" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="8" fill="none" stroke="#FEDE53" strokeWidth="2"/>
                <g stroke="#FEDE53" strokeWidth="2">
                  <line x1="20" y1="3" x2="20" y2="10"/>
                  <line x1="20" y1="30" x2="20" y2="37"/>
                  <line x1="3" y1="20" x2="10" y2="20"/>
                  <line x1="30" y1="20" x2="37" y2="20"/>
                  <line x1="8" y1="8" x2="13" y2="13"/>
                  <line x1="32" y1="8" x2="27" y2="13"/>
                  <line x1="8" y1="32" x2="13" y2="27"/>
                  <line x1="32" y1="32" x2="27" y2="27"/>
                </g>
              </svg>
              <span className="text-lg font-semibold">Top Innovator Award</span>
            </div>
          
            <img src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?auto=format&fit=crop&w=400&q=80" alt="" className="rounded-xl object-cover h-[154px] w-full"/>
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="" className="rounded-xl object-cover h-[154px] w-full"/>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-10">
          
           <div className="grid md:grid-cols-2 gap-10 items-start mt-12">
        {/* Mission description */}
        <div>
          <div className="font-semibold tracking-wide text-4xl mb-2">••• Our Mission</div>
              <h2 className="font-bold text-3xl md:text-4xl leading-tight mb-4">
                Harness the Sun, Empower Your World
              </h2>
          {/* Progress bars */}
          
          {/* Mission paragraph */}
          <p className="mt-6 text-base font-light">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
         
        </div>
      </div>
      
      {/* Lower grid: Our Mission */}
      <div className="grid md:grid-cols-2 gap-10 items-start mt-12">
        {/* Mission description */}
        <div>
          <div className="font-semibold tracking-wide text-4xl mb-2">••• Our Vision</div>
              <h2 className="font-bold text-3xl md:text-4xl leading-tight mb-4">
                Harness the Sun, Empower Your World
              </h2>
          {/* Progress bars */}
          
          {/* Mission paragraph */}
          <p className="mt-6 text-base font-light">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
      
    </div>
  );
}
