import React from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { logout } from 'helpers/api'
import './index.css'

const Menu = ({ menuOpen, setMenuOpen }) => {

    const navigate = useNavigate();

    const goToHome = async () => {
        await navigate('/')
        setMenuOpen(false)
    }

    const goToCreateQuiz = async () => {
        await navigate('/createquiz');
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
                    <li>Browse</li>
                    <li onClick={() => goToCreateQuiz()}>Create a quiz</li>
                    <li>My quizes</li>
                    <li>Settings</li>
                    <li onClick={() => handleLogout()}>Logout</li>
                </ul>
            </nav>
        </Box>
    )
}


export default Menu