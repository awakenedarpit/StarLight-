import { useWish } from "@/context/WishContext";

"use client";

export default function RecipientStep({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <>
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "12px",
        }}
      >
        Who is this surprise for? 🎉
      </h2>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "35px",
        }}
      >
        Tell us about the special person.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          placeholder="Recipient Name"
          className="glass"
          style={{
            padding: "18px",
            borderRadius: "16px",
            fontSize: "1rem",
            color: "white",
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        />

        <input
          type="date"
          className="glass"
          style={{
            padding: "18px",
            borderRadius: "16px",
            fontSize: "1rem",
            color: "white",
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        />

        <textarea
          placeholder="Write a short message..."
          rows={5}
          className="glass"
          style={{
            padding: "18px",
            borderRadius: "16px",
            fontSize: "1rem",
            color: "white",
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        />

        <button
  className="primary-btn"
  onClick={onNext}
  style={{
    marginTop: "20px",
  }}
>
  Continue →
</button>
      </div>
    </>
  );
}