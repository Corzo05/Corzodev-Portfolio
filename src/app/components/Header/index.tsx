import { useState, useEffect } from "react";
import style from "./Header.module.css";

type HeaderProps = {
  id?: string;
};

export default function Header({ id }: HeaderProps) {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 0);
    };

    window.addEventListener("load", function () {
      setShowHeader(true);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${style.header} ${showHeader ? style.showHeader : ""}`}
      id={id}
    >
      <LogoTitulo />
      <ButtonList />
    </header>
  );
}

export function LogoTitulo() {
  const [moveGif, setMoveGif] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const staticGif = "/img/gifDetenido.png";
  const animatedGif = "/img/logoGif.gif";

  return (
    <div className={style.logoTitulo}>
      <label htmlFor="" onClick={() => handleClick()} id="label_menu">
        <img src="/img/menu.png" alt="icon_menu" className={style.icon_menu}/>
      </label>
      <Menu showMenu={showMenu} />
      <a href="#" className={style.AlogoTitle}>
        <img
          src={moveGif ? animatedGif : staticGif}
          onMouseEnter={() => setMoveGif(true)}
          onMouseLeave={() => setMoveGif(false)}
          alt="Logo Corzo Dev"
        />
        <h1>Corzo Dev</h1>
      </a>
    </div>
  );
}

export function ButtonList() {
  return (
    <div className={style.buttonList} id="buttonList">
      <a href="#Inicio">Inicio</a>
      <a href="#SobreMi">Sobre mí</a>
      <a href="#Habilidades">Habilidades</a>
      <a href="#Proyectos">Proyectos</a>
      <a href="#Contactame">Contáctame</a>
      <a href="./CV_joseCorzo.pdf" download>
        CV
      </a>
    </div>
  );
}

type MenuProps = {
  showMenu?: boolean;
};

export function Menu({ showMenu }: MenuProps) {
  return (
    <div className={style.menu} id="menu">
      {showMenu ? (
          <>
            <a href="#Inicio">Inicio</a>
            <a href="#SobreMi">Sobre mí</a>
            <a href="#Habilidades">Habilidades</a>
            <a href="#Proyectos">Proyectos</a>
            <a href="#Contactame">Contáctame</a>
            <a href="./CV_joseCorzo.pdf" download>CV</a>
          </>
        ) : ("")
      }
    </div>
  );
}
