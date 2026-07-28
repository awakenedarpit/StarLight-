const steps = [
  {
    emoji: "🎁",
    title: "Create Your Wish",
    desc: "Enter the birthday person's name and begin creating a magical surprise.",
  },
  {
    emoji: "📸",
    title: "Add Memories",
    desc: "Upload photos, videos and heartfelt messages that tell your story.",
  },
  {
    emoji: "🎵",
    title: "Choose Music",
    desc: "Select a favourite song to make the celebration even more emotional.",
  },
  {
    emoji: "🚀",
    title: "Share Instantly",
    desc: "Get a unique link and surprise your loved one anywhere in the world.",
  },
];

export default function HowItWorks() {
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
          How StarLight Works
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            maxWidth: "650px",
            margin: "0 auto 70px",
          }}
        >
          Creating unforgettable birthday experiences takes less than two
          minutes.
        </p>

        <div
          style={{
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{
                position: "relative",
                background: "rgba(255,255,255,.05)",
                padding: "35px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,.08)",
                backdropFilter: "blur(10px)",
                textAlign: "center",
                transition: ".3s",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "20px",
                  background: "#8b5cf6",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </div>

              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "20px",
                }}
              >
                {step.emoji}
              </div>

              <h3
                style={{
                  marginBottom: "15px",
                  color: "#fff",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}