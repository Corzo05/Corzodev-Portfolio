import { ReactNode } from "react";
import style from "./Contactame.module.css";

type ContactameProps={
    children: ReactNode
}

export default function Contactame({children}: ContactameProps){
    return <div className={style.background} id="Contactame">{children}</div>
}