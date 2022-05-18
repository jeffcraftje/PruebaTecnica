import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from '../Components/Home/HomeComponent'
import { App } from '../Components/Tutorial/App'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='home' element={<HomeComponent/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter