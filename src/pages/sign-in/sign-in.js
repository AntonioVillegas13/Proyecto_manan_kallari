import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./css/style.css";
import { ButtonModerna, ICON_MODERNA_RED } from "../../imports";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../common/checkbox/checkbox";

export default function Login({ setUserSession }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("acceder");
    document.title = "Iniciar Sesión";
  }, []);

  return (
    <Container fluid className="cuerpoWeb">
      <div id="container">
        <div className="leftPanel">
          <img
            src="https://responsabilidadsocialquito.com.ec/wp-content/uploads/2019/07/galeria-foto-4.jpg"
            alt="Moderna"
            className="imageInit"
          />
        </div>

        <div className="rightPanel">
          <img
            src={ICON_MODERNA_RED}
            alt="Icono Moderna"
            style={{ width: "100%", height: "100px" }}
          />
          <p className="information">Sistema de Auditoría</p>
          <div className="control">
            <ButtonModerna
              onClick={() => {
                console.log("Hola peter dijo el Dr. Octopus :v");
                setUserSession({ name: "John Doe" });
              }}
            >
              Iniciar Sesión
            </ButtonModerna>
          </div>
          <Checkbox />
        </div>
      </div>
    </Container>
  );
}
