import { VscLoading as Spinner } from "react-icons/vsc";
import style from "./css/style.module.css";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loadingText, setLoadingText] = useState("Cargando");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((loadingText) => {
        switch (loadingText) {
          case "Cargando":
            return "Cargando.";
          case "Cargando.":
            return "Cargando..";
          case "Cargando..":
            return "Cargando...";
          case "Cargando...":
            return "Cargando";
          default:
            return "Cargando";
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${style.spinner}`}>
      <Spinner className={style.spinning} size={50} />
      <a className={style.text}>{loadingText}</a>
    </div>
  );
}
