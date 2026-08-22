import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const SongCard = ({ song, songs, index }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card border-0 shadow-sm rounded-4 h-100"
      style={{ cursor: "pointer" }}
      onClick={() =>
        navigate("/player", {
          state: {
            songs: songs,
            currentIndex: index,
          },
        })
      }
    >
      <div className="position-relative">
        <img
          src={song.snippet.thumbnails.high.url}
          className="card-img-top rounded-top-4"
          style={{ height: "180px", objectFit: "cover" }}
        />

        <button
          className="btn btn-primary rounded-circle position-absolute bottom-0 end-0 m-3"
          style={{ width: 48, height: 48 }}
        >
          <FaPlay />
        </button>
      </div>

      <div className="card-body">
        <h6 className="fw-bold">
          {song.snippet.title.slice(0, 45)}
        </h6>
        <small className="text-secondary">
          {song.snippet.channelTitle}
        </small>
      </div>
    </div>
  );
};

export default SongCard;