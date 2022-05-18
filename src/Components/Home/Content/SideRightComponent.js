import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export const SideRightComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [clics, setClics] = useState("");

    const traer = (prem) =>{
        setClics(prem)
        setShow(true)
    }

    return (
        <div className='sideRight-homs'>
            <div className='side-home'>
                <div className='side-home-p-s'>
                    <div className='side-home-p-2'>
                        <a onClick={() => traer({prem: "INSIGNIAS"})}>
                            <img src='../../../../assetp/SVG/oKzssK 2.svg' alt='notificaciones'></img>
                        </a>
                    </div>
                    <h4>INSIGNIAS</h4>
                </div>
                <div className='side-home-p-s'>
                    <div className='side-home-p-2'>
                        <a onClick={() => traer({prem: "PREMIOS"})} >
                            <img className='ins' src='../../../../assetp/SVG/Group.svg' alt='notificaciones'></img>
                        </a>
                    </div>
                    <h4>PREMIOS</h4>
                </div>
                <div className='side-home-p-s'>
                    <div className='side-home-p-2'>
                        <a onClick={() => traer({prem: "MURO"})}>
                            <img className='ins' src='../../../../assetp/SVG/Group 110.svg' alt='notificaciones'></img>
                        </a>
                    </div>
                    <h4>MURO</h4>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{clics.prem}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Aqui verar todos sobre {clics.prem}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
