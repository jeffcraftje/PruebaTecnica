import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const App = () => {
    const [rhf, setRhf] = useState("progres-false")
    const [rhf1, setRhf1] = useState("progres-false")
    const [rhf2, setRhf2] = useState("progres-false")
    const [cambis, setCambis] = useState("progres-1-2")
    const [cambis1, setCambis1] = useState("progres-1-3")
    const [cambis2, setCambis2] = useState("progres-1-4")
    const [numero, setNumero] = useState(0)
    const [video1, setVideo1] = useState("videos")
    const [video2, setVideo2] = useState("videos-1")
    const [video3, setVideo3] = useState("videos-1")
    const [video4, setVideo4] = useState("videos-1")
    let navigate = useNavigate();
    const cambio = () => {
        if (video4 !== "videos") {
            if (numero === 0) {
                setRhf("progres-1-1-2")
                setNumero(1)
                setCambis("progres-1")
                setVideo1("videos-1")
                setVideo2("videos")
            }
            if (numero === 1) {
                setRhf1("progres-1-1-3")
                setNumero(2)
                setCambis1("progres-1")
                setVideo2("videos-1")
                setVideo3("videos")
            }
            if (numero === 2) {
                setRhf2("progres-1-1-4")
                setNumero(3)
                setCambis2("progres-1")
                setVideo3("videos-1")
                setVideo4("videos")
            }
        } else {
            navigate("/home")
        }

    }
    const omitir = () => {
        setRhf("progres-1-1-2")
        setRhf1("progres-1-1-3")
        setRhf2("progres-1-1-4")
        setCambis("progres-1")
        setCambis1("progres-1")
        setCambis2("progres-1")
        setVideo1("videos-1")
        setVideo2("videos-1")
        setVideo3("videos-1")
        setVideo4("videos")
    }
    return (
        <div className='content'>
            <div className='sideLeft'>
                <div className='title'>
                    <h2>ENTRENAMIENTO</h2>
                </div>
                <div className='progres'>
                    <div className='progres-1-1'></div>
                    <div className='progres-1'>
                        <h1>1</h1>
                    </div>
                    <div className={rhf}></div>
                    <div className={cambis}>
                        <h1>2</h1>
                    </div>
                    <div className={rhf1}></div>
                    <div className={cambis1}>
                        <h1>3</h1>
                    </div>
                    <div className={rhf2}></div>
                    <div className={cambis2}>
                        <h1>4</h1>
                    </div>
                </div>
            </div>
            <div className='sideRight'>
                <div className='sideRight-f'>
                    <div className='img-s'>
                        <img src="../assetp/IMG/Logo Health Academy.png" alt='logo'></img>
                    </div>
                    <div className={video1}>
                        <iframe src="https://www.youtube.com/embed/3gzcV37ZAXE?autoplay" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                    <div className={video2}>
                        <iframe width="1309" height="489" src="https://www.youtube.com/embed/pLBuFxMYkx8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                    <div className={video3}>
                        <iframe width="1309" height="489" src="https://www.youtube.com/embed/WngXDkS5lGU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                    <div className={video4}>
                        <iframe width="1309" height="489" src="https://www.youtube.com/embed/Qw9mb_ln7ks" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                    <div className='bottons'>
                        <button className='button-1' onClick={omitir}>OMITIR</button>
                        <div className='bus'>
                            <button className='button-2' onClick={cambio}>SIGUIENTE</button>
                            <div className='bus-s'></div>
                        </div>
                    </div>
                </div>
                <img src="../assetp/IMG/fondo.jpg" alt='fondo'></img>
            </div>
        </div>
    )
}