import { ReactNode } from "react";
import style from "./ContenedorGrid.module.css";

type ContenedorGridProps = {
  children: ReactNode;
};

export default function ContenedorGrid({ children }: ContenedorGridProps) {
  return <div className={style.containerGrid} id="container_grid">{children}</div>;
}

type MiniCardProps = {
  children?: ReactNode;
  border?: string;
  id?: string;
  data_aos?: string;
};

export function MiniCard({ children, border, id, data_aos }: MiniCardProps) {
  return (
    <div className={style.card} style={{ border: `${border}` }} id={id} data-aos={data_aos}>
      {children}
    </div>
  );
}

type MiniCardBodyProps = {
  text: string;
  img?: string;
  widthImage?: string;
  heightImage?: string;
  id?: string;
  data_aos?: string;
};

export function MiniCardBody({
  text,
  img,
  widthImage,
  heightImage,
  id,
  data_aos,
}: MiniCardBodyProps) {
  return (
    <div className={style.cardBody} id={id} data-aos={data_aos}>
      <img
        className={style.img}
        src={img}
        alt="Imagen no encontrada"
        style={{ width: `${widthImage}`, height: `${heightImage}` }}
      />
      <aside className={style.line}></aside>
      <h4 className={style.text}>{text}</h4>
    </div>
  );
}
