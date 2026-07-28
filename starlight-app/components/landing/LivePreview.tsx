export default function LivePreview() {
  return (
    <section
      style={{
        padding: "120px 20px",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#38bdf8",
              fontWeight: 600,
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            LIVE PREVIEW
          </p>

          <h2
            className="gradient-text"
            style={{
              fontSize: "3rem",
              marginBottom: "25px",
            }}
          >
            Experience The Magic
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.8,
              marginBottom: "35px",
            }}
          >
            Every StarLight celebration feels alive with music, glowing
            effects, animated memories and unforgettable surprises.
          </p>

          <button className="primary-btn">
            Create Your First Wish
          </button>
        </div>

        <div
          className="glass"
          style={{
            padding: "30px",
            borderRadius: "30px",
          }}
        >
          <div
            style={{
              background: "#0f172a",
              borderRadius: "24px",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "4rem" }}>🎂</div>

            <h3
              style={{
                marginTop: "20px",
                fontSize: "2rem",
              }}
            >
              Happy Birthday!
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                marginTop: "15px",
              }}
            >
              Wishing you happiness,
              laughter and unforgettable memories.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginTop: "30px",
                fontSize: "2rem",
              }}
            >
              🎈 🎁 🎆 🎵
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}