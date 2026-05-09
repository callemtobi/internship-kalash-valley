"use client";

import Image from "next/image";
import Link from "next/link";
import IntroButton from "@components/IntroButton";
import GalleryCarousel from "./carousel/GalleryCarousel";

export default function FeaturedGallery() {
  const CarouselImg = [
    "/gallery/image1.png",
    "/gallery/image1.png",
    "/gallery/image1.png",
    "/gallery/image1.png",
    "/gallery/image1.png",
    "/gallery/image1.png",
    "/gallery/image1.png",
    "/gallery/image1.png",
    "/gallery/image1.png",
    "/gallery/image1.png",
    "/gallery/image1.png",
    "/gallery/image1.png",
  ];

  return (
    <div className="container my-5">
      {/* Image Carousel */}
      <div>
        <p className="text-center">
          Explore breathtaking views, unique traditions, and unforgettable
          moments from the heart of Kalash Valley.
        </p>
        <div>
          {/* IMAGE CAROUSEL */}
          <GalleryCarousel />
        </div>
      </div>
      {/* Images Collage */}
      <div>
        <IntroButton>Featured Gallery Section</IntroButton>
        <div className="container row row-gap-3">
          {CarouselImg.map((imgSrc, index) => (
            <div className="col-6 col-lg-3 " key={index}>
              <Image
                key={index}
                src={imgSrc}
                alt="Gallery image"
                height={100}
                width={100}
                className="d-block w-100 img-fluid"
              />
            </div>
          ))}
        </div>
        {/* Button */}
        <div className="container text-center mt-4">
          <h5>Want to experience this beauty in real life?</h5>
          <Link href="/booking" className="" style={{ textDecoration: "none" }}>
            <button
              className="mt-3"
              //   className="btn d-flex align-items-center gap-2"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #c8864a",
                color: "#c8864a",
                borderRadius: 30,
                padding: ".3rem 1rem",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Book Your Stay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
