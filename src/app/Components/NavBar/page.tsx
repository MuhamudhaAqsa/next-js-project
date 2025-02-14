"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/project-logo.png" alt="Rise and Radiate Logo" width={150} height={150} />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6">
        {["Home", "About Us", "Key Features", "Testimonials", "Download", "Contact"].map((item, index) => (
          <Link 
            key={index} 
            href={`/${item.toLowerCase().replace(" ", "-")}`} 
            className="relative text-lg font-bold capitalize text-black transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-black/10 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 hover:text-pink-500 px-4 py-2"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Login/Signup Buttons */}
      <div className="flex gap-4">
        <Link 
          href="/login" 
          className="rounded-lg border-2 border-black px-5 py-2 text-lg font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
        >
          Login
        </Link>
        <Link 
          href="/signup" 
          className="rounded-lg border-2 border-pink-500 bg-pink-500 px-5 py-2 text-lg font-bold text-white transition-all duration-300 hover:bg-pink-600 hover:border-pink-600"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
