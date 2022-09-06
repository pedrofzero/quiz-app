import React from 'react'
import useWindowSize from 'hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Button } from '@mui/material'
import { logout } from 'helpers/api';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ menuOpen, setMenuOpen }) => {

  const navigate = useNavigate();
  const path = window.location.pathname;
  const size = useWindowSize();

  const handleLogout = async () => {
    await logout();
    navigate('/login')
  }

  return (
    <>

      {/* Login */}
      {path === '/login' &&
        <Box sx={{ height: '50px', m: 0, p: 0 }}>
          <Stack direction='row' justifyContent='space-between' sx={{ m: 0, p: 0, height: '100%', alignItems: 'center', display: 'flex' }}>
            <h4 style={{ margin: 0, padding: 0 }}>Quiz app</h4>
            <Stack direction='row' spacing={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ margin: 0, padding: 0, }}>New here?</h4>
              <Box sx={{ border: '1px solid black', height: '50px', width: '220px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h4 style={{ margin: 0, padding: 0, cursor: 'pointer' }} onClick={() => navigate('/register')}>Create an account</h4>
              </Box>
            </Stack>
          </Stack>
        </Box>
      }

      {/* Register */}
      {path === '/register' &&
        <Box sx={{ border: '1px red solid', height: '50px', m: 0, p: 0 }}>
          <Stack direction='row' justifyContent='space-between' sx={{ m: 0, p: 0, height: '100%', alignItems: 'center', display: 'flex' }}>
            <h4 style={{ margin: 0, padding: 0 }}>Quiz app</h4>
            <Stack direction='row' spacing={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ margin: 0, padding: 0 }}>Already have an account?</h4>
              <Box sx={{ border: '1px solid black', borderRadius: '5px', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h4 style={{ margin: 0, padding: 0, cursor: 'pointer' }} onClick={() => navigate('/login')}>Log in</h4>
              </Box>
            </Stack>
          </Stack>
        </Box>
      }

      {/* Logged in */}
      {path !== '/register' && path !== '/login' &&
        <Box sx={{ height: '50px', m: 0, p: 0, px: 4 }}>
          <Stack direction='row' justifyContent='space-between' sx={{ m: 0, p: 0, height: '100%', alignItems: 'center', display: 'flex' }}>
            <h4 onClick={() => navigate('/home')} style={{ margin: 0, padding: 0 }}>Quizy</h4>
            {size > 900 ?
              <>
                <Stack direction='row' spacing={8}>
                  <h5 style={{ color: '#848282' }}>Browse</h5>
                  <h5 onClick={() => navigate(`/quizes/${localStorage.getItem('user')}`)} style={{ color: '#848282' }}>My quizzes</h5>
                  <h5 onClick={() => handleLogout()} style={{ color: '#848282' }}>Logout</h5>
                </Stack>
                <Stack direction='row' spacing={4}>
                  <Button onClick={() => navigate('/createQuiz')} variant='contained' sx={{ backgroundColor: '#327490' }}>
                    Create a quiz
                  </Button>
                </Stack>
              </>
              :
              <>
                <Stack direction='row' spacing={8}>
                  <MenuIcon sx={{ zIndex: 10 }} onClick={() => setMenuOpen(!menuOpen)} />
                </Stack>
              </>

            }

          </Stack>
        </Box>
      }
    </>
  )
}



export default Header