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
        {["Home", "About Us", "Wellness", "Blog", "Contact"].map((item, index) => (
          <Link 
            key={index} 
            href={`/${item.toLowerCase().replace(" ", "-")}`} 
            className="text-lg font-bold capitalize text-black hover:text-pink-500 transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Login/Signup Buttons */}
      <div className="flex gap-4">
        <Link 
          href="/login" 
          className="rounded-lg border-2 border-black px-5 py-2 text-lg font-bold text-black transition-colors hover:bg-black hover:text-white"
        >
          Login
        </Link>
        <Link 
          href="/signup" 
          className="rounded-lg border-2 border-pink-500 bg-pink-500 px-5 py-2 text-lg font-bold text-white transition-colors hover:bg-pink-600 hover:border-pink-600"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
