type Props = {
      placeholder?: string;
        type?: string;
        };

        export default function Input({
          placeholder,
            type = "text",
            }: Props) {
              return (
                  <input
                        type={type}
                              placeholder={placeholder}
                                    style={{
                                            width: "100%",
                                                    padding: "18px",
                                                            borderRadius: "16px",
                                                                    border: "1px solid rgba(255,255,255,.1)",
                                                                            background: "rgba(255,255,255,.05)",
                                                                                    color: "white",
                                                                                            marginBottom: "20px",
                                                                                                  }}
                                                                                                      />
                                                                                                        );
                                                                                                        }
