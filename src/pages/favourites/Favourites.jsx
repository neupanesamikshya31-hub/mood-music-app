import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Sidebar from "../../components/sidebar/Sidebar";
import SongCard from "../../components/songcard/SongCard";

const Favourites = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favorites")) || [];
    setSongs(fav);
  }, []);

  return (
    <div
      className="container-fluid py-3"
      style={{ background: "#EEF3FF", minHeight: "100vh" }}
    >
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>

        <div className="col-lg-10">
          <button
            className="btn rounded-pill mb-3"
            style={{
              background: "#DCE8FF",
              color: "#4D74D4",
            }}
            onClick={() => navigate("/")}
          >
            <FaArrowLeft className="me-2" />
            Home
          </button>

          <h3 className="fw-bold mb-4">❤️ Favourite Songs</h3>

          {songs.length === 0 ? (
            <div className="bg-white rounded-4 p-5 text-center shadow-sm">
              <h5>No favourite songs yet</h5>
              <p className="text-secondary">
                Like a song from the player to see it here.
              </p>
            </div>
          ) : (
            <div className="row g-4">
              {songs.map((song, i) => (
                <div className="col-md-6 col-lg-3" key={song.id.videoId}>
                  <SongCard song={song} songs={songs} index={i} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourites;