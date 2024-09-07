"use client";
import React, { useEffect, useRef } from "react";
import { Clock2 } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navbarRef.current) {
      // Animate the navbar to slide down from above
      gsap.fromTo(
        navbarRef.current,
        { y: -50, opacity: 0 }, // Starting state
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" } // Ending state
      );
    }
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      // GSAP animation to grow the image from the center
      gsap.fromTo(
        imageRef.current,
        { scale: 0 }, // Start scale
        {
          display: "block",
          scale: 1,
          duration: 2,
          ease: "expo.out",
          onComplete: () => {
            // Show text when image animation completes
            gsap.to(textRef.current, {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            });
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <div className="px-20 py-5 h-32" ref={navbarRef}>
        <div className="flex justify-between items-center">
          <div className="text-3xl font-[400] tracking-wide">
            NATIONAL <span>MUSEUM</span>
            <div className="w-12 h-1 bg-black" />
          </div>
          <div className="flex items-center gap-4">
            <span>
              <Clock2 className="h-6 w-6" />
            </span>
            <p className="text-sm font-semibold">
              Open Every day 10:00 to 19:00
            </p>
            <button className="rounded-xl border-2 border-dashed border-black bg-white px-6 py-1 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Donate
            </button>
          </div>
        </div>
        <div className="uppercase gap-5 flex mt-4">
          <Link href={"#"}>Home</Link>
          <Link href={"/visit"} className="text-gray-400">
            Visit
          </Link>
          <Link href={"#"} className="text-gray-400">
            Discover
          </Link>
          <Link href={"#"} className="text-gray-400">
            Join & Support
          </Link>
        </div>
      </div>
      <div
        ref={imageRef}
        className="relative w-full hidden h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGluZGlhbiUyMG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D")`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text content */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <h1 className="text-white text-4xl font-bold">
            Welcome to the National Museum
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
