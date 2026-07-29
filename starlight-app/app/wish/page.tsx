import MemoryGallery from "@/components/wish/MemoryGallery";

import Letter from "@/components/wish/Letter";

import GiftBox from "@/components/wish/GiftBox";
 
export default function WishPage() {
      return (
          <main
                style={{
                        minHeight: "100vh",
                                background:
                                          "linear-gradient(135deg,#0f172a,#1e293b,#312e81)",
                                                  display: "flex",
                                                          justifyContent: "center",
                                                                  alignItems: "center",
                                                                          padding: "40px",
                                                                                }}
                                                                                    >
                                                                                          <div
                                                                                                  className="glass"
                                                                                                          style={{
                                                                                                                    width: "100%",
                                                                                                                              maxWidth: "900px",
                                                                                                                                        padding: "50px",
                                                                                                                                                  borderRadius: "30px",
                                                                                                                                                            textAlign: "center",
                                                                                                                                                                    }}
                                                                                                                                                                          >
                                                                                                                                                                                  <h1
                                                                                                                                                                                            className="gradient-text"
                                                                                                                                                                                                      style={{
                                                                                                                                                                                                                  fontSize: "3.5rem",
                                                                                                                                                                                                                            }}
                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                              🎂 Happy Birthday!
                                                                                                                                                                                                                                                      </h1>

                                                                                                                                                                                                                                                              <p
                                                                                                                                                                                                                                                                        style={{
                                                                                                                                                                                                                                                                                    color: "#cbd5e1",
                                                                                                                                                                                                                                                                                                marginTop: "20px",
                                                                                                                                                                                                                                                                                                            fontSize: "1.2rem",
                                                                                                                                                                                                                                                                                                                      }}
                                                                                                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                                                                                                        Every wish becomes a memory.
                                                                                                                                                                                                                                                                                                                                                </p>

                                                                                                                                                                                                                                                                                                                                                        <div
                                                                                                                                                                                                                                                                                                                                                                  style={{
                                                                                                                                                                                                                                                                                                                                                                              fontSize: "6rem",
                                                                                                                                                                                                                                                                                                                                                                                          margin: "40px 0",
                                                                                                                                                                                                                                                                                                                                                                                                    }}
                                                                                                                                                                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                                                                                                                                                                      🎉
                                                                                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                      <GiftBox />

<Letter />
                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </main>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }