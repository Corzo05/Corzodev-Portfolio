import style from "./ContenedorRedes.module.css";

type RedesProps={
  id?: string
  data_aos?: string
}

export default function ContenedorRedes({id, data_aos}:RedesProps) {
  return (
    <>
      <div className={style.containerRedes} id={id} data-aos={data_aos}>
        <a href="https://github.com/Corzo05" className={style.links}>
          <img className={style.img} src="/img/github.png" alt="GitHub" />
        </a>
        <a href="https://www.facebook.com/Corzo05" className={style.links}>
          <img className={style.img} src="/img/face.png" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/jos%C3%A9-corzo-b7804533b/" className={style.links}>
          <img className={style.img} src="/img/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.freelancer.es/u/Corzo05?frm=Corzo05&sb=t" className={style.links}>
          <img className={style.img} src="/img/free.png" alt="Freelancer" />
        </a>
      </div>
    </>
  );
}
