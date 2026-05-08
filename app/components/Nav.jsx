import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    "Home",
    "About us",
    "Gallery",
    "Meet Your Guide",
    "Room & pricing",
    "Contact us",
  ];

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: "rgba(30, 20, 10, 0.85)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container">
        {/* Logo */}
        {/* <Link href="/gallery"> */}
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="/gallery"
        >
          <div
            style={{
              width: 54,
              height: 54,
              background: "transparent",
              border: "2px solid #fff",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Simple K logo with tree and house icon */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Tree top */}
              <polygon points="22,4 30,16 14,16" fill="white" />
              <polygon points="22,10 31,22 13,22" fill="white" />
              {/* Trunk */}
              <rect x="20" y="22" width="4" height="5" fill="white" />
              {/* House */}
              <rect x="10" y="28" width="24" height="12" rx="1" fill="white" />
              <polygon points="22,22 10,29 34,29" fill="white" />
              <rect x="19" y="32" width="6" height="8" fill="#2c1a0e" />
              {/* K letter overlay */}
              <text
                x="11"
                y="39"
                fontSize="16"
                fontWeight="bold"
                fill="#2c1a0e"
                fontFamily="serif"
              >
                K
              </text>
            </svg>
          </div>
        </a>
        {/* </Link> */}

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setNavOpen(!navOpen)}
          style={{ color: "white" }}
        >
          <span style={{ color: "white", fontSize: 24 }}>&#9776;</span>
        </button>

        {/* Nav links */}
        <div className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <Link href={`/${link}`.toLowerCase().replace(" ", "")}>
                  <button
                    className="btn"
                    style={{
                      color:
                        activeLink === link ? "#fff" : "rgba(255,255,255,0.8)",
                      backgroundColor:
                        activeLink === link ? "#7B4A1E" : "transparent",
                      borderRadius: 6,
                      transition: "all 0.2s",
                      fontWeight: activeLink === link ? 500 : 400,
                    }}
                  >
                    {" "}
                    {link}
                  </button>
                  {/* <a
                  className="nav-link px-3 py-2"
                  // href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setActiveLink(link)}
                  style={{
                    color:
                      activeLink === link ? "#fff" : "rgba(255,255,255,0.8)",
                    backgroundColor:
                      activeLink === link ? "#7B4A1E" : "transparent",
                    borderRadius: 6,
                    transition: "all 0.2s",
                    fontWeight: activeLink === link ? 500 : 400,
                  }}
                > */}

                  {/* </a> */}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/booking" className="" style={{ textDecoration: "none" }}>
            <button
              className="btn d-flex align-items-center gap-2"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #c8864a",
                color: "#fff",
                borderRadius: 30,
                padding: "8px 20px",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Book Your Stay
            </button>
            {/* <a href="#booking">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg> */}
            {/* </a> */}
          </Link>
        </div>
      </div>
    </nav>
  );
}
