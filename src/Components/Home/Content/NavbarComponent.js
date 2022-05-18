import React from 'react'
import { Nav } from 'react-bootstrap';

export const NavbarComponent = () => {
    return (
        <div className='contenet-nav'>
            <div className='content-search'>
                <input
                    type="text"
                    placeholder='BUSCAR'
                />
                <button className='butos'><img src='../../../../assetp/SVG/Group 67.svg'></img></button>
            </div>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <div className='perfil'>
                        <img src="../../../../assetp/IMG/Mask Group.png" alt="perfil"></img>
                        <div className='content-nav-perfil'>
                            <h4>2000 puntos</h4>
                            <div className='flech'>
                                <div className='circulo'></div>
                            </div>
                        </div>
                    </div>
                </Nav.Item>
            </Nav>
        </div>
    )
}
