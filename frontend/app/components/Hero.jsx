"use client";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundImage: `url("/hero.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(20, 12, 5, 0.55)",
        }}
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
            className="mb-0"
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              fontFamily: "Georgia, serif",
            }}
          >
            Welcome to Kalash Villa
          </h3>
        </div>

        <p
          className="mb-5"
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            letterSpacing: 0.5,
          }}
        >
          Rooted in culture, surrounded by nature
        </p>

        <a
          href="#booking"
          className="btn btn-lg px-5 py-3"
          style={{
            backgroundColor: "#7B4A1E",
            color: "#fff",
            borderRadius: 6,
            border: "none",
            fontWeight: 500,
            fontSize: "1.05rem",
            transition: "background 0.25s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#9a5d28")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#7B4A1E")
          }
        >
          Book Your Stay
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          animation: "bounce 2s infinite",
        }}
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
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
