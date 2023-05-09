import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { COLORS } from "../theme/theme";
import style from "./css/style.module.css";
import { ButtonModerna } from "../../imports";

export default function ModalModerna({
  children,
  title,
  show,
  close,
  accept,
  buttons,
}) {
  const [loading, setLoading] = useState(false);
  const handleAccept = async (e) => {
    setLoading(true);
    await accept(e);
    setLoading(false);
  };

  return (
    <Modal show={show} onHide={close} dialogClassName={style.container}>
      <Modal.Header
        closeVariant="white"
        closeButton
        style={{ backgroundColor: COLORS.MODERNA_RED }}
      >
        <Modal.Title style={{ color: "white", fontWeight: "normal" }}>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
        {buttons && (
          <Row>
            <Col className={style.buttonGroup}>
              <ButtonModerna
                secondary
                disabled={loading}
                className={style.button}
                onClick={handleAccept}
              >
                Guardar
              </ButtonModerna>
              <ButtonModerna onClick={close} className={style.button}>
                Cancelar
              </ButtonModerna>
            </Col>
          </Row>
        )}
      </Modal.Body>
    </Modal>
  );
}
const closeButton = () => {
  return <div>X</div>;
};
