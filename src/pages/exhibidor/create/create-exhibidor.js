import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./css/style.module.css";
import { ButtonModerna, CrudButton } from "../../../imports";
import { COLORS } from "../../../common/theme/theme";

export default function Exhibidor() {
  return (
    <Container>
      <ButtonModerna secondary>Crear Exhibidor</ButtonModerna>
      <Row className={style.navTable}>
        <Col>
          <Row>
            <Col className={style.nameExhibidorBox}>Nombre Exhibidor</Col>
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
