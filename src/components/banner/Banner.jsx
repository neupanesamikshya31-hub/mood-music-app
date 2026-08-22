import React from "react";
import { FaPlay, FaHeadphones } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="rounded-5 overflow-hidden position-relative mb-4 shadow-sm"
      style={{
        minHeight: "300px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(90deg, rgba(48,62,115,0.72) 0%, rgba(48,62,115,0.25) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="position-relative h-100 d-flex align-items-center p-5 text-white">
        <div className="col-lg-6">
          <div
            className="d-inline-flex align-items-center rounded-pill px-3 py-2 mb-3"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
            }}
          >
            <FaHeadphones className="me-2" />
            <span className="fw-semibold">Mood Music</span>
          </div>

          <h1 className="display-5 fw-bold mb-3">
            Music for Every
            <br />
            Feeling
          </h1>

          <p className="fs-5 mb-4" style={{ color: "#E8ECFF" }}>
            Happy, sad, chill or romantic — discover beautiful songs that
            match your mood.
          </p>

          <button
            className="btn rounded-pill px-4 py-2 text-white fw-semibold"
            style={{
              background: "#7EA9F8",
              border: "none",
            }}
          >
            <FaPlay className="me-2" />
            Explore Music
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;