"use client";

type Props = {
  name: string;
    setName: (value: string) => void;
    };

    export default function NameStep({
      name,
        setName,
        }: Props) {
          return (
              <>
                    <h2
                            style={{
                                      fontSize: "2.5rem",
                                                marginBottom: "15px",
                                                        }}
                                                              >
                                                                      What's their name?
                                                                            </h2>

                                                                                  <p
                                                                                          style={{
                                                                                                    color: "#cbd5e1",
                                                                                                              marginBottom: "35px",
                                                                                                                      }}
                                                                                                                            >
                                                                                                                                    Enter the name of the person you're celebrating.
                                                                                                                                          </p>

                                                                                                                                                <input
                                                                                                                                                        value={name}
                                                                                                                                                                onChange={(e) => setName(e.target.value)}
                                                                                                                                                                        placeholder="e.g. Arpit"
                                                                                                                                                                                style={{
                                                                                                                                                                                          width: "100%",
                                                                                                                                                                                                    maxWidth: "500px",
                                                                                                                                                                                                              padding: "18px",
                                                                                                                                                                                                                        borderRadius: "16px",
                                                                                                                                                                                                                                  border: "1px solid rgba(255,255,255,.1)",
                                                                                                                                                                                                                                            background: "rgba(255,255,255,.05)",
                                                                                                                                                                                                                                                      color: "white",
                                                                                                                                                                                                                                                                fontSize: "1rem",
                                                                                                                                                                                                                                                                          outline: "none",
                                                                                                                                                                                                                                                                                  }}
                                                                                                                                                                                                                                                                                        />
                                                                                                                                                                                                                                                                                            </>
                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                              }