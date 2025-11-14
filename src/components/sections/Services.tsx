"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { Database, TrendingUp, PieChart } from "lucide-react";
import { MouseEvent } from "react";

const services = [
  {
    icon: Database,
    title: "Blockchain Research",
    description:
      "From decentralized finance (DeFi) protocols to the tokenization of real-world assets, our in-depth blockchain research provides clarity in a rapidly evolving ecosystem. We analyze on-chain data, evaluate protocol risk, and identify emerging opportunities in the digital asset space.",
    color: "cyan",
    iconBg: "bg-cyan-400",
    iconColor: "text-black",
    borderColor: "border-cyan-400",
    glowColor: "shadow-[0_0_30px_rgba(0,217,255,0.3)]",
  },
  {
    icon: TrendingUp,
    title: "Algorithmic Trading Research",
    description:
      "We design and backtest sophisticated algorithmic trading strategies across multiple asset classes. Our research focuses on developing robust, high-performance models that adapt to changing market dynamics and minimize execution costs.",
    color: "purple",
    iconBg: "bg-purple-500",
    iconColor: "text-white",
    borderColor: "border-purple-500",
    glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
  },
  {
    icon: PieChart,
    title: "Portfolio Optimization Research",
    description:
      "Using cutting-edge optimization techniques and risk modeling, we help clients construct and manage resilient investment portfolios. Our research goes beyond traditional mean-variance analysis to incorporate factors such as tail risk, market regimes, and transaction costs.",
    color: "pink",
    iconBg: "bg-pink-500",
    iconColor: "text-white",
    borderColor: "border-pink-500",
    glowColor: "shadow-[0_0_30px_rgba(236,72,153,0.3)]",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    },
  },
};

function TiltCard({ service, index }: { service: typeof services[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      variants={itemVariants}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      <Card
        className={`h-full border-2 ${service.borderColor} bg-zinc-950/50 backdrop-blur-sm transition-all duration-300 hover:${service.glowColor} hover:scale-[1.02]`}
        hover={false}
      >
        <CardHeader>
          <motion.div
            className={`w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 relative overflow-hidden`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <Icon className={`w-8 h-8 ${service.iconColor} relative z-10`} />
          </motion.div>
        </CardHeader>
        <CardTitle className="mb-4 text-white text-2xl">{service.title}</CardTitle>
        <CardContent>
          <p className="leading-relaxed text-gray-300">{service.description}</p>
        </CardContent>

        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 ${service.iconBg} opacity-5 rounded-bl-full`} />
        
        {/* Particle decoration */}
        <motion.div
          className={`absolute -top-1 -right-1 w-3 h-3 ${service.iconBg} rounded-full`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
        <motion.div
          className={`absolute -bottom-1 -left-1 w-2 h-2 ${service.iconBg} rounded-full`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3 + 0.5,
          }}
        />
      </Card>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Our <span className="text-cyan-400">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We provide a suite of specialized research and consulting services 
            designed to give our clients a competitive edge.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <TiltCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}