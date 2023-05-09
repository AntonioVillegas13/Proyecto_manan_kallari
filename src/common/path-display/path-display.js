import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { COLORS } from "../theme/theme";
import { FaChevronRight as Separator } from "react-icons/fa";
import { ROUTES } from "../../imports";

export default function PathDisplay() {
  const location = useLocation().pathname;
  const path = location.substring(1).split("/");
  const directory = path[0];
  const [right, setRight] = useState("");

  useEffect(() => {
    const handleTitleChange = () => {
      // Llamar a la función que deseas aquí
      console.log("El título de la página ha cambiado");
    };

    document.addEventListener("titlechange", handleTitleChange);

    if (document.title === "Moderna") {
      if (directory === "variables") {
        const s = ROUTES.VARIABLES.find((element) => {
          return element.link.includes(path[1]);
        });
        setRight(s?.name);
        document.title = s?.name;
      }
    } else {
      setRight(document.title);
    }
    return () => {
      document.removeEventListener("titlechange", handleTitleChange);
    };
  }, []);
  useEffect(() => {
    console.log(right);
  });
  return (
    <div>
      {!right?.includes("no encontrada") && (
        <div
          style={{
            fontSize: 13,
            margin: "0.5rem 1rem 0rem",
            color: COLORS.TEXT_INFO_COLOR,
          }}
        >
          {directory.charAt(0).toUpperCase() + directory.slice(1)}
          <Separator style={{ margin: "-0.1rem 0.1rem 0rem" }} />
          {right}
        </div>
      )}
    </div>
  );
}
