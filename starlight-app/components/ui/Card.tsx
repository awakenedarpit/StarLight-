type Props = {
      children: React.ReactNode;
      };

      export default function Card({ children }: Props) {
        return (
            <div
                  className="glass"
                        style={{
                                padding: "25px",
                                        borderRadius: "24px",
                                              }}
                                                  >
                                                        {children}
                                                            </div>
                                                              );
                                                              }
