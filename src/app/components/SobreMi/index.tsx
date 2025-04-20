import { ReactNode } from "react";
import style from "./SobreMi.module.css";

type SobreMiProps={
    children: ReactNode
}

export default function SobreMi({children}: SobreMiProps){
    return <div className={style.background} id="SobreMi">{children}</div>
}