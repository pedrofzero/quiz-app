import React, { useState } from 'react'
import AppLayout from 'layout/appLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/login'
import Register from '../components/register'
import CreateQuiz from 'components/createquiz'

const Router = () => {

    const [token, setToken] = useState();

    return (
        <>
            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route exact path="/home">
                            <Route index element={<Home />} />
                        </Route>
                        <Route exact path="/login">
                            <Route index element={<Login />} />
                        </Route>
                        <Route exact path="/createQuiz">
                            <Route index element={<CreateQuiz />} />
                        </Route>
                        <Route exact path="/register">
                            <Route index element={<Register />} />
                        </Route>
                    </Routes>
                </AppLayout>
            </BrowserRouter>
        </>
    )
}

export default Router