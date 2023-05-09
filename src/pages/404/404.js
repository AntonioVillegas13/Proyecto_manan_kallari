import React, { useEffect } from "react";
import style from "./css/style.module.css";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function PageNotFound() {
  const location = useLocation().pathname;

  useEffect(() => {
    document.title = "Página no encontrada";
  }, [location]);

  return (
    <div className={style.container}>
      <div className={style.text}>
        <div>ERROR</div>
        <h1 className={style.h1}>404</h1>
        <hr />
        <div>Página no encontrada</div>
      </div>

      <div className={style.astronaut}>
        <img
          className={style.astronaut_img}
          src="http://desarrollo.nacion-digital.com/moderna_new/wp-content/uploads/2020/04/Empaques.png"
          // src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt=""
        />
      </div>
    </div>
  );
}
