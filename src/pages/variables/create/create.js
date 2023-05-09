import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { addTodo } from "../../../service/FormSrv";

export default function Create() {
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      nombre: nombre,
      celular: celular,
      correo: correo,
    });
    console.log("nombre", nombre);
    console.log("correo", correo);
    console.log("celular", celular);
  };

  return (
    <Container style={{ paddingTop: "2rem" }}>
      <div class="text-center">
        <h1 class="display-2">REGISTRATE AQUI!!!!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre:</label>
          <input
            aria-describedby="emailHelp"
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Correo electrónico:</label>
          <input
            type="email"
            aria-describedby="emailHelp"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Celular de contacto:</label>
          <input
            type="Numeric"
            value={celular}
            onChange={(event) => setCelular(event.target.value)}
          />
        </div>

        <button type="submit" value="Submit">
          Enviar
        </button>
      </form>

      {/* <form onSubmit={handleSubmit}>
        <div className="col-auto">
          <label className="form-label">nombre: </label>
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <label>
          Numero celular:
          <input
            type="text"
            value={celular}
            onChange={(event) => setCelular(event.target.value)}
          />
        </label>

        <label>
          Correo Electronico:
          <input
            type="text"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
      <p>{}</p> */}
    </Container>
  );
}
