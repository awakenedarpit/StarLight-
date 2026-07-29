"use client";

import { useState } from "react";
import WelcomeStep from "./WelcomeStep";
import RecipientStep from "./RecipientStep";

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

      {step === 1 && (
        <WelcomeStep
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <RecipientStep />
      )}
    </>
  );
}