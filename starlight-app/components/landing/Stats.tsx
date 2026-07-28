export default function Stats() {
  const stats = [
    {
      number: "50K+",
      title: "Birthday Wishes",
    },
    {
      number: "120+",
      title: "Countries",
    },
    {
      number: "99%",
      title: "Happy Users",
    },
    {
      number: "24/7",
      title: "Online",
    },
  ];

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
            fontSize: "2.5rem",
            marginBottom: "60px",
          }}
        >
          Trusted Around The World
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "25px",
          }}
        >
          {stats.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <h3
                className="gradient-text"
                style={{
                  fontSize: "2.6rem",
                  marginBottom: "10px",
                }}
              >
                {item.number}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}