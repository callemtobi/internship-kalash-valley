"use client";

import Nav from "@components/Nav";
import Hero from "@components/Hero";
import QuickIntro from "@components/QuickIntro";
import Gallery from "@components/Gallery";
import Experience from "@components/Experience";
import Villa from "@components/BeyondVilla";
import Testimonials from "@components/Testimonials";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <QuickIntro />
      <Gallery />
      <Experience />
      <Villa />
      <Testimonials />
      <Footer />
    </>
  );
}
