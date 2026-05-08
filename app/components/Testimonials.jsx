"use client";

import Image from "next/image";
import IntroButton from "@components/IntroButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const testi = [
    {
      title: "Experience 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit۔",
      job: "WEB Developer",
    },
    {
      title: "Experience 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit۔",
      job: "WEB Developer",
    },
    {
      title: "Experience 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit۔",
      job: "WEB Developer",
    },
  ];

  return (
    <div className="container ">
      <IntroButton>Testimonials</IntroButton>
      {/* ----------------------------------------------------- */}
      <div className="row  text-center">
        {testi.map((data, index) => (
          <div className="col-4 mb-5 rounded shadow-sm " key={index}>
            <div className="d-flex justify-content-center mb-4">
              <Image
                src="/image.jpg"
                className="rounded-circle shadow-1-strong bg-warning p-1"
                width={"70"}
                height={"70"}
                alt="..."
              />
            </div>
            <h5 className="mb-3">{data.title}</h5>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <FontAwesomeIcon icon={faStar} color="orange" />
                <FontAwesomeIcon icon={faStar} color="orange" />
                <FontAwesomeIcon icon={faStar} color="orange" />
                <FontAwesomeIcon icon={faStar} color="black" />
                <FontAwesomeIcon icon={faStar} color="black" />
              </li>
            </ul>
            <p className="fs-8">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
