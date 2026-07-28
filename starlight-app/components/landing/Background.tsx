export default function Background() {
  return (
    <>
      <div className="aurora" />

      <div className="stars">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}