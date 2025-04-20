import style from "./Footer.module.css";

type FooterProps={
  id?: string
}

export default function Footer({id}:FooterProps) {
  return (
    <footer className={style.footer} id={id}>
      <LogoTitulo />
    </footer>
  );
}

export function LogoTitulo(){
  return(
    <div className={style.logoTitulo}>
      <img src="/img/logo.png" alt="Logo Corzo Dev"/>
      <h1>Copyright ® 2025, Corzo Dev</h1>
    </div>
  );
}