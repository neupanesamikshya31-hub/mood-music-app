import React from "react";
import { useNavigate } from "react-router-dom";

const MoodCard = ({ emoji, title, subtitle, color, query }) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-4 p-3 shadow-sm h-100"
      style={{
        background: color,
        cursor: "pointer",
        minHeight: "155px",
        transition: "0.3s",
      }}
      onClick={() =>
        navigate(`/mood/${title.toLowerCase()}`, {
          state: { query },
        })
      }
    >
      <div
        className="rounded-circle d-flex justify-content-center align-items-center mb-3"
        style={{
          width: "65px",
          height: "65px",
          background: "rgba(255,255,255,0.55)",
          fontSize: "30px",
        }}
      >
        {emoji}
      </div>

      <h5 className="fw-bold mb-1">{title}</h5>
      <small className="text-secondary">{subtitle}</small>
    </div>
  );
};

export default MoodCard;