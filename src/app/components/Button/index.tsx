import style from "./Button.module.css";

type ButtonProps = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  borderRadius?: string;
  margin?: string;
  id?: string;
  onClick?: () => void
};

export default function Button({
  text,
  backgroundColor,
  textColor,
  padding,
  borderRadius,
  margin,
  id,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={style.button}
      style={{
        backgroundColor: `${backgroundColor}`,
        color: `${textColor}`,
        padding: `${padding}`,
        borderRadius: `${borderRadius}`,
        margin: `${margin}`,
      }}
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
}
