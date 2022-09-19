import React, { useState } from 'react'
import AppLayout from 'layout/appLayout'
import { ProtectedRoute } from './ProtectedRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/login'
import Register from '../components/register'
import CreateQuiz from 'components/createquiz'
import Quizes from 'components/quizes'
import PlayQuiz from 'components/playquiz'
import Profile from 'components/profile'

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />

                        <Route exact path="/" element={
                            <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                        }
                        />

                        <Route exact path="/home" element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                        />

                        <Route exact path="/profile" element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
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

                        <Route exact path="/play/:quizId" element={
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