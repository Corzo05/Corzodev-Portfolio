import { ReactNode } from "react";
import style from "./Proyectos.module.css";

type ProyectosProps={
    children: ReactNode
}

export default function Proyectos({children}: ProyectosProps){
    return <div className={style.background} id="Proyectos">{children}</div>
}