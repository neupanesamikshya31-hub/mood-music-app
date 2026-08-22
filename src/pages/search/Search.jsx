import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Sidebar from "../../components/sidebar/Sidebar";
import SongCard from "../../components/songcard/SongCard";
import { searchSongs } from "../../services/youtubeApi";

const Search = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await searchSongs(state?.query || "Nepali Songs");
      setSongs(data);
    };

    load();
  }, [state]);

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

          <h3 className="fw-bold mb-4">
            Search Result: {state?.query}
          </h3>

          <div className="row g-4">
            {songs.map((song, i) => (
              <div className="col-md-6 col-lg-3" key={song.id.videoId}>
                <SongCard song={song} songs={songs} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;