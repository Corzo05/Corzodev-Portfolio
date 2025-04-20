import { ReactNode } from "react";
import css from "./Card.module.css";

type CardProps = {
  children?: ReactNode;
  width?: string;
  height?: string;
  margin_top?: string;
  margin_right?: string;
  margin_bottom?: string;
  margin_left?: string;
  border?: string;
  padding?: string;
  id?: string;
  data_aos?: string;
};

export default function Card({
  children,
  width,
  height,
  margin_top,
  margin_right,
  margin_bottom,
  margin_left,
  border,
  padding,
  id,
  data_aos,
}: CardProps) {
  return (
    <div
      className={css.card}
      style={{
        width: `${width}`,
        height: `${height}`,
        marginTop: `${margin_top}`,
        marginRight: `${margin_right}`,
        marginBottom: `${margin_bottom}`,
        marginLeft: `${margin_left}`,
        border: `${border}`,
        padding: `${padding}`,
      }}
      id={id}
      data-aos={data_aos}
    >
      {children}
    </div>
  );
}

type CardBodyProps = {
  children?: ReactNode;
  id?: string;
};

export function CardBody({ children, id }: CardBodyProps) {
  return (
    <>
      <div className={css.cardBody} id={id}>{children}</div>
    </>
  );
}

type TitleProps = {
  title: string;
  fontSize?: string;
  color?: string;
  id?: string;
  data_aos?: string;
};

export function Title({ title, fontSize, color, id, data_aos }: TitleProps) {
  return (
    <h2
      className={css.title}
      style={{ fontSize: `${fontSize}`, color: `${color}` }}
      id={id}
      data-aos={data_aos}
    >
      {title}
    </h2>
  );
}

type SubTitleProps = {
  subTitle: string;
  fontSize?: string;
  color?: string;
  textCenter?: boolean;
  id?: string;
  data_aos?: string;
};

export function SubTitle({
  subTitle,
  fontSize,
  color,
  textCenter,
  id,
  data_aos,
}: SubTitleProps) {
  const centerTextValue = textCenter ? "center" : "left";

  return (
    <h4
      className={css.subTitle}
      style={{
        fontSize: `${fontSize}`,
        color: `${color}`,
        textAlign: centerTextValue,
      }}
      id={id}
      data-aos={data_aos}
    >
      {subTitle}
    </h4>
  );
}

type TextProps = {
  text: string;
  fontSize?: string;
  color?: string;
  interlineado?: string;
  widthContainer?: string;
  id?: string;
  data_aos?: string;
};

export function Text({ text, fontSize, color, interlineado, widthContainer, id, data_aos }: TextProps) {
  return (
    <p
      className={css.text}
      style={{
        fontSize: `${fontSize}`,
        color: `${color}`,
        lineHeight: `${interlineado}`,
        whiteSpace: "pre-line",
        width: `${widthContainer}`,
      }}
      id={id}
      data-aos={data_aos}
    >
      {text}
    </p>
  );
}
