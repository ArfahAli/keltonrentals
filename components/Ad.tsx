"use client"

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const Ad = () => {
  return (
    <section className=" pt-10 bg-white mb-30">
    <div className="relative w-full">
      <Image
        src="/images/Ad.png"
        alt="Ad Banner"
        width={1200}
        height={600}
        className="w-full h-auto object-cover"
      />

      {/* Overlayed Text Section */}
      <div className="absolute inset-0 flex items-center md:px-4 px-6 md:px-12 lg:px-20">
        <div className="w-full  text-left ">
          {/* Headings */}
          <div className="text-black font-bold text-3xl md:text-5xl lg:text-7xl leading-tight">
            <h1>
              Heavy <br /> Equipment
            </h1>
            <h1 className="text-primary mt-2">RENTAL</h1>
          </div>

          {/* Description */}
          <p className="text-black mt-6 text-base sm:text-lg w-40 md:w-70 lg:w-90 md:block hidden">
            Need dependable heavy machinery? We offer well-maintained equipment for every project — from building to digging. Call us now!
          </p>

          {/* Bullet Points */}
          <div className="mt-10 md:text-lg text-[10px] flex flex-row gap-6 s md:gap-10">
            <div className="text-black flex flex-col gap-2">
              <p className="flex items-center">
                <CheckCircle className="md:w-5 md:h-5  w-3 h-3 text-green-600 mr-1" />
                Excavator
              </p>
              <p className="flex items-center">
                <CheckCircle className="md:w-5 md:h-5  w-3 h-3 text-green-600 mr-1" />
                Loader
              </p>
            </div>
            <div className="text-black flex flex-col gap-2">
              <p className="flex items-center">
                <CheckCircle className="md:w-5 md:h-5  w-3 h-3 text-green-600 mr-1" />
                Dump Truck
              </p>
              <p className="flex items-center">
                <CheckCircle className="md:w-5 md:h-5  w-3 h-3 text-green-600 mr-1" />
                Roller
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Ad;
