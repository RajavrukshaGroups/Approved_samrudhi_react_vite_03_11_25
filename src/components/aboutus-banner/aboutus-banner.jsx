import React from "react";
import { motion } from "framer-motion";
import { Heart, TrendingUp, Lightbulb, Users, Leaf, Award } from "lucide-react";
import AboutUsImageModern from "../assets/assets/whychoseone.jpg";

// Floating badge data
const valueBadges = [
  // { icon: Heart, label: "Trust", color: "from-rose-400 to-pink-500", position: "top-0 -left-8" },
  { icon: TrendingUp, label: "Growth", color: "from-emerald-400 to-teal-500", position: "top-12 -right-12" },
  { icon: Lightbulb, label: "Innovation", color: "from-yellow-400 to-amber-500", position: "bottom-16 -left-12" },
  { icon: Users, label: "Community", color: "from-blue-400 to-indigo-500", position: "bottom-4 -right-8" },
  { icon: Leaf, label: "Sustainability", color: "from-green-400 to-emerald-500", position: "-top-4 right-16" },
  { icon: Award, label: "Excellence", color: "from-purple-400 to-violet-500", position: "-bottom-4 left-16" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutUsSection() {
  return (
    <section className="relative min-h- bg-gradient-to-br from-background via-muted to-primary/5 px-6 md:px-12 lg:px-20 py-16 md:py-64 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6 order-2 lg:order-1">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight"
            >
              <span className="text-foreground text-6xl font-[Arial,Helvetica,sans-serif]">We strive to uncover the </span>
              <span className="font-[Arial,Helvetica,sans-serif] text-6xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                perfect choice for you
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              At <span className="font-semibold text-foreground">Samrudhi</span>, we are driven by a vision: to create
              exceptional spaces that inspire, endure, and elevate the way people live and invest. We are committed to
              shaping inspired living through visionary developments and bespoke real estate solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Nature-Inspired</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Award className="w-5 h-5 text-accent-foreground" />
                <span className="text-sm font-medium text-foreground">Premium Quality</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Floating Badges */}
          <motion.div variants={itemVariants} className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-[400px] max-w-md lg:max-w-lg">
              {/* Glassmorphism background */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 -z-10 scale-110"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-full blur-2xl" />
              </motion.div>

              {/* Main circular image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl" />
                <img
                  src={AboutUsImageModern}
                  alt="Samrudhi Real Estate Vision"
                  className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
                  style={{ boxShadow: "0 0 60px 10px rgba(0,0,0,0.1)" }}
                />

                {/* Rotating gradient ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 -z-10"
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="none" stroke="url(#gradient)" strokeWidth="0.5" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Floating value badges - Desktop */}
              <div className="hidden md:block">
                {valueBadges.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    animate={{
                      y: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className={`absolute ${badge.position} group cursor-pointer`}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="relative"
                    >
                      {/* Badge glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                      
                      {/* Badge content */}
                      <div className={`relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${badge.color} shadow-lg backdrop-blur-sm border border-white/20`}>
                        <badge.icon className="w-7 h-7 text-white drop-shadow-md" />
                      </div>

                      {/* Tooltip label */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                        <span className="text-xs font-medium text-foreground">{badge.label}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Floating value badges - Mobile (simplified) */}
              <div className="md:hidden flex justify-center gap-3 mt-8 flex-wrap">
                {valueBadges.slice(0, 4).map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${badge.color} shadow-md`}>
                      <badge.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{badge.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
