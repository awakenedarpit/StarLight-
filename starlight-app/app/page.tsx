import Navbar from "@/components/landing/Navbar";

import Background from "@/components/landing/Background";

import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <>
      <Navbar />
<Background />
      <main
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "90px",
        }}
      >
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
<Features />
      </main>
    </>
  );
}