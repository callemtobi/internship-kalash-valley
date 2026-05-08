"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import FooterComp from "@components/FooterComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFaceDizzy } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
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
  const btnsTitle = [
    "Home",
    "About us",
    "Our villa",
    "Meet your guides",
    "Room and pricing",
  ];
  const imgSrc = [
    "/logo/location.png",
    "/logo/gmail.png",
    "/logo/instagram.png",
    "/logo/whataspp.png",
  ];
  return (
    <div className="">
      <FooterComp />
      <div className="row m-0">
        {/* Logo */}
        <div
          className="mx-auto bg-dark text-center px-5 col-12 col-lg-4"
          style={{ padding: "4rem 0" }}
        >
          <Image
            src="/logo/logo.png"
            height={100}
            width={100}
            className="card-img-top object-fit-contain"
            alt="..."
          ></Image>
          <p className="text-light mt-4">
            Kalash Villa is a serene guesthouse nestled in the heart of Bumburat
            Vally , surrounded by the scenic peaks of the Hindukush mountains.
            It offers a peaceful retreat where guests can experience the rich
            Kalasha culture, stunning landscapes and the warmth of genuine local
            hospitality.
          </p>
        </div>

        {/* Quick links */}
        <div className="d-flex bg-dark justify-content-center align-items-center pt-5 col-12 col-lg-4">
          <div className="text-light">
            <h1 className="fs-2 d-inline-block w-auto border-bottom p-2">
              Quick Links
            </h1>
            {btnsTitle.map((bb, index) => (
              <div key={index}>
                <FontAwesomeIcon icon={faArrowRight} />
                <div className="text-start d-inline-block">
                  <p className="ps-2">{bb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts us */}
        <div className="d-flex bg-dark text-center  justify-content-center align-items-center pt-5 col-12 col-lg-4">
          <div className="text-light">
            <h1 className="fs-2 d-inline-block w-auto border-bottom p-2">
              Contact Us
            </h1>
            <div className="">
              <FontAwesomeIcon icon={faLocation} />
              <p>Kalash Valley, Chitral District, Pakistan</p>
              <FontAwesomeIcon icon={faPhone} />
              <p>+92 342 0195063</p>
              <FontAwesomeIcon icon={faMailForward} />
              <p>pharan.kalash@gmail.com</p>
            </div>
            {imgSrc.map((i, index) => {
              <div key={index}>
                <Image width={100} height={100} alt="..." src={i} />;
              </div>;
            })}
          </div>
          <div className="position-relative">
            <Image
              src="/logo/vector.png"
              style={
                isMobile
                  ? { postition: "absolute", bottom: "0rem", right: "-3rem" }
                  : { position: "absolute", bottom: "-7rem", right: "0rem" }
              }
              // style={{ position: "absolute", bottom: "0rem", right: "-3rem" }}
              width={300}
              height={300}
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
