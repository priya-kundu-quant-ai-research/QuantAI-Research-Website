"use client";

import Button from "@/components/ui/Button";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Header/Navbar */}
      <nav className="relative z-20 px-6 md:px-12 lg:px-24 py-6">
        <div className="flex items-center gap-3">
          <Image 
            src="/images/logo.png" 
            alt="Quant AI Research Logo" 
            width={40} 
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl md:text-2xl font-bold text-white">
            Quant AI Research
          </span>
        </div>
      </nav>

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Large Glow Orbs */}
      <div className="absolute inset-0 z-2">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[100px] animate-pulse animation-delay-3000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Pioneering the Future of{" "}
              <span className="text-cyan-400">Finance</span>
              <br />
              with AI and Blockchain
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Quant AI Research delivers institutional-grade research and technology 
              at the intersection of artificial intelligence, blockchain, and quantitative 
              finance. We empower our clients to navigate the complexities of modern 
              markets with data-driven insights and innovative solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Our Research
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  window.location.href = 'mailto:info@quant-ai-research.com?subject=Contact Request&body=Hi, I would like to get in touch with your team.';
                }}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}