"use client"
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Contactame from "./components/Contactame";
import Footer from "./components/Footer";
import Card, { CardBody, Title, SubTitle, Text } from "./components/Card";
import ContenedorGrid, {
  MiniCard,
  MiniCardBody,
} from "./components/ContenedorGrid";
import ContenedorRedes from "./components/ContenedorRedes";
import Button from "./components/Button";
import ModalProyectos from "./components/Modal";
import FormContact from "./components/Form";
import { useState, useEffect } from "react";

import "./page.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Vista() {

  useEffect(() =>{
    AOS.init({duration: 1000});
  } ,[])

  const [show, setShow] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");
  const [titleModal, setTitleModal] = useState("");

  const handleShow = (src: string, title: string) => {
    setIframeSrc(src);
    setTitleModal(title);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleLink = (link: string) => {
    window.location.href = `${link}`;
  };

  const texto_bienvenida =
    "Desarrollador Web Full Stack y de Sistemas de Información. Me apasiona la programación en general y el estudio de la misma de forma autodidacta. Además, poseo un nivel considerable de inglés adquirido de forma autodidacta. Éste es mi portafolio web que contiene información básica sobre mi, así como información de contacto, habilidades adquiridas hasta el momento y algunos de mis proyectos más relevantes hasta ahora.";

  const textoSobreMi = `Actualmente soy estudiante de Informática de 5to semestre y poseo previa experiencia en creación de Sistemas de Ventas, Sistemas de Gestión de notas académicas y Sitios web así como conocimientos y habilidades en lenguajes de programación para realizar dichos proyectos. 

    Me considero alguien honesto, sincero, muy reservado, de bajo perfil y de gustos sencillos, alguien con responsabilidad, compromiso con sus trabajos y comunicación asertiva y/o eficiente cuando de trabajo se trata.

    Pretendo ser mejor cada día con el autoaprendizaje sobre el mundo de la programación y aspiro a conseguir un trabajo estable ya sea remoto o presencial sobre mi carrera con la finalidad de obtener una remuneración económica y más experiencia para crecer como persona profesional y como programador.`;

  const textoProyecto1 = `Este programa consiste en un Sistema de Gestión empresarial y de Facturación para empresas de cualquier índole que cuenta con las funciones princiapales de: Compra y Venta de Productos y Emisión de Reportes de Compra y Venta.`;

  const textoProyecto2 = `Sitio Web dirigido a una Institución Educativa con información básica o de contacto de la Institución, además de poseer un Sistema de Gestión de Notas Académicas con Registro y Emisión de reportes de notas.`;

  const textoProyecto3 = `Mi Portafolio Web con información básica sobre mí, mis conocimientos o habilidades, proyectos mas destacados, métodos de contacto, Curriculum Vitae y links a algunas de mis redes sociales.`;

  const textoProyecto4 = `Sitio Web Dedicado a empresa de chocolates ficticia y adaptable a empresas de cualquier índole, con secciones de Inicio/Landing, Productos, Servicios, Contacto y Galería de Imágenes.`;

  return (
    <>
      <Header id="header" />
      <Inicio>
        <Card border="solid 2px #353333" id="card_inicio">
          <CardBody id="cardBody_home">
            <Title title="¿Cómo estás?" id="title_home" />
            <SubTitle subTitle="Soy José Corzo" id="subtitle_home" />
            <Text text={texto_bienvenida} id="text_home" />
          </CardBody>
        </Card>
        <img
          src="/img/laptop.png"
          alt="Foto de laptop"
          className="img_inicio"
        />
      </Inicio>
      <SobreMi>
        <div className="div_flex flex_column">
          <Title title="Sobre Mí" id="title_aboutMe" data_aos="fade-right"/>
          <div className="div_flex mt-3" id="container-card-image">
            <div id="container-cardText">
              <SubTitle
                subTitle="José David Corzo"
                textCenter
                id="subtitle_aboutMe"
                data_aos="fade-right"
              />
              <Card border="solid 2px #353333" padding="15px" id="card_aboutMe" data_aos="fade-right">
                <CardBody>
                  <Text text={textoSobreMi} id="text-aboutMe" />
                </CardBody>
              </Card>
            </div>
            <Card id="img_vector" data_aos="fade-left">
              <img
                src="/img/retrato.png"
                alt="Imagen Vectorial"
                className="img_vector"
              />
            </Card>
          </div>
        </div>
      </SobreMi>
      <Habilidades>
        <div
          className="div_flex flex_column"
          style={{ gap: "25%" }}
          id="container-titleHabilities"
        >
          <Title
            title="Lenguajes o herramientas con las que he trabajado"
            id="title_habilities"
            data_aos="fade-down-left"
          />
          <ContenedorGrid>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="Python"
                img="/img/python.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="Java"
                img="/img/java.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="JavaScript"
                img="/img/js.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="HTML5"
                img="/img/html.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="CSS"
                img="/img/css.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="Bootstrap"
                img="/img/boot.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="Flask"
                img="/img/flask.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="MySQL"
                img="/img/mysql.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="React"
                img="/img/react.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="PHP"
                img="/img/php.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="Git"
                img="/img/git.png"
                id="miniCardBody"
              />
            </MiniCard>
            <MiniCard border="2px solid #353333" id="mini" data_aos="fade-up">
              <MiniCardBody
                text="GitHub"
                img="/img/github.png"
                id="miniCardBody"
              />
            </MiniCard>
          </ContenedorGrid>
        </div>
      </Habilidades>
      <Proyectos>
        {/* Modal Proyectos */}
        <ModalProyectos
          show={show}
          handleClose={handleClose}
          titleModal={titleModal}
        >
          <iframe
            width="650px"
            height="350px"
            className="embed-responsive-item"
            src={iframeSrc}
          ></iframe>
        </ModalProyectos>

        <div
          className="div_flex flex_column"
          id="div_general_projects"
        >
          <Title title="Mis proyectos más relevantes" id="title_projects" data_aos="fade-right"/>
          <div className="div_flex mt-4 gap-5" id="div_projects">
            <Card border="2px solid #353333" padding="0" id="card_project1" data_aos="zoom-in">
              <CardBody>
                <img
                  src="./img/sistemaJava.png"
                  alt="Imagen Sistema de Ventas"
                  style={{
                    borderRadius: "26px",
                    marginBottom: "15px",
                    objectFit: "cover",
                  }}
                />
                <div className="content_project">
                  <SubTitle
                    subTitle="Sistema de Ventas y Facturación"
                    textCenter
                    id="subtitle_proyect"
                  />
                  <Text text={textoProyecto1} id="text_project" />
                  <div className="div_flex gap-3">
                    <Button
                      text="Demo"
                      onClick={() =>
                        handleShow(
                          "../video/videoSistemaDeVentas.mp4",
                          "Demo Sistema de Ventas y Facturación"
                        )
                      }
                      id="button_project"
                    />
                    <Button
                      text="Code"
                      onClick={() =>
                        handleLink(
                          "https://github.com/Corzo05/Sistema-de-Facturaci-n"
                        )
                      }
                      id="button_project"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card border="2px solid #353333" padding="0" id="card_project2" data_aos="zoom-in">
              <CardBody>
                <img
                  src="./img/cueto.png"
                  alt="Imagen Sitio Web"
                  style={{
                    borderRadius: "26px",
                    marginBottom: "15px",
                    objectFit: "cover",
                  }}
                />
                <div className="content_project">
                  <SubTitle
                    subTitle="Sitio Web Educativo"
                    textCenter
                    id="subtitle_proyect"
                  />
                  <Text text={textoProyecto2} id="text_project" />
                  <div className="div_flex gap-3">
                    <Button
                      text="Demo"
                      onClick={() =>
                        handleShow(
                          "../video/videoCueto.mp4",
                          "Demo Sitio Web Educativo"
                        )
                      }
                      id="button_project"
                    />
                    <Button
                      text="Code"
                      onClick={() =>
                        handleLink(
                          "https://github.com/Corzo05/SitioWeb-SistemaDeGesti-nDeNotas"
                        )
                      }
                      id="button_project"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card border="2px solid #353333" padding="0" id="card_project3" data_aos="zoom-in">
              <CardBody>
                <img
                  src="./img/portfolio.png"
                  alt="Portafolio Web"
                  style={{
                    borderRadius: "26px",
                    marginBottom: "15px",
                    objectFit: "cover",
                  }}
                />
                <div className="content_project">
                  <SubTitle
                    subTitle="Portafolio Web"
                    textCenter
                    id="subtitle_proyect"
                  />
                  <Text text={textoProyecto3} id="text_project" />
                  <div className="div_flex gap-3">
                    <Button text="Demo" id="button_projectMargin" onClick={() => handleLink("https://corzodev-portfolio.vercel.app/")}/>
                    <Button text="Code" id="button_projectMargin" onClick={() => handleLink("https://github.com/Corzo05/Corzodev-Portfolio")}/>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="div_flex mt-5 gap-5">
            <Card border="2px solid #353333" padding="0" id="card_project4" data_aos="zoom-in">
              <CardBody>
                <img
                  src="./img/dulcisVita.png"
                  alt="Imagen Sitio Web"
                  style={{
                    borderRadius: "26px",
                    marginBottom: "15px",
                    objectFit: "cover",
                  }}
                />
                <div className="content_project">
                  <SubTitle
                    subTitle="Sitio Web Chocolatería"
                    textCenter
                    id="subtitle_proyect"
                  />
                  <Text text={textoProyecto4} id="text_project" />
                  <div className="div_flex gap-3">
                    <Button
                      text="Demo"
                      onClick={() =>
                        handleLink(
                          "https://sitio-web-responsive-chocolater-a-dulcis-vita.vercel.app/index.html"
                        )
                      }
                      id="button_projectMargin"
                    />
                    <Button
                      text="Code"
                      onClick={() =>
                        handleLink(
                          "https://github.com/Corzo05/Sitio-Web-Responsive-Chocolater-a-Dulcis-Vita"
                        )
                      }
                      id="button_projectMargin"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Proyectos>
      <Contactame>
        <div className="div_flex flex_column" id="container_general_contact">
          <Title title="Contáctame" id="title_contact" data_aos="fade-down"/>
          <div className="div_flex flex_row gap-5 p-3" id="container_contact">
            <Card id="card_contact" data_aos="fade-right">
              <FormContact />
            </Card>
            <ContenedorRedes id="containerRedes" data_aos="fade-left"/>
            <div
              className="div_flex flex_column alignItemsCenter">
              <Text
                text="Siéntete libre de contactarme cuando quieras, ya sea para dudas, ofertas laborales o colaboración en proyectos :)"
                id="text_contact"
                data_aos="fade-left"
              />
              <img
                src="../img/contacto.png"
                alt="Imagen Teléfono"
                className="imgTelf"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </Contactame>
      <Footer id="Footer"/>
    </>
  );
}