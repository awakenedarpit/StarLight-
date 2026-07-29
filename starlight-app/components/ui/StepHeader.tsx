type Props = {
      title: string;
        subtitle: string;
        };

        export default function StepHeader({
          title,
            subtitle,
            }: Props) {
              return (
                  <>
                        <h2
                                style={{
                                          fontSize: "2.5rem",
                                                    marginBottom: "12px",
                                                            }}
                                                                  >
                                                                          {title}
                                                                                </h2>

                                                                                      <p
                                                                                              style={{
                                                                                                        color: "#94a3b8",
                                                                                                                  marginBottom: "35px",
                                                                                                                          }}
                                                                                                                                >
                                                                                                                                        {subtitle}
                                                                                                                                              </p>
                                                                                                                                                  </>
                                                                                                                                                    );
                                                                                                                                                    }
