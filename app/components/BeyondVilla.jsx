"use clinet";

import { useState, useEffect } from "react";
import IntroButton from "@components/IntroButton";
import Image from "next/image";

export default function Villa() {
  const [isMobile, setIsMobile] = useState(false);
  const about = [
    {
      title: "Kundurik",
      image: "/image5.jpg",
      desc: "Kundurik is a Kalash tradition where wooden effigies are carved to honor brave ancestors. Placed at the village entrance during the Gandaw ritual, these figures symbolize courage and cultural heritage.",
    },
    {
      title: "Bashali (maternity home)",
      image: "/image2.jpg",
      desc: "Bashali is an important part of Kalasha culture — a traditional women’s house where women stay during menstruation and childbirth, observing ancient customs and spiritual practices that honor purity, renewal, and community wisdom.",
    },
    {
      title: "Kundurik",
      image: "/image4.jpg",
      desc: "Kundurik is a Kalash tradition where wooden effigies are carved to honor brave ancestors. Placed at the village entrance during the Gandaw ritual, these figures symbolize courage and cultural heritage.",
    },
    {
      title: "Bashali (maternity home)",
      image: "/image5.jpg",
      desc: "Bashali is an important part of Kalasha culture — a traditional women’s house where women stay during menstruation and childbirth, observing ancient customs and spiritual practices that honor purity, renewal, and community wisdom.",
    },
  ];

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
    <div className="container mb-5">
      <IntroButton>What awaits beyond the Villa</IntroButton>
      <div className="text-center">
        <p>
          Discover Around Kalash Villa. <br></br> Step outside and you’ll find
          the spirit of Kalash life all around you:
        </p>
      </div>
      <div className="row">
        <div
          id="aboutCarousel"
          className="carousel slide col-12 mx-auto"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {about
              .reduce((acc, _, index) => {
                const cardsPerSlide = isMobile ? 2 : 3;
                if (index % cardsPerSlide === 0) {
                  acc.push(index);
                }
                return acc;
              }, [])
              .map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active bg-dark" : "bg-dark"}
                />
              ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {about
              .reduce((acc, _, index) => {
                const cardsPerSlide = isMobile ? 2 : 3;
                if (index % cardsPerSlide === 0) {
                  acc.push(about.slice(index, index + cardsPerSlide));
                }
                return acc;
              }, [])
              .map((group, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                >
                  <div className="d-flex justify-content-center gap-3">
                    {group.map((item, index) => (
                      <div
                        className="card box-shadow"
                        key={index}
                        style={{
                          width: isMobile ? "48%" : "31%",
                          maxWidth: "540px",
                        }}
                      >
                        <div className="row no-gutters">
                          <div className="col">
                            <div
                              className="card-head"
                              style={{ position: "relative", height: "200px" }}
                            >
                              <Image
                                src="/image.jpg"
                                fill
                                size={"100vw"}
                                className="card-img img-thumbnail object-fit-cover"
                                alt="Picture"
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title fw-bold">
                                {item.title}
                              </h5>
                              <p className="card-text">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev bg-dark rounded-circle"
            style={{ width: "5rem", height: "5rem", marginTop: "10rem" }}
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next bg-dark rounded-circle"
            style={{ width: "5rem", height: "5rem", marginTop: "10rem" }}
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
