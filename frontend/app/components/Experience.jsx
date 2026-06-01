"use client";

import IntroButton from "@components/IntroButton";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);
  const images = [
    "/experience/exp1.png",
    "/experience/exp2.png",
    "/experience/exp3.png",
    "/experience/exp4.png",
    "/experience/exp5.png",
    "/experience/exp6.png",
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

  const experienceData = [
    {
      title: "Experience 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Experience 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Experience 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      title: "Experience 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Experience 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Experience 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <div className="container mb-5">
      <IntroButton>Experience</IntroButton>
      <div className="row">
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
        {/* {experienceData.map((item, index) => (
            <div className="col col-md-4 mb-2" key={index}>
              <div className="p-4 border border rounded shadow-sm">
                <h5 className="mb-3 d-flex justify-content-center">
                  {item.title}
                </h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
}
