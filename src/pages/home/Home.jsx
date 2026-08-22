import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import MoodCard from "../../components/moodcard/MoodCard";
import SongCard from "../../components/songcard/SongCard";
import { searchSongs } from "../../services/youtubeApi";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

  const moods = [
    {
      emoji: "😊",
      title: "Happy",
      subtitle: "123+ Songs",
      color: "#F8E6B7",
      query: "Happy Nepali Songs",
    },
    {
      emoji: "😢",
      title: "Sad",
      subtitle: "98+ Songs",
      color: "#DDEAF5",
      query: "Sad Nepali Songs",
    },
    {
      emoji: "😌",
      title: "Chill",
      subtitle: "152+ Songs",
      color: "#E8EDC7",
      query: "Chill Lofi Music",
    },
    {
      emoji: "😍",
      title: "Romantic",
      subtitle: "130+ Songs",
      color: "#F9DDDD",
      query: "Romantic Hindi Songs",
    },
    {
      emoji: "🥳",
      title: "Party",
      subtitle: "110+ Songs",
      color: "#E9D9F8",
      query: "Party Songs",
    },
  ];

  const loadSongs = async (query = "Trending Nepali Songs") => {
    const data = await searchSongs(query);
    setSongs(data);
  };

  useEffect(() => {
    loadSongs();
  }, []);

  const handleSearch = () => {
    if (search.trim()) {
      loadSongs(search);
    }
  };

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
          <Navbar
            search={search}
            setSearch={setSearch}
            onSearch={handleSearch}
          />

          <Banner />

          <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
            <h4 className="fw-bold" style={{ color: "#2D4379" }}>
              Browse by Mood
            </h4>

            <small className="text-secondary">5 Categories</small>
          </div>

          <div className="row g-3 mb-5">
            {moods.map((mood) => (
              <div className="col-6 col-md-4 col-lg" key={mood.title}>
                <MoodCard {...mood} />
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold" style={{ color: "#2D4379" }}>
              Trending Music
            </h4>

            <button
              className="btn rounded-pill px-3"
              style={{
                background: "#DCE8FF",
                color: "#4D74D4",
              }}
              onClick={() => loadSongs()}
            >
              Refresh
            </button>
          </div>

          <div className="row g-4">
            {songs.map((song, i) => (
              <div
                className="col-md-6 col-lg-3"
                key={song.id.videoId}
              >
                <SongCard
                  song={song}
                  songs={songs}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;