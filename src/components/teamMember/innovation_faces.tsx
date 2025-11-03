import TeamMember from "../../components/teamMember/TeamMember.tsx";

const Index = () => {
  const teamMembers = [
    {
      name: "Mr. THEERTHANANDA K K & Mr. LAKSHMISHA K J",
      position: "Directors",
      description: "Meet the visionary leaders shaping the trajectory of organization endeavors. At the helm are our esteemed organization.",
      image: "/placeholder.svg"
    },
    {
      name: "Mrs. PRIYA H K",
      position: "Finance Controller",
      description: "Guiding the financial helm of our organization is our esteemed Finance controller.",
      image: "/placeholder.svg"
    },
    {
      name: "Mr. AJITH KUMAR",
      position: "M.A, LL.M., LL.B., DCABA., PGDPM & IR",
      description: "A highly experienced, results orientated property lawyer with over 20 years in practice.",
      image: "/placeholder.svg"
    },
    {
      name: "Mr. SATHYA MUTHANNA U G",
      position: "Chartered Quantity Surveyor",
      description: "He has been practicing from over 5 years in Bangalore.",
      image: "/placeholder.svg"
    },
    {
      name: "Mr. DEEPAK RAJ C G",
      position: "Marketing Head",
      description: "A Master in Formulating comprehensive marketing strategies aligned with the overall business goals and Conducting market research to identify opportunities.",
      image: "/placeholder.svg"
    },
    {
      name: "Mr. SHASHI KIRAN V N",
      position: "Human Resource Manager",
      description: "At the heart of our organizational vitality is our Human Resource Manager, a seasoned professional dedicated to fostering a thriving workplace culture.",
      image: "/placeholder.svg"
    },
    {
      name: "Mr. RASIKA N U",
      position: "Accounts Manager",
      description: "The key player in the organization who handles all the accounts related aspects.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className=" py-20 px-4 text-center overflow-hidden">
        {/* <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-10"></div> */}
        {/* <div className="relative max-w-4xl mx-auto"> */}
          {/* <h1 className="text-4xl relative md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Faces of Innovation
          </h1> */}
          <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight">
  <span className="text-[#054b16] md:text-[60px]">Faces of </span>
  <span className="text-green-500 md:text-[60px]">Innovation</span>
</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        {/* </div> */}
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
