import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import style from "./css/style.module.css"
import { ButtonModerna, Modal } from '../../imports';

export default function Carrusel() {

    const imagesCats = [
        "https://ca-times.brightspotcdn.com/dims4/default/83dc849/2147483647/strip/true/crop/2048x1108+0+0/resize/1200x649!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001",
        "https://s1.eestatic.com/2021/06/30/curiosidades/mascotas/592951586_193746688_1024x576.jpg",
        "https://dam.muyinteresante.com.mx/wp-content/uploads/2022/07/cosas-mas-raras-que-hacen-los-gatos-1-770x449.jpg"
    ]

    const [openModal, setOpenModal] = useState(false);

    return (
        <Container  >
            {/* <ButtonModerna onClick={()=>setOpenModal(true)}>Abrir modal</ButtonModerna>
            <Modal show={openModal} close={()=>setOpenModal(false)}>
                <Carrusel/>
            </Modal> */}
            <Carousel className={style.imageBox}>
                {imagesCats?.map((planogramaImage, id) => {
                    return (
                        <Carousel.Item key={id}>
                            <img
                                className="d-block w-100"
                                src={planogramaImage}
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </Container>
    )
}
