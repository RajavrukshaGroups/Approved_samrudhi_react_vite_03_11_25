import { Users } from 'lucide-react';

function IntegratedTeam() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 transform transition-all duration-700 hover:scale-[1.02]">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg transform transition-transform duration-500 hover:rotate-12 hover:shadow-2xl">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-center">
            <span className="text-[#000000] md:text-[50px]">Our Integrated </span>
            <span className="text-yellow-400 md:text-[50px]">Team of Experts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Cards */}
        <div className="space-y-2">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl shadow-md border border-gray-200 p-8 transition-all duration-500 hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2">
            <div className="border-l-4 border-yellow-500 pl-6 transition-all duration-500 group-hover:border-l-8 group-hover:pl-8">
              <p className="text-lg text-gray-700 leading-relaxed transform transition-all duration-500 group-hover:text-gray-900">
                At Samrudhi, we pride ourselves on a holistic approach to residential layout developments, seamlessly integrating the technical prowess of our seasoned site engineers with the strategic insights of our marketing team.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl shadow-md border border-gray-200 p-8 transition-all duration-500 hover:shadow-2xl hover:border-teal-400 hover:-translate-y-2">
            <div className="border-l-4 border-teal-500 pl-6 transition-all duration-500 group-hover:border-l-8 group-hover:pl-8">
              <p className="text-lg text-gray-700 leading-relaxed transform transition-all duration-500 group-hover:text-gray-900">
                Our engineers are adept at utilizing advanced technologies. They meticulously plan and execute infrastructure elements, ensuring compliance with zoning regulations and building codes.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl shadow-md border border-gray-200 p-8 transition-all duration-500 hover:shadow-2xl hover:border-cyan-400 hover:-translate-y-2">
            <div className="border-l-4 border-cyan-500 pl-6 transition-all duration-500 group-hover:border-l-8 group-hover:pl-8">
              <p className="text-lg text-gray-700 leading-relaxed transform transition-all duration-500 group-hover:text-gray-900">
                Concurrently, our marketing professionals craft compelling campaigns, leveraging digital platforms and traditional media to effectively promote our developments and attract potential buyers.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-2xl shadow-md border border-gray-200 p-8 transition-all duration-500 hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2">
            <div className="border-l-4 border-yellow-500 pl-6 transition-all duration-500 group-hover:border-l-8 group-hover:pl-8">
              <p className="text-lg text-gray-700 leading-relaxed transform transition-all duration-500 group-hover:text-gray-900">
                This synergy between the entire team ensures that each project not only meets the highest standards of quality but also reaches its intended audience with precision.
              </p>
            </div>
          </div>

          {/* Card 5 - Highlighted */}
          <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-md border-2 border-yellow-300 p-8 transition-all duration-500 hover:shadow-2xl hover:border-yellow-500 hover:-translate-y-2">
            <div className="border-l-4 border-yellow-600 pl-6 transition-all duration-500 group-hover:border-l-8 group-hover:pl-8">
              <p className="text-lg font-medium text-gray-800 leading-relaxed transform transition-all duration-500 group-hover:text-gray-900">
                Together, we deliver residential communities that are both well-constructed and well-received.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        {/* <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default IntegratedTeam;
