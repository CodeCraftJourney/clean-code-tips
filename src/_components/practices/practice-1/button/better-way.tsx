import style from "@/_styles/button.module.css";

interface IButton {
  type?: "solid" | "outline" | "ghost";
  onClick?: () => void;
  children?: React.ReactNode;
}

// 1.Reusable function to combine styles, we can move it to helpers/ or utils/
const combine = (...classNames: Array<string>) => classNames.join(" ");

export const Button: React.FC<IButton> = ({
  onClick,
  children,
  type = "solid",
}) => {
  // 2.IIFE to return style based on `type` prop
  const btnTypeStyle = (() => {
    switch (type) {
      case "solid":
        return style.solid;
      case "outline":
        return style.outline;
      case "ghost":
        return style.ghost;
    }
  })();

  const consolidatedClassName = combine(style.main, btnTypeStyle);

  return (
    // 3.Clean markup
    <button onClick={onClick} className={consolidatedClassName}>
      {children}
    </button>
  );
};
