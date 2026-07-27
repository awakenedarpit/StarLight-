export default function Navbar() {
      return (
          <nav
                style={{
                        width: "100%",
                                padding: "20px 0",
                                        position: "fixed",
                                                top: 0,
                                                        left: 0,
                                                                zIndex: 100,
                                                                        background: "rgba(5,8,22,.45)",
                                                                                backdropFilter: "blur(18px)",
                                                                                        borderBottom: "1px solid rgba(255,255,255,.08)",
                                                                                              }}
                                                                                                  >
                                                                                                        <div
                                                                                                                className="container"
                                                                                                                        style={{
                                                                                                                                  display: "flex",
                                                                                                                                            justifyContent: "space-between",
                                                                                                                                                      alignItems: "center",
                                                                                                                                                              }}
                                                                                                                                                                    >
                                                                                                                                                                            <h2
                                                                                                                                                                                      className="gradient-text"
                                                                                                                                                                                                style={{
                                                                                                                                                                                                            fontWeight: 700,
                                                                                                                                                                                                                        fontSize: "1.6rem",
                                                                                                                                                                                                                                  }}
                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                    ⭐ StarLight
                                                                                                                                                                                                                                                            </h2>

                                                                                                                                                                                                                                                                    <button className="primary-btn">
                                                                                                                                                                                                                                                                              Create Wish
                                                                                                                                                                                                                                                                                      </button>
                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                </nav>
                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                  }
