export default function RecipientStep() {
  return (
    <>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "10px",
        }}
      >
        Who is receiving this surprise?
      </h2>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Enter the recipient's details.
      </p>

      <input
        placeholder="Recipient Name"
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "#1e293b",
          color: "white",
          marginBottom: "20px",
        }}
      />

      <button className="primary-btn">
        Continue →
      </button>
    </>
  );
}