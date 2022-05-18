import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { CaruselComponent } from './Content/CaruselComponent'
import { NavbarComponent } from './Content/NavbarComponent'
import { SideLeftComponent } from './Content/SideLeftComponent'
import { SideRightComponent } from './Content/SideRightComponent'

const HomeComponent = () => {
  const [data, setData] = useState({
    one: {
      name: "German Lopez",
      Profesion: "Enfermero"
    },
    two: {
      name: "Jefferson Garcia",
      Profesion: "Desarrollador web"
    }

  })
  const [dat, setDat] = useState(data.one)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cambio = (name) => {
    if (name !== "German Lopez") {
      setDat(data.two)
      setShow(false)
    } else {
      setDat(data.one)
      setShow(false)
    }
  }

  return (
    <div className='content-home'>
      <div className='nav-bar'>
        <NavbarComponent />
      </div>
      <div className='content-home-root'>
        <div className='content-user'>
          <h1 onClick={handleShow}>{dat.name}</h1>
          <h3>{dat.Profesion}</h3>
        </div>
        <div className='fos'>
          <div className='con-home-r'>
            <div className='sideLeft-home'>
              <SideLeftComponent />
            </div>
            <div className='contentBody-home'>
              <CaruselComponent date={data} />
            </div>
          </div>
          <div className='sideRight-home'>
            <SideRightComponent />
          </div>
        </div>
      </div>
      <div className='footers'>
        <a href=''>CONTACTO</a>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Usuarios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className='content-user-1'>
              <h1 onClick={() => cambio(data.one.name)}>{data.one.name}</h1>
              <h3>{data.one.Profesion}</h3>
            </div>
            <div className='content-user-1'>
              <h1 onClick={() => cambio(data.two.name)}>{data.two.name}</h1>
              <h3>{data.two.Profesion}</h3>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default HomeComponent