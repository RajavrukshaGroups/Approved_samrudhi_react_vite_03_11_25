import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import heroImage from "@/assets/core-values-hero.jpg";
// import heroImage from "../../components/assets/assets/core-values-hero.jpg";
import heroImage from "../../components/assets/aboutusimage.jpg";

interface CoreValue {
  id: number;
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Client-Centric Approach",
    description: "Our clients' needs and aspirations are at the forefront of our operations. We strive to exceed expectations by providing personalized and attentive service.",
  },
  {
    id: 2,
    title: "Integrity & Trust",
    description: "We uphold the highest standards of honesty and transparency in all our dealings, building lasting relationships based on trust and mutual respect.",
  },
  {
    id: 3,
    title: "Excellence in Execution",
    description: "We are committed to delivering superior quality in every project, from land procurement to legal documentation, ensuring precision and professionalism.",
  },
  {
    id: 4,
    title: "Innovation and Adaptability",
    description: "Embracing change, we continuously seek innovative solutions and adapt to market dynamics to provide cutting-edge real estate services.",
  },
  {
    id: 5,
    title: "Collaboration and Teamwork",
    description: "We believe in the power of collective effort. Our team works synergistically, valuing each member's contribution to achieve common goals.",
  },
  {
    id: 6,
    title: "Community Engagement",
    description: "We are dedicated to contributing positively to the communities we serve, fostering development and creating lasting value.",
  },
  {
    id: 7,
    title: "Sustainability and Responsibility",
    description: "We prioritize sustainable practices, ensuring that our developments are environmentally responsible and contribute to the well-being of future generations.",
  },
  {
    id: 8,
    title: "Continuous Improvement",
    description: "We are committed to ongoing learning and development, striving to enhance our skills, services, and processes to better serve our clients.",
  },
];

const CoreValues = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-[Arial,Helvetica,sans-serif] font-bold bg-yellow-400 bg-clip-text text-transparent mb-4">
          Empowering Values for a Better Future
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide us in delivering excellence and building lasting relationships
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
                onMouseEnter={() => setHoveredId(value.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer border border-border/50 hover:border-primary/30 h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-primary-foreground font-bold">
                      {value.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[13px] font-[Arial,Helvetica,sans-serif] text-foreground text-base leading-snug">
                        {value.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover Tooltip */}
                  <AnimatePresence>
                    {hoveredId === value.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 left-0 right-0 top-full mt-2 bg-popover border border-border rounded-lg p-4 shadow-hover"
                      >
                        <div className="text-sm text-popover-foreground leading-relaxed">
                          {value.description}
                        </div>
                        <div className="absolute -top-2 left-8 w-4 h-4 bg-popover border-l border-t border-border rotate-45"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Team collaboration representing our core values"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 bg-card rounded-lg p-6 shadow-card border border-border/50"
            >
              <h3 className="text-lg  font-semibold font-[Arial,Helvetica,sans-serif] mb-2">
                Building Excellence Together
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our core values form the foundation of everything we do. They guide our decisions,
                shape our culture, and define how we serve our clients and communities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
