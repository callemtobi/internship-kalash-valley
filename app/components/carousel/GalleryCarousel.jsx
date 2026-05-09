"use client";

// import EmblaCarousel from "./EmblaCarousel";
// import "@/styles/sandbox.css";
// import "@/styles/embla.css";

// const OPTIONS = { loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
import Image from "next/image";
import { useState, useEffect } from "react";

export default function GalleryCarousel() {
  const [isMobile, setIsMobile] = useState(false);

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

  const about = [
    "/gallery/image1.png",
    "/gallery/image2.png",
    "/gallery/image3.png",
    "/gallery/image1.png",
    "/gallery/image2.png",
    "/gallery/image3.png",
  ];

  return (
    <div className="row">
      <div
        id="aboutCarousel"
        className="carousel slide col-12 mx-auto"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {about.slice(0, about.length - 2).map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active bg-dark" : "bg-dark"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {about.slice(0, about.length - 2).map((_, slideIndex) => {
            const group = about.slice(slideIndex, slideIndex + 3);

            return (
              <div
                key={slideIndex}
                className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center gap-3">
                  {group.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        width: isMobile ? "48%" : "31%",
                        maxWidth: "540px",
                      }}
                    >
                      <div className="row no-gutters">
                        <div className="col">
                          <div
                            style={{
                              position: "relative",
                              height: "250px",
                            }}
                          >
                            <Image
                              src={item}
                              fill
                              sizes="100vw"
                              className="card-img img-fluid img-thumbnail object-fit-cover rounded"
                              alt="Picture"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev bg-dark rounded-circle"
          style={{ width: "5rem", height: "5rem", marginTop: "5rem" }}
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next bg-dark rounded-circle"
          style={{ width: "5rem", height: "5rem", marginTop: "5rem" }}
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}
