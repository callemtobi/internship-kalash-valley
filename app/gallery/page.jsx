"use client";

import NavBar from "@components/Nav";
import GalleryMain from "@components/GalleryMain";
import FeaturedGallery from "@components/FeaturedGallerySection";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <GalleryMain />
      <FeaturedGallery />
      <Footer />
    </>
  );
}
