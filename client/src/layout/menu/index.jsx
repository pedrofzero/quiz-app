import React from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from 'helpers/api'
import './index.css'

const Menu = ({ menuOpen, setMenuOpen }) => {

    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    const goToHome =  () => {
        navigate('/')
        setMenuOpen(false)
    }

    const goToLogin = () => {
        navigate('/login')
        setMenuOpen(false)
    }

    const goToMyQuizes = async () => {
        await navigate(`/profile`)
        setMenuOpen(false)
    }

    const goToRegister = () => {
        navigate('/register')
        setMenuOpen(false)
    }

    const goToCreateQuiz = () => {
        navigate('/createquiz');
        setMenuOpen(false)
    }

    const handleLogout = async () => {
        await logout();
        setMenuOpen(false)
        navigate('/login')
    }

    return (
        <Box className={`menu ${menuOpen && 'open'}`}>
            <nav>
                <ul>
                    <li onClick={() => goToHome()}>Home</li>
                    {!user ? 
                    <>
                    <li>Browse</li>
                    <li onClick={() => goToLogin()}>Login</li>
                    <li onClick={() => goToRegister()}>Register</li>
                    </>
                    :
                    <>
                    <li>Browse</li>
                    <li onClick={() => goToMyQuizes()}>My quizes</li>
                    <li onClick={() => goToCreateQuiz()}>Create quiz</li>
                    <li>Settings</li>
                    <li onClick={() => handleLogout()}>Logout</li>
                    </>    
                    
                }
                    
                </ul>
            </nav>
        </Box>
    )
}


export default Menu