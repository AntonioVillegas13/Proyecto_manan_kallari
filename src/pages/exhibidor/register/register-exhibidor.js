import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./css/style.module.css";
import { CrudButton } from "../../../imports";
import { COLORS } from "../../../common/theme/theme";

export default function Newexhibidor() {
  return (
    <Container>
      <Row>
        <Col>
          <Row className={style.navTable}>
            <Col>ID</Col>
            <Col>Nombre</Col>
            <Col>Sucursal</Col>
            <Col>Tipo</Col>
            <Col>Mes</Col>
            <Col>Año</Col>
            <Col>Botones</Col>
          </Row>
          <Row className={style.navContent}>
            <Col>ID</Col>
            <Col>Nombre</Col>
            <Col>Sucursal</Col>
            <Col>Tipo</Col>
            <Col>Mes</Col>
            <Col>Año</Col>
            <Col>
              <div className={style.buttonBox}>
                <CrudButton background={COLORS.MODERNA_YELLOW} size={30} edit />
                <CrudButton background={COLORS.MODERNA_YELLOW} size={30} del />
                <CrudButton background={COLORS.MODERNA_YELLOW} size={30} view />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
