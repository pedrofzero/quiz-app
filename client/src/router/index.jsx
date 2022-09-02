import React, { useState } from 'react'
import AppLayout from 'layout/appLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/login'
import Register from '../components/register'
import CreateQuiz from 'components/createquiz'
import { ProtectedRoute } from './ProtectedRoute'

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        <Route index
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />

                        <Route exact path="/home"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/createQuiz" element={<CreateQuiz />} />
                        <Route exact path="/register" element={<Register />} />
                    </Routes>
                </AppLayout>
            </BrowserRouter>
        </>
    )
}

export default Router

// <Route index element={<Home />} />
// <Route exact path="/home">
//     <Route index element={<Home />} />
// </Route>
// <Route exact path="/login">
//     <Route index element={<Login />} />
// </Route>
// <Route exact path="/createQuiz">
//     <Route index element={<CreateQuiz />} />
// </Route>
// <Route exact path="/register">
//     <Route index element={<Register />} />
// </Route>