"use client";

export default function FooterComp() {
  return (
    <div className="text-center my-5">
      <p className="fs-2 fw-bold m-0" style={{ color: "brown" }}>
        Plan Your Kalash Valley Adventure
      </p>
      <p className="fs-5">Get in touch with our team to book your stay</p>
      <button
        className="btn rounded-pill text-light"
        style={{ backgroundColor: "brown" }}
      >
        Contact us
      </button>
    </div>
  );
}
