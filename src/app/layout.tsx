import { FC, PropsWithChildren } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nunito} from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata = {
    title: "Portafolio Web | Corzo Dev",
    description: "Mi Portafolio Web personal con información sobre mí, métodos de contacto, proyectos realizados y habilidades adquiridas.",
    icons: "/img/iconPagina.png",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body id="body" className={nunito.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
