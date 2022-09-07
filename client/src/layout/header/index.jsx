import React, { useEffect } from 'react'
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

  useEffect(() => {
    console.log(size)
  }, [size])

  return (
    <>

      {/* Login */}
      {path === '/login' &&
        <Box sx={{ height: '50px', m: 0, p: 0, px: '2em' }}>
          <Stack direction='row' justifyContent='space-between' sx={{ m: 0, p: 0, height: '100%', alignItems: 'center', display: 'flex' }}>
            <h5 style={{ margin: 0, padding: 0 }}>Quizy</h5>
            {size < 600 ?
              <>
                <MenuIcon sx={{ zIndex: 10 }} onClick={() => setMenuOpen(!menuOpen)} />
              </>
              :
              <>
                <h5 style={{ margin: 0, padding: 0, }}>Don't have an account? <span style={{ color: '#7c7ad6' }}>Create account</span> </h5>
              </>
            }
          </Stack>
        </Box>
      }

      {/* Register */}
      {path === '/register' &&
        <Box sx={{ height: '50px', m: 0, p: 0, px: '2em' }}>
          <Stack direction='row' justifyContent='space-between' sx={{ m: 0, p: 0, height: '100%', alignItems: 'center', display: 'flex' }}>
            <h5 style={{ margin: 0, padding: 0 }}>Quiz app</h5>
            <Stack direction='row' spacing={4} sx={{ display: 'flex', alignItems: 'center' }}>
              {size < 600 ?
                <>
                  <MenuIcon sx={{ zIndex: 10 }} onClick={() => setMenuOpen(!menuOpen)} />
                </>
                :
                <>
                  <h5 style={{ margin: 0, padding: 0 }}>Already have an account? <span style={{ color: '#7c7ad6' }}>Log in</span></h5>
                </>
              }
            </Stack>
          </Stack>
        </Box>
      }

      {/* Logged in */}
      {path !== '/register' && path !== '/login' &&
        <Box sx={{ height: '50px', m: 0, p: 0, px: `${size < 600 ? '1em' : '4em'}` }}>
          <Stack direction='row' justifyContent='space-between' sx={{ m: 0, p: 0, height: '100%', alignItems: 'center', display: 'flex' }}>
            <h5 onClick={() => navigate('/home')} style={{ margin: 0, padding: 0 }}>Quizy</h5>
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