"use client";

import { useState } from "react";

import ProgressBar from "../ui/ProgressBar";

import WelcomeStep from "./WelcomeStep";
import RecipientStep from "./RecipientStep";
import PhotoStep from "./PhotoStep";
import MusicStep from "./MusicStep";

export default function Wizard() {
  const [step, setStep] = useState(1);

  return (
    <>
      <div
        style={{
          marginBottom: "20px",
          textAlign: "center",
          color: "#94a3b8",
          fontWeight: 600,
        }}
      >
        Step {step} of 8
      </div>

      {/* Progress Bar */}
      <ProgressBar step={step} total={8} />

      {step === 1 && (
        <WelcomeStep onNext={() => setStep(2)} />
      )}

      {step === 2 && (
        <RecipientStep onNext={() => setStep(3)} />
      )}

      {step === 3 && (
        <PhotoStep onNext={() => setStep(4)} />
      )}

      {step === 4 && (
        <MusicStep onNext={() => setStep(5)} />
      )}

      {/* Back Button */}
      {step > 1 && (
        <div
          style={{
            marginTop: "40px",
          }}
        >
          <button
            className="secondary-btn"
            onClick={() => setStep(step - 1)}
          >
            ← Back
          </button>
        </div>
      )}
    </>
  );
}