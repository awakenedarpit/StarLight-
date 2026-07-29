"use client";

const memories = [
  "📸",
  "🌅",
  "🎂",
  "🎉",
  "❤️",
  "✨",
];

export default function MemoryGallery() {
  return (
    <section
      style={{
        marginTop: "60px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        📸 Beautiful Memories
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
          gap: "20px",
        }}
      >
        {memories.map((item, index) => (
          <div
            key={index}
            className="glass"
            style={{
              height: "140px",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "3rem",
              cursor: "pointer",
              transition: ".3s",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}