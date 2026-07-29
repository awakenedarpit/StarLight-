const celebrations = [

      { emoji: "🎂", title: "Birthday" },
        { emoji: "❤️", title: "Anniversary" },
          { emoji: "🎓", title: "Graduation" },
            { emoji: "💍", title: "Wedding" },
              { emoji: "🎉", title: "Other" },
              ];

              export default function WelcomeStep({
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
                                                                            Who are you celebrating?
                                                                                  </h2>

                                                                                        <p
                                                                                                style={{
                                                                                                          color: "#cbd5e1",
                                                                                                                    marginBottom: "40px",
                                                                                                                            }}
                                                                                                                                  >
                                                                                                                                          Choose the type of celebration.
                                                                                                                                                </p>

                                                                                                                                                      <div
                                                                                                                                                              style={{
                                                                                                                                                                        display: "grid",
                                                                                                                                                                                  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                                                                                                                                                                                            gap: "20px",
                                                                                                                                                                                                    }}
                                                                                                                                                                                                          >
                                                                                                                                                                                                                  {celebrations.map((item) => (
                                                                                                                                                                                                                            {celebrations.map((item) => (
  <button
    key={item.title}
    className="glass"
    style={{
      padding: "35px 20px",
      borderRadius: "24px",
      cursor: "pointer",
      background:
        "linear-gradient(145deg, rgba(255,255,255,.10), rgba(255,255,255,.04))",
      border: "1px solid rgba(255,255,255,.12)",
      transition: "all .3s ease",
      boxShadow: "0 10px 30px rgba(0,0,0,.25)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.border =
        "1px solid rgba(56,189,248,.8)";
      e.currentTarget.style.boxShadow =
        "0 20px 40px rgba(56,189,248,.25)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.border =
        "1px solid rgba(255,255,255,.12)";
      e.currentTarget.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.25)";
    }}
  >
    <div
      style={{
        fontSize: "3.5rem",
        filter: "drop-shadow(0 0 10px rgba(255,255,255,.35))",
      }}
    >
      {item.emoji}
    </div>

    <h3
      style={{
        margin: 0,
        fontSize: "1.25rem",
        color: "#fff",
        fontWeight: 700,
      }}
    >
      {item.title}
    </h3>

    <p
      style={{
        margin: 0,
        color: "#94a3b8",
        fontSize: ".9rem",
      }}
    >
      Create a magical surprise
    </p>
  </button>
))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }