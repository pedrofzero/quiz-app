import React, { useState } from 'react'
import AppLayout from 'layout/appLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/login'
import Register from '../components/register'
import CreateQuiz from 'components/createquiz'
import Quizes from 'components/quizes'
import { ProtectedRoute } from './ProtectedRoute'
import PlayQuiz from 'components/playquiz'

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        
                        <Route exact path="/register" element={<Register />} />
                        
                        <Route exact path="/" element={
                            <Home />
                        }
                        />
                        <Route exact path="/home" element={
                            <Home />
                        }
                        />
                        <Route exact path="/createquiz" element={
                            <ProtectedRoute>
                                <CreateQuiz />
                            </ProtectedRoute>
                        }
                        />
                        <Route exact path="/quizes/:username" element={
                            <ProtectedRoute>
                                <Quizes />
                            </ProtectedRoute>
                        }
                        />
                        <Route exact path="/play/:id" element={
                            <ProtectedRoute>
                                <PlayQuiz />
                            </ProtectedRoute>
                        }
                        />

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