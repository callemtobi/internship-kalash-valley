"use client";

export default function BookingMain() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/booking/booking.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="position-relative d-flex align-items-center justify-content-center"
    >
      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(20, 12, 5, 0.55)" }}
      />

      {/* Content */}
      <div
        className="container text-center position-relative"
        style={{ zIndex: 1 }}
      >
        <div
          className="mx-auto mb-4 py-4 px-5"
          style={{
            backgroundColor: "rgba(90, 50, 20, 0.65)",
            borderRadius: 6,
            backdropFilter: "blur(4px)",
          }}
        >
          <h3
            className="mb-0 fw-bold text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontFamily: "Georgia, serif",
            }}
          >
            Booking
          </h3>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="position-absolute start-50 translate-middle-x"
        style={{ bottom: 32, zIndex: 1, animation: "bounce 2s infinite" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <style>{`
    @keyframes bounce {
      0%, 100% { transform: translateX(-50%) translateY(0); }
      50%       { transform: translateX(-50%) translateY(8px); }
    }
  `}</style>
    </section>
  );
}
