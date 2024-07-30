"use client";

import React, { useState, useEffect } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Appointment from "@/components/Appointment";
import FeaturesAssignment from "@/components/FeaturesAssignment";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";
import MedicalRecord from "@/components/MedicalRecord";

export default function Home() {
  const windowWidth = useWindowWidth();
  const [pageMobile, setPageMobile] = useState(false);
  useEffect(() => {
    if (windowWidth < 1024) {
      setPageMobile(true);
    } else {
      setPageMobile(false);
    }
  }, [windowWidth]);

  if (pageMobile) {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        page isn&apos;t available in screen width under 1024px
      </section>
    );
  } else {
    return (
      <main className="relative">
        <div className="absolute w-full top-0 z-50">
          <Navbar />
        </div>
        <Hero />
        <Appointment />
        <FeaturesAssignment />
        <Schedule />
        <MedicalRecord />
        <Footer />
      </main>
    );
  }
}
