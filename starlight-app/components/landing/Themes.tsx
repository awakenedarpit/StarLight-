const themes = [
  { emoji: "🌌", name: "Galaxy", color: "#6d28d9" },
  { emoji: "🌸", name: "Sakura", color: "#ec4899" },
  { emoji: "🌊", name: "Ocean", color: "#0ea5e9" },
  { emoji: "🌅", name: "Sunset", color: "#f97316" },
  { emoji: "❄️", name: "Winter", color: "#38bdf8" },
  { emoji: "🎮", name: "Gamer", color: "#22c55e" },
  { emoji: "❤️", name: "Romantic", color: "#ef4444" },
  { emoji: "💎", name: "Luxury", color: "#facc15" },
];

export default function Themes() {
  return (
    <section
      style={{
        padding: "100px 20px",
      }}
    >
      <div className="container">

        <h2
          style={{
            textAlign: "center",
            fontSize: "2.8rem",
            marginBottom: "20px",
          }}
        >
          Choose Your Theme
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            maxWidth: "700px",
            margin: "0 auto 60px",
          }}
        >
          Every birthday has a different feeling.
          Pick a magical theme that matches the celebration.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          {themes.map((theme) => (
            <div
              key={theme.name}
              style={{
                borderRadius: "24px",
                padding: "35px",
                textAlign: "center",
                background: `linear-gradient(135deg, ${theme.color}, #1e1b4b)`,
                boxShadow: `0 0 35px ${theme.color}55`,
                transition: ".3s",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontSize: "4rem",
                  marginBottom: "20px",
                }}
              >
                {theme.emoji}
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "10px",
                  color: "#fff",
                }}
              >
                {theme.name}
              </h3>

              <p
                style={{
                  color: "#f8fafc",
                }}
              >
                Beautiful interactive birthday experience.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}