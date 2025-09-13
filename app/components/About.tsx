"use client";

import { Briefcase, Code2, Cpu, Layers, Mail } from "lucide-react";
import Image from 'next/image';

export default function PortfolioPage() {

  return (
    <main className="bg-black text-white overflow-x-hidden font-sans">
      <section
        id="hero-about"
        className={`min-h-screen flex flex-col justify-center items-center px-6 py-12 relative transition-all duration-1000 opacity-100 translate-y-0`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-black/70 backdrop-blur-xl border border-cyan-500/20 rounded-3xl shadow-[0_0_40px_rgba(0,255,255,0.15)] p-4 md:p-6 flex flex-col md:flex-row items-start gap-6 transition-all duration-500 ease-out">
            <Image
              src="/profile.png"
              alt="Profile Photo"
              width={176}
              height={176}
              className="w-32 h-32 md:w-44 md:h-44 rounded-2xl object-cover border-4 border-cyan-500/40 shadow-lg hover:shadow-cyan-400/50 transition-all duration-500"
            />

            <div className="text-center md:text-left max-w-2xl space-y-5">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
                Mitanshu Goel
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide">
                <span className="text-cyan-400">Software Engineer</span>
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                I am an engineering student with a passion for building intelligent software. I enjoy tackling complex challenges by engineering creative and robust software solutions.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light flex items-center gap-2">
                <Mail size={18} className="text-cyan-400" />
                <a href="mailto:mitanshug2004@gmail.com" className="text-cyan-400 hover:underline">mitanshug2004@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-8">
            <p className="text-center text-gray-400 text-xs md:text-sm mb-4 tracking-[0.2em] uppercase font-medium">
              Specialized In
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
              <span className="px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center gap-2 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition">
                <Cpu size={16} /> IoT & Embedded Systems
              </span>
              <span className="px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-2 hover:bg-green-500/20 hover:border-green-500/50 transition">
                <Layers size={16} /> Robotics & Automation
              </span>
              <span className="px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center gap-2 hover:bg-purple-500/20 hover:border-purple-500/50 transition">
                <Code2 size={16} /> AI & Machine Learning
              </span>
              <span className="px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center gap-2 hover:bg-orange-500/20 hover:border-orange-500/50 transition">
                <Briefcase size={16} /> Full-Stack Development
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
