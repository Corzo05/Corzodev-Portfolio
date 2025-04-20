import { ReactNode } from "react";
import style from "./Habilidades.module.css";

type HabilidadesProps={
    children: ReactNode
}

export default function Habilidades({children}: HabilidadesProps){
    return <div className={style.background} id="Habilidades">{children}</div>
}