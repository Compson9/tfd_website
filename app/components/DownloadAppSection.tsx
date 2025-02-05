"use client";

import Image from "next/image";
import React from "react";

export default function DownloadAppSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Unlock a new level of confidence with our app
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Experience seamless navigation and effortless shopping directly from your phone.
        </p>

        {/* Download Buttons */}
      <div className="">
        <div className="flex gap-5 items-center bg-black border border-gray-400 rounded-[6px] py-4 px-4 w-[200px] h-[60px] shadow-md transition duration-300 ease-in-out transform hover:scale-105 ">
          <Image
          src="/playstore.png"
          alt="playstore"
          width={40}
          height={40}
          />
          <div>
            <p className="text-white">GET IT ON</p>
            <p className="text-white font-bold">Google Play</p>
          </div>
        </div>
      </div>
      </div>

      {/* Phone Mockups */}
      <div className="flex-1 flex justify-center relative">
        <div className="relative">
          <Image
            src="/app1.png"
            alt="Phone Mockup 1"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}