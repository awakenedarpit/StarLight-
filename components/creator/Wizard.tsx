"use client";

import { useState } from "react";
import WelcomeStep from "./WelcomeStep";

export default function Wizard() {
  const [step] = useState(1);

    return (
        <>
              <div
                      style={{
                                marginBottom: "30px",
                                          color: "#94a3b8",
                                                    fontWeight: 600,
                                                            }}
                                                                  >
                                                                          Step {step} of 8
                                                                                </div>

                                                                                      {step === 1 && <WelcomeStep />}
                                                                                          </>
                                                                                            );
                                                                                            }