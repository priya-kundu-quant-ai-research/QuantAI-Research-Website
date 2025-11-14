"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Users } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible in quantitative finance",
    color: "cyan",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Data-driven insights backed by rigorous research and analysis",
    color: "purple",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Partnering with clients to solve their most challenging problems",
    color: "pink",
  },
];

export default function About() {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-400/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Redefining{" "}
            <span className="text-cyan-400">Quantitative Research</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Quant AI Research was founded on the principle that the future of 
              finance lies at the nexus of human expertise and machine intelligence. 
              We are a team of researchers, data scientists, and engineers dedicated 
              to solving the most challenging problems in financial markets.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our mission is to democratize access to sophisticated quantitative 
              research and empower our clients to thrive in an era of unprecedented 
              technological change.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            const colorClasses = {
              cyan: "bg-cyan-400 text-black",
              purple: "bg-purple-500 text-white",
              pink: "bg-pink-500 text-white",
            };
            const glowClasses = {
              cyan: "group-hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]",
              purple: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]",
              pink: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]",
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="text-center"
                >
                  <motion.div
                    className={`w-16 h-16 ${
                      colorClasses[value.color as keyof typeof colorClasses]
                    } rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                      glowClasses[value.color as keyof typeof glowClasses]
                    }`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-gray-800"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
              30+
            </div>
            <div className="text-gray-400">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-500 mb-2">
              50+
            </div>
            <div className="text-gray-400">Research Publications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">
              $1B+
            </div>
            <div className="text-gray-400">Assets Under Analysis</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}