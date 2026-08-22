import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Sidebar from "../../components/sidebar/Sidebar";
import PlayerCard from "../../components/playercard/PlayerCard";

const Player = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.songs) {
    return <Navigate to="/" replace />;
  }

  const { songs, currentIndex: startIndex } = state;
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const song = songs[currentIndex];

  const playerRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!song) return;

    const loadPlayer = () => {
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
      }

      const player = new window.YT.Player("youtube-player", {
        videoId: song.id.videoId,
        playerVars: {
          controls: 0,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (e) => {
            playerRef.current = e.target;
            setDuration(e.target.getDuration());
            e.target.playVideo();
          },
          onStateChange: (e) => {
            setPlaying(e.data === window.YT.PlayerState.PLAYING);
          },
        },
      });

      playerRef.current = player;
    };

    if (window.YT && window.YT.Player) {
      loadPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = loadPlayer;
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playerRef.current?.getCurrentTime) {
        setProgress(playerRef.current.getCurrentTime());
        setDuration(playerRef.current.getDuration());
      }
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (playing) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
  };

  const seek = (time) => {
    playerRef.current.seekTo(time, true);
  };

  const nextSong = () => {
    if (currentIndex < songs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSong = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const format = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
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
          <button
            className="btn rounded-pill mb-4"
            style={{ background: "#DCE8FF" }}
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-2" />
            Back
          </button>

          <PlayerCard
            song={song}
            playing={playing}
            progress={progress}
            duration={duration}
            seek={seek}
            togglePlay={togglePlay}
            nextSong={nextSong}
            prevSong={prevSong}
            format={format}
          />

          <div
            id="youtube-player"
            style={{ width: 0, height: 0, overflow: "hidden" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;