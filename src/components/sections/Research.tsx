"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Calendar } from "lucide-react";

const publications = [
  {
    title: "The Impact of Generative AI on High-Frequency Trading",
    type: "Whitepaper",
    date: "October 2024",
    description:
      "Exploring how large language models and generative AI are reshaping algorithmic trading strategies and market microstructure.",
    color: "cyan",
    readTime: "12 min read",
  },
  {
    title: "A Deep Dive into DeFi Lending Protocols",
    type: "Market Analysis",
    date: "September 2024",
    description:
      "Comprehensive analysis of decentralized lending markets, risk assessment frameworks, and yield optimization strategies.",
    color: "purple",
    readTime: "8 min read",
  },
  {
    title: "Optimizing Crypto Portfolios with Non-Fungible Tokens",
    type: "Research Note",
    date: "August 2024",
    description:
      "Novel portfolio construction methodologies incorporating NFT assets with traditional crypto holdings for enhanced diversification.",
    color: "pink",
    readTime: "6 min read",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function Research() {
  const colorClasses = {
    cyan: {
      border: "border-cyan-400",
      bg: "bg-cyan-400",
      text: "text-cyan-400",
      glow: "group-hover:shadow-[0_0_25px_rgba(0,217,255,0.3)]",
    },
    purple: {
      border: "border-purple-500",
      bg: "bg-purple-500",
      text: "text-purple-500",
      glow: "group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]",
    },
    pink: {
      border: "border-pink-500",
      bg: "bg-pink-500",
      text: "text-pink-500",
      glow: "group-hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]",
    },
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-transparent relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px]" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-400/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Latest <span className="text-cyan-400">Research & Insights</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our latest publications, market commentary, and thought leadership
          </p>
        </motion.div>

        {/* Publications List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6 mb-10"
        >
          {publications.map((pub, index) => {
            const colors = colorClasses[pub.color as keyof typeof colorClasses];
            return (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group"
              >
                <div
                  className={`bg-black border-l-4 ${colors.border} rounded-xl p-6 transition-all duration-300 ${colors.glow} hover:bg-zinc-950`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      {/* Type Badge & Date */}
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 ${colors.bg} text-black text-xs font-semibold rounded-full`}
                        >
                          <FileText className="w-3 h-3" />
                          {pub.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          {pub.date}
                        </span>
                        <span className="text-gray-500 text-sm">
                          • {pub.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {pub.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed">
                        {pub.description}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <motion.button
                      className={`flex items-center gap-2 ${colors.text} font-semibold text-sm whitespace-nowrap hover:gap-3 transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="outline" size="lg">
            View All Publications
          </Button>
        </motion.div>
      </div>
    </section>
  );
}