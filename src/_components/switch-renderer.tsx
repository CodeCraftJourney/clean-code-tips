import { useState } from "react";
import { Switch } from "./snippets/switch";

export const SwitchRenderer: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <main
      style={{
        margin: "20px",
        border: "2px solid #00000010",
        borderRadius: "5px",
        padding: "15px",
        backgroundColor: active ? "#fce3fc" : "#ffffea",
      }}
    >
      <div // wrapper of tab bar, you can control height and width of tab bar
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 80px)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
          }}
        >
          <div>
            {active ? (
              <strong
                style={{
                  color: "rebeccapurple",
                }}
              >
                Beast
              </strong>
            ) : (
              <span
                style={{
                  color: "orange",
                }}
              >
                Normal
              </span>
            )}
          </div>
          <div>Mode</div>
        </div>

        <Switch active={active} setActive={setActive} />
      </div>
    </main>
  );
};
