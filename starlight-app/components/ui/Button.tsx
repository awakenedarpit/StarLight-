type ButtonProps = {
      children: React.ReactNode;
        onClick?: () => void;
          variant?: "primary" | "secondary";
          };

          export default function Button({
            children,
              onClick,
                variant = "primary",
                }: ButtonProps) {
                  return (
                      <button
                            onClick={onClick}
                                  className={variant === "primary" ? "primary-btn" : "secondary-btn"}
                                        style={{
                                                minWidth: "160px",
                                                      }}
                                                          >
                                                                {children}
                                                                    </button>
                                                                      );
                                                                      }
