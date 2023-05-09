import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./css/style.module.css";
import { ButtonModerna, Carrusel, CrudButton, Modal } from "../../../imports";
import { COLORS } from "../../../common/theme/theme";

export default function Planograma() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <ButtonModerna
        secondary
        className={style.buttonImage}
        onClick={() => setOpenModal(true)}
      >
        Subir Planograma
      </ButtonModerna>
      <Modal
        show={openModal}
        title="Vista Planograma"
        close={() => setOpenModal(false)}
      >
        <Carrusel />
      </Modal>

      <Row>
        <Col>
          <Row className={style.navTable}>
            <Col>Grupo Clientes</Col>
            <Col>Categoría</Col>
            <Col>Planograma</Col>
          </Row>

          <Row className={style.navContent}>
            <Col>Mayorista</Col>
            <Col>Harinas</Col>
            <Col>
              <div className={style.buttonBox}>
                <CrudButton background={COLORS.MODERNA_YELLOW} size={30} edit />
                <CrudButton background={COLORS.MODERNA_YELLOW} size={30} del />
                <CrudButton
                  background={COLORS.MODERNA_YELLOW}
                  size={30}
                  view
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
