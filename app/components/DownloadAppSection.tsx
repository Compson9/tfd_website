"use client";

import Image from "next/image";
import React from "react";

export default function DownloadAppSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Unlock a new level of convenience with our app
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Experience seamless navigation and effortless shopping directly from your phone.
        </p>
        <a
          href="#"
          className="text-green-600 font-medium hover:underline"
        >
          Read more
        </a>

        {/* QR Code */}
        <div className="w-40 h-40 bg-white shadow-md rounded-lg flex items-center justify-center mt-6 mx-auto md:mx-0">
          <Image
            src="/qr.png"
            alt="QR Code"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>

      {/* Phone Mockups */}
      <div className="flex-1 flex justify-center  relative">
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