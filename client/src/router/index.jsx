import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/login'
import Register from '../components/register'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route exact path="/home">
                        <Route index element={<Home />} />
                    </Route>
                    <Route exact path="/login">
                        <Route index element={<Login />} />
                    </Route>
                    <Route exact path="/register">
                        <Route index element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>,
        </>
    )
}

export default Router