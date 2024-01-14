import style from "@/_styles/button.module.css";

interface IButton {
  type?: "solid" | "outline" | "ghost";
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<IButton> = ({
  onClick,
  children,
  type = "solid",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${style.main} ${
        type === "solid"
          ? style.solid
          : type === "outline"
          ? style.outline
          : type === "ghost"
          ? style.ghost
          : ""
      }`}
    >
      {children}
    </button>
  );
};
