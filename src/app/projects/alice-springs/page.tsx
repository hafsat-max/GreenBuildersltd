"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";

export default function AliceSprings() {
  return (
    <div className="flex flex-col flex-1 h-screen">
      <NavBar />
      <div className="overflow-auto bg-[#36454F] flex flex-col flex-1 w-full justify-center items-center pt-80">
        <div className="w-[70%] mx-auto flex-1 flex justify-center items-center rounded-sm px-4">
          <Image
            width={600}
            alt="Alice springs"
            src="/alice-spring.jpeg"
            height={600}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
