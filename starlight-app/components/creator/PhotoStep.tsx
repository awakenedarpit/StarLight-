"use client";

export default function PhotoStep({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <>
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "12px",
        }}
      >
        Upload Photos 📸
      </h2>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "35px",
        }}
      >
        Add memorable photos to make the surprise unforgettable.
      </p>

      <div
        className="glass"
        style={{
          padding: "50px",
          borderRadius: "24px",
          border: "2px dashed rgba(255,255,255,.15)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "4rem",
            marginBottom: "20px",
          }}
        >
          📷
        </div>

        <input
          type="file"
          multiple
          accept="image/*"
        />

        <p
          style={{
            marginTop: "20px",
            color: "#94a3b8",
          }}
        >
          Select one or more beautiful memories.
        </p>
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