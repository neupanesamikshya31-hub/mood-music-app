import React from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaMusic,
  FaHeart,
} from "react-icons/fa";

const PlayerCard = ({
  song,
  playing,
  progress,
  duration,
  seek,
  togglePlay,
  format,
}) => {
  if (!song) return null;

  return (
    <div
      className="mx-auto rounded-5 p-4 shadow-sm"
      style={{
        maxWidth: "380px",
        background: "#F9FBFF",
      }}
    >
      <p className="text-center text-secondary small mb-1">Now Playing</p>

      <h5 className="fw-bold text-center mb-4">
        {song.snippet.channelTitle}
      </h5>

      {/* Pastel Vinyl */}
      <div className="d-flex justify-content-center mb-4">
        <div
          className={playing ? "spin" : ""}
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#CFE0FF 30%,#B8D1FF 31%,#A6C5FF 65%,#8FB5FF 100%)",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: `${16 + i * 10}px`,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.35)",
              }}
            />
          ))}

          <div
            className="rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: 58,
              height: 58,
              background: "#7EA9F8",
            }}
          >
            <FaMusic color="white" size={22} />
          </div>
        </div>
      </div>

      <h6 className="fw-bold text-center">
        {song.snippet.title.length > 32
          ? song.snippet.title.slice(0, 32) + "..."
          : song.snippet.title}
      </h6>

      <p className="text-center text-secondary small mb-3">
        {song.snippet.channelTitle}
      </p>

      <input
        type="range"
        className="form-range"
        min={0}
        max={duration}
        value={progress}
        onChange={(e) => seek(Number(e.target.value))}
      />

      <div className="d-flex justify-content-between small text-secondary">
        <span>{format(progress)}</span>
        <span>{format(duration)}</span>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button
  className="btn rounded-circle"
  style={{ background: "#E9F1FF", width: 42, height: 42 }}
  onClick={prevSong}
>
  <FaStepBackward color="#5D84E8" />
</button>

<button
  className="btn rounded-circle text-white"
  style={{ background: "#7EA9F8", width: 58, height: 58 }}
  onClick={togglePlay}
>
  {playing ? <FaPause /> : <FaPlay />}
</button>

<button
  className="btn rounded-circle"
  style={{ background: "#E9F1FF", width: 42, height: 42 }}
  onClick={nextSong}
>
  <FaStepForward color="#5D84E8" />
</button>
      </div>

      <div className="text-center mt-3">
        <FaHeart color="#FF8AA5" size={18} />
      </div>
    </div>
  );
};

export default PlayerCard;