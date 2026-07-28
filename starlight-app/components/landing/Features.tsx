const features = [
  {
    emoji: "🎂",
    title: "Interactive Wishes",
    desc: "Create immersive birthday pages with animations and heartfelt messages.",
  },
  {
    emoji: "🎵",
    title: "Music & Memories",
    desc: "Add favourite songs, photos and videos to make every wish unforgettable.",
  },
  {
    emoji: "🎆",
    title: "Celebration Effects",
    desc: "Fireworks, confetti and magical effects that surprise your loved ones.",
  },
];

export default function Features() {
  return (
    <section
      className="container"
      style={{
        padding: "100px 0",
      }}
    >
      <h2
        className="gradient-text"
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "60px",
        }}
      >
        Why StarLight?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "24px",
        }}
      >
        {features.map((item) => (
          <div
            key={item.title}
            className="glass"
            style={{
              padding: "32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
              }}
            >
              {item.emoji}
            </div>

            <h3 style={{ marginBottom: "12px" }}>
              {item.title}
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: 1.7,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}