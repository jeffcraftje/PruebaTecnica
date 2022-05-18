import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

export const CaruselComponent = (date) => {
    const [da, setDa] = useState(date)

    return (
        <div className='caruss'>
            <div className='cons'>
                <h3>ENTRENAMIENTOS</h3>
                <div className='lineas'></div>
            </div>
            <Carousel>
                <Carousel.Item>
                    <div className='carus'>
                        <div className='carus-text'>
                            <h2>{da.date.one.name}</h2>
                            <h3>{da.date.one.Profesion}</h3>
                        </div>
                        <div className='carus-s'>
                            <div className='carus-s-1'></div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carus'>
                        <div className='carus-text'>
                            <h2>{da.date.two.name}</h2>
                            <h3>{da.date.two.Profesion}</h3>
                        </div>
                        <div className='carus-s'>
                            <div className='carus-s-1'></div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className='cons'>
                <div className='lineas-1'></div>
            </div>
        </div>
    )
}
