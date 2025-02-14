"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

// Define styles with correct TypeScript types
const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    padding: "0.5rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  navItem: {
    fontSize: "18px",
    fontWeight: "bold",
    textTransform: "capitalize",
    textDecoration: "none",
    color: "black",
  },
  authButtons: {
    display: "flex",
    gap: "12px",
  },
  loginButton: {
    padding: "10px 18px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    textDecoration: "none",
    border: "2px solid black",
    color: "black",
    backgroundColor: "white",
  },
  signupButton: {
    padding: "10px 18px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    textDecoration: "none",
    backgroundColor: "#ff347d",
    color: "white",
    border: "2px solid #ff347d",
  },
};

export default function NavBar() {
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <Link href="/" style={styles.logoContainer}>
        <Image src="/project-logo.png" alt="Rise and Radiate Logo" width={150} height={150} />
      </Link>

      {/* Navigation Links */}
      <div style={styles.navLinks}>
        {["Home", "About Us", "Wellness", "Blog", "Contact"].map((item, index) => (
          <Link key={index} href={`/${item.toLowerCase().replace(" ", "-")}`} style={styles.navItem}>
            {item}
          </Link>
        ))}
      </div>

      {/* Login/Signup Buttons */}
      <div style={styles.authButtons}>
        <Link href="/login" style={styles.loginButton}>Login</Link>
        <Link href="/signup" style={styles.signupButton}>Sign Up</Link>
      </div>
    </nav>
  );
}
