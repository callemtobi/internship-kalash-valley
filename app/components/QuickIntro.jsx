"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import IntroButton from "@components/IntroButton";
const about = [
  {
    title: "About Kalash Villa",
    img: "/quickintro/quick2.png",
    description:
      "Tucked in the heart of Bumburet valley, Kalash Villa is a peaceful retreat where nature and culture embrace. With mountain streams nearby and the warmth of Kalash hospitality all around, it offers a perfect blend of comfort and tradition. Whether you come to explore or simply breathe in the valley’s calm, Kalash Villa welcomes you with the true spirit of the mountains.",
  },
  {
    title: "About Kalash & Bumburet Valley",
    img: "/quickintro/quick1.jpg",
    description:
      "Home to the vibrant Kalash people, Bumburet valley is the largest and most lively of the three Kalash valleys — a living story of color, faith, and harmony with nature. Surrounded by snow-capped peaks and lush greenery, it’s a place where ancient traditions meet the serenity of mountain life, offering visitors a glimpse of culture, connection, and timeless beauty.",
  },
];

export default function QuickIntro() {
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

  return (
    <div className="container">
      <div className="row">
        {isMobile ? <p>Mobile content</p> : <p>Desktop content</p>}
        <IntroButton>Quick Intro</IntroButton>
        {about.map((item, index) => {
          return (
            <div
              className="card mb-3 gap-3 mx-auto box-shadow"
              key={index}
              style={{ maxWidth: "540px" }}
            >
              <div className="row no-gutters">
                <div
                  className="col p-4"
                  style={{ position: "relative", height: "300px" }}
                >
                  <Image
                    src={item.img}
                    fill
                    className="card-img-top object-fit-contain"
                    alt="Picture"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
