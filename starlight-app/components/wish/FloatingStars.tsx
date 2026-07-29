export default function FloatingStars() {
  return (
    <>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "4px",
            height: "4px",
            background: "white",
            borderRadius: "50%",
            opacity: 0.8,
            boxShadow: "0 0 12px white",
            animation: `float ${4 + Math.random() * 6}s infinite ease-in-out`,
          }}
        />
      ))}
    </>
  );
}