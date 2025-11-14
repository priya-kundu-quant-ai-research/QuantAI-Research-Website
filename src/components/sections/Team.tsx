"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const founder = {
  name: "Carlos de Oliveira",
  role: "Founder & CEO",
  bio: "Former capital markets executive with 25+ years of experience in quantitative finance. Leads strategic vision and client relationships.",
  linkedin: "https://www.linkedin.com/in/carlos-de-oliveira-b90a9212b/",
};

const team = [
  {
    name: "Priya Kundu",
    role: "Product Manager",
    bio: "Drives product strategy and development roadmap. Expert in translating complex financial requirements into scalable technology solutions.",
    linkedin: "https://www.linkedin.com/in/priyakundu159/",
  },
  {
    name: "Nachiket Khare",
    role: "Data Engineer",
    bio: "Specializes in building robust data pipelines and infrastructure. Ensures seamless integration of alternative data sources for analysis.",
    linkedin: "https://www.linkedin.com/in/nachiket-khare-4298201ab/",
  },
  {
    name: "Nikhil Soni",
    role: "AI Engineer",
    bio: "Develops cutting-edge machine learning models and LLM orchestration for financial prediction. Focusing on AI applications in quantitative finance.",
    linkedin: "https://www.linkedin.com/in/nikhilsoni15/",
  },
  {
    name: "Avina",
    role: "Software Engineer",
    bio: "Builds high-performance trading systems and algorithms. Expertise in low-latency execution and system optimization.",
    linkedin: "https://www.linkedin.com/in/avina-829a03151/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function TeamCard({ member, size = "normal" }: { member: typeof team[0]; size?: "large" | "normal" }) {
  const isLarge = size === "large";
  
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="bg-zinc-950 border-2 border-zinc-800 rounded-xl p-4 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,217,255,0.15)] overflow-hidden h-full">
        {/* Profile Image */}
        <div className="relative mb-3">
          <div className={`${isLarge ? 'w-24 h-24' : 'w-16 h-16'} mx-auto rounded-full overflow-hidden border-[3px] border-zinc-800 group-hover:border-cyan-400 transition-all duration-300`}>
            <div className="w-full h-full bg-linear-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <span className={`${isLarge ? 'text-2xl' : 'text-lg'} font-bold text-white`}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          
          {/* LinkedIn Badge */}
          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute ${isLarge ? 'bottom-0' : '-bottom-1'} right-1/2 translate-x-1/2 translate-y-1/2 ${isLarge ? 'w-8 h-8' : 'w-7 h-7'} bg-cyan-400 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-300 transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className={`${isLarge ? 'w-4 h-4' : 'w-3.5 h-3.5'} text-black`} />
          </motion.a>
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className={`${isLarge ? 'text-lg' : 'text-base'} font-bold text-white mb-0.5`}>
            {member.name}
          </h3>
          <p className="text-cyan-400 text-xs font-semibold mb-2">
            {member.role}
          </p>
          <p className="text-gray-400 text-xs leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-400/5 rounded-bl-full" />
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Meet Our <span className="text-cyan-400">Team</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            A diverse group of experts united by a passion for innovation in quantitative finance
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {/* Founder - Featured Large Card */}
          <motion.div variants={itemVariants} className="max-w-md mx-auto">
            <TeamCard member={founder} size="large" />
          </motion.div>

          {/* Team Members - 4 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} size="normal" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}