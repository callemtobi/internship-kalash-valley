"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import IntroButton from "@components/IntroButton";

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);
  const images = ["/image5.jpg", "/image2.jpg", "/image4.jpg"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <IntroButton>Gallery</IntroButton>

      {/* Bootstrap Carousel */}
      {isMobile && (
        <div
          id="galleryCarousel"
          className="carousel slide mb-5 p-2"
          data-bs-ride="carousel"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {images.map((src, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="position-relative"
                  style={{ height: "300px", width: "100%" }}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="d-block w-100 "
                    style={{ objectFit: "cover" }}
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev bg-dark rounded-circle"
            style={{ width: "5rem", height: "5rem", marginTop: "10rem" }}
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next bg-dark rounded-circle"
            style={{ width: "5rem", height: "5rem", marginTop: "10rem" }}
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
      {/* Original image grid (optional - can be removed if you only want carousel) */}
      {!isMobile && (
        <>
          <h3 className="text-center mb-4">Image Gallery</h3>
          <div className="row text-center">
            {images.map((src, index) => (
              <div className="col-4 mb-3" key={index}>
                <Image
                  src={src}
                  width={600}
                  height={600}
                  className="img-fluid rounded"
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
