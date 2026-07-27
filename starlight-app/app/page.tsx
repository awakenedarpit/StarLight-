export default function Home() {
  return (
    <main className="container min-h-screen flex items-center justify-center">
      <section className="text-center max-w-4xl">

        <p
          style={{
            color: "#38bdf8",
            fontWeight: 600,
            marginBottom: "12px",
            letterSpacing: "2px",
          }}
        >
          ✨ The Future of Digital Celebrations
        </p>

        <h1
          className="gradient-text"
          style={{
            fontSize: "clamp(3rem,8vw,6rem)",
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          StarLight
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.5rem,4vw,2.5rem)",
            marginBottom: "20px",
            color: "#ffffff",
          }}
        >
          Every Wish Becomes a Memory
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: 1.8,
          }}
        >
          Create magical interactive birthday surprises with photos,
          music, animations, heartfelt letters, fireworks,
          gift boxes and unforgettable memories —
          all inside one beautiful shareable experience.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button className="primary-btn">
            🎁 Create Wish
          </button>

          <button className="secondary-btn">
            ▶ Watch Demo
          </button>
        </div>

      </section>
    </main>
  );
}