import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import SongCard from "../../components/songcard/SongCard";
import { searchSongs } from "../../services/youtubeApi";

const Mood = () => {
  const { type } = useParams();
  const [songs, setSongs] = useState([]);

  const moodQuery = {
    happy: "Happy Nepali Songs",
    sad: "Sad Nepali Songs",
    chill: "Chill Lofi Music",
    romantic: "Romantic Hindi Songs",
    party: "Party Songs",
  };

  useEffect(() => {
    const loadSongs = async () => {
      const data = await searchSongs(
        moodQuery[type] || "Trending Nepali Songs"
      );
      setSongs(data);
    };

    loadSongs();
  }, [type]);

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
          <div
            className="rounded-5 p-4 mb-4 shadow-sm"
            style={{ background: "#DCE8FF" }}
          >
            <h2 className="fw-bold text-capitalize">{type} Playlist</h2>
            <p className="text-secondary mb-0">
              Songs that match your {type} mood.
            </p>
          </div>

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

export default Mood;