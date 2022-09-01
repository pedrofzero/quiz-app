import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

  const navigate = useNavigate();
  const path = window.location.pathname;
  console.log(path)

  return (
    <>
      {path === '/login' &&
        <Box sx={{ border: '1px red solid', height: '50px', m: 0, p: 0 }}>
          <Stack direction='row' justifyContent='space-between' sx={{ m: 0, p: 0, height: '100%', alignItems: 'center', display: 'flex' }}>
            <h4 style={{ margin: 0, padding: 0 }}>Quiz app</h4>
            <Stack direction='row' spacing={4}>
              <h4 style={{ margin: 0, padding: 0 }}>New here?</h4>
              <Box sx={{ border: '1px solid black', borderRadius: '5px' }}>
                <h4 style={{ margin: 0, padding: 0 }} onClick={() => navigate('/register')}>Create an account</h4>
              </Box>
            </Stack>
          </Stack>
        </Box>
      }
      {path === '/register' &&
        <Box sx={{ border: '1px red solid', height: '50px', m: 0, p: 0 }}>
          <Stack direction='row' justifyContent='space-between' sx={{ m: 0, p: 0, height: '100%', alignItems: 'center', display: 'flex' }}>
            <h4 style={{ margin: 0, padding: 0 }}>Quiz app</h4>
            <Stack direction='row' spacing={4}>
              <h4 style={{ margin: 0, padding: 0 }}>Already have an account?</h4>
              <Box sx={{ border: '1px solid black', borderRadius: '5px' }}>
                <h4 style={{ margin: 0, padding: 0 }} onClick={() => navigate('/login')}>Log in</h4>
              </Box>
            </Stack>
          </Stack>
        </Box>
      }
      {path != '/register' && path != '/login' &&
        <Box sx={{ height: '50px', m: 0, p: 0, px: 4 }}>
          <Stack direction='row' justifyContent='space-between' sx={{ m: 0, p: 0, height: '100%', alignItems: 'center', display: 'flex' }}>
            <h4 style={{ margin: 0, padding: 0 }}>Quiz</h4>
            <Stack direction='row' spacing={8}>
              <h5 style={{ color: '#848282' }}>Browse</h5>
              <h5 style={{ color: '#848282' }}>My quizzes</h5>
            </Stack>
            <Stack direction='row' spacing={4}>
              <Button onClick={() => navigate('/createQuiz')} variant='contained' sx={{ backgroundColor: '#327490' }}>
                Create a quiz
              </Button>
            </Stack>
          </Stack>
        </Box>
      }
    </>
  )
}

const styles = {
  navbar: {
    height: '80px',
    border: '1px red solid',
  }
}

export default Header