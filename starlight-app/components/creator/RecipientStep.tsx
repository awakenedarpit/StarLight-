"use client";

import { useWish } from "@/context/WishContext";

export default function RecipientStep({
  onNext,
}: {
  onNext: () => void;
}) {
  const { wishData, setWishData } = useWish();

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
          type="text"
          placeholder="Recipient Name"
          value={wishData.recipient}
          onChange={(e) =>
            setWishData({
              ...wishData,
              recipient: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "18px",
            marginBottom: "20px",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.1)",
            background: "rgba(255,255,255,.05)",
            color: "white",
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