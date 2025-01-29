"use client";

// import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// const images = ["/hero.jpg"]; // Add your image names here`

export default function Hero() {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 5000); // Change image every 4 seconds

  //   return () => clearInterval(interval); // Clear the interval on component unmount
  // }, []);

  return (
    <div className="bg-gray-200 mt-10 w-full min-h-screen">
      <section className="relative h-screen flex flex-col md:flex-row items-center justify-between text-black px-6 mt-10 max-w-6xl lg:mt-[-5px] md:px-12 gap-1 lg:gap-8 mx-auto">
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 md:mb-6"
          >
            Luxury Redefined
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl mb-4 md:mb-6"
          >
            Discover timeless fashion that blends elegance with modern design. Explore our collections and redefine your style.
          </motion.p>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-gray-800"
          >
            Shop Now
          </motion.button>
        </div>
        <div
          className="flex-shrink-0 flex-1 md:text-right mt-6 md:mt-0 relative"
          style={{ right: "-100px" }}
        >
          <Image
          src="/hero.jpg"
          width={450}
          height={500}
          alt="Fashion"
          className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
}


 {/* About Section */}
    {/* <section id="about" className="py-16 px-8 bg-white">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-8">About Us</h3>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          TFD: The Fashion District is your gateway to the latest trends, timeless designs, and the vibrant culture of fashion. We provide a platform for designers, stylists, and fashion enthusiasts to connect, share, and grow.
        </p>
      </div>
    </section> */}

    {/* Mission Section */}
    {/* <section id="mission" className="py-16 px-8 bg-gray-200">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-8">Our Mission</h3>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          At TFD, our mission is to redefine fashion by fostering innovation, sustainability, and collaboration. We believe in empowering designers and consumers to create a more inclusive and sustainable fashion industry.
        </p>
      </div>
    </section> */}

    {/* QR Code Section */}
    {/* <section className="py-16 px-8 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="text-4xl font-bold mb-4">Unlock Convenience</h3>
          <p className="text-lg mb-6">
            Download our app and take The Fashion District with you wherever you go. Scan the QR code to get started.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Read More</a>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <Image
          width={200}
          height={200}
            src="/images/qr-code.png"
            alt="Download App QR Code"
            className="w-64 h-64 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </section> */}

    {/* Contact Section */}
    {/* <section id="contact" className="py-16 px-8 bg-gray-200">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-8">Get in Touch</h3>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
          Have questions or want to collaborate? Reach out to us, and let us make fashion history together.
        </p>
        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800">
            Contact Us
          </button>
        </div>
      </div>
    </section> */}

    {/* Footer */}
    {/* <footer className="bg-black text-white py-6 text-center">
      <p className="text-sm">&copy; 2025 TFD: The Fashion District. All Rights Reserved.</p>
    </footer> */}