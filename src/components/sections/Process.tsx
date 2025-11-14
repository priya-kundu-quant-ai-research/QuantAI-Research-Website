"use client";

import { motion } from "framer-motion";
import { Database, Code, FlaskConical, Lightbulb } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Data Ingestion & Processing",
    description:
      "We collect and process vast amounts of structured and unstructured data, from market feeds and on-chain data to alternative datasets like satellite imagery and social media sentiment.",
    color: "cyan",
  },
  {
    number: "02",
    icon: Code,
    title: "Model Development & Backtesting",
    description:
      "Our quantitative researchers develop and rigorously backtest models using historical data, ensuring they are robust and statistically sound.",
    color: "purple",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Simulation & Risk Analysis",
    description:
      "We run Monte Carlo simulations and stress tests to understand the risk profile of our strategies and models under various market conditions.",
    color: "pink",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Insight Generation & Reporting",
    description:
      "We distill our findings into clear, actionable insights and deliver them to our clients through comprehensive reports and interactive dashboards.",
    color: "cyan",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Process() {
  const colorClasses = {
    cyan: {
      bg: "bg-cyan-400",
      text: "text-cyan-400",
      border: "border-cyan-400",
      glow: "shadow-[0_0_30px_rgba(0,217,255,0.3)]",
    },
    purple: {
      bg: "bg-purple-500",
      text: "text-purple-500",
      border: "border-purple-500",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    },
    pink: {
      bg: "bg-pink-500",
      text: "text-pink-500",
      border: "border-pink-500",
      glow: "shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    },
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Our <span className="text-cyan-400">Research Process</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            We follow a rigorous, data-driven process to ensure the quality and integrity of our research
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorClasses[step.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Connecting Dots for Mobile/Tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-linear-to-b from-cyan-400 to-purple-500 opacity-30 mt-8" />
                  )}

                  <div className="relative">
                    {/* Step Number Badge */}
                    <motion.div
                      className={`absolute -top-4 -right-4 w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center font-bold text-black text-lg z-10 ${colors.glow}`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className={`bg-zinc-950 border-2 ${colors.border} rounded-xl p-6 h-full transition-all duration-300 hover:${colors.glow} hover:scale-105`}
                      whileHover={{ y: -8 }}
                    >
                      {/* Icon */}
                      <motion.div
                        className={`w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}
                        whileHover={{ rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Icon className="w-7 h-7 text-black" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative Corner */}
                      <div className={`absolute bottom-0 right-0 w-16 h-16 ${colors.bg} opacity-5 rounded-tl-full`} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-12 border-t border-gray-800"
        >
          <p className="text-lg text-gray-300 mb-4">
            Ready to leverage our research expertise?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,217,255,0.4)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
            {/* <motion.button
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Brochure
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}