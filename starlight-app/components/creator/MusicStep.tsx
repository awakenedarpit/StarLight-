"use client";

const songs = [
  "🎂 Happy Birthday",
  "🎹 Piano Memories",
  "❤️ Romantic Melody",
  "🎉 Party Beats",
  "🌌 Galaxy Dreams",
];

export default function MusicStep({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <>
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "15px",
        }}
      >
        Choose Background Music 🎵
      </h2>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "35px",
        }}
      >
        Select the perfect soundtrack for the celebration.
      </p>

      <div
        style={{
          display: "grid",
          gap: "18px",
        }}
      >
        {songs.map((song) => (
          <button
            key={song}
            className="glass"
            style={{
              padding: "20px",
              borderRadius: "16px",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            {song}
          </button>
        ))}
      </div>

      <button
        className="primary-btn"
        onClick={onNext}
        style={{
          marginTop: "35px",
        }}
      >
        Continue →
      </button>
    </>
  );
}