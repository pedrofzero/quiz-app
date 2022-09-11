import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { api, createQuiz } from 'helpers/api'
import { Box, Button, Grid, Container, Stack } from '@mui/material';
import useWindowSize from 'hooks/useWindowSize';

const Home = () => {

  const size = useWindowSize();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    api.post(`quiz/getQuizByNum`, {
      amount: 6
    })
      .then((response => {
        console.log(response)
        setQuizes(response.data)
        setLoading(false)
      }))
  }, [])


  return (
    <div>
      <Box sx={{ paddingTop: '10vh' }} />

      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        {!loading && quizes &&
          <>
            {/* 300px seems to be perfect for mobile at least on my phone. probably get a condition here for bigger on pcs. */}
            {/* <Box sx={{ height: '300px', width: '300px', margin: '0 auto', border: '1px red solid' }}>

              <img style={{ border: '1px solid black', height: '90%', width: '90%' }} />
              <h3>{randomQuiz.name}</h3>
              <p className='secondary-text'>{randomQuiz.description}</p>
              <Button variant='contained' onClick={() => navigate(`/play/${randomQuiz._id}`)}>Play</Button>
            </Box> */}
            <Grid container spacing={1} maxWidth="xl" sx={{ width: `${size < 600 ? '100vw' : '100vw'}`, p: 1 }}>
              {quizes.map((item, index) => {
                return (
                  <>
                    <Grid onClick={() => navigate(`/play/${item._id}`)} item xs={6} md={6} lg={4} sx={{ position: 'relative', height: `${size < 600 ? '200px' : '400px'}`, width: '400px'  }}>
                      <img src={`http://45.136.70.211:8000/images/${item.image}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} />
                      <Stack spacing={1} sx={{ position: 'absolute', bottom: 0, p: 1, width: '100%' }}>
                        <Box sx={{ width: 'fit-content', borderRadius: '5px', background: '#fff', p: 0.5 }}>
                          <h4 style={{ height: '100%', margin: 0, padding: 0, fontSize: `${size < 600 ? '14px' : '16px'}` }}>{item.category}</h4>
                        </Box>
                        <Box sx={{ width: '98%', borderRadius: '5px', background: '#fff', p: 0.5 }}>
                          <h4 style={{ height: '100%', margin: 0, padding: 1, fontSize: `${size < 600 ? '14px' : '20px'}` }}>{item.name}</h4>
                        </Box>
                      </Stack>
                    </Grid>
                  </>
                )
              })}
            </Grid>
          </>
        }
      </Container>

    </div >

  )
}

export default Home