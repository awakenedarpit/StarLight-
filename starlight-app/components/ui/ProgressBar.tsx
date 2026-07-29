type Props = {
      step: number;
        total: number;
        };

        export default function ProgressBar({
          step,
            total,
            }: Props) {
              const width = `${(step / total) * 100}%`;

                return (
                    <div
                          style={{
                                  width: "100%",
                                          height: "10px",
                                                  background: "#1e293b",
                                                          borderRadius: "999px",
                                                                  overflow: "hidden",
                                                                          marginBottom: "25px",
                                                                                }}
                                                                                    >
                                                                                          <div
                                                                                                  style={{
                                                                                                            width,
                                                                                                                      height: "100%",
                                                                                                                                background: "#38bdf8",
                                                                                                                                          transition: "0.4s",
                                                                                                                                                  }}
                                                                                                                                                        />
                                                                                                                                                            </div>
                                                                                                                                                              );
                                                                                                                                                              }
