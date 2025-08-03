"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../components/ui/lamp"
import Image from "next/image";
export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 font-bold bg-gradient-to-br from-yellow-200 to-yellow-500 py-4 bg-clip-text text-center text-4xl f tracking-tight text-transparent md:text-6xl"
      >
        Winter-Ready Rentals<br /> That Get the Job Done

      </motion.h1>
      
        
    </LampContainer>
  );
}
