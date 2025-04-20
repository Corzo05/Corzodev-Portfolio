import { ReactNode } from "react";
import style from "./Inicio.module.css";

type InicioProps={
    children: ReactNode
}

export default function Inicio({children}: InicioProps){
    return <div className={style.background} id="Inicio">{children}</div>
}