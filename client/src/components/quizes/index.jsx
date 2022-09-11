import React, { useEffect, useState, useContext } from 'react'
import { Box, Grid, Stack, Container } from '@mui/material'
import { api, deleteQuiz, getQuizes } from 'helpers/api'
import { useNavigate, useParams } from 'react-router-dom'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useWindowSize from 'hooks/useWindowSize';
import Cookies from 'js-cookie'

const Quizes = () => {

    const size = useWindowSize();
    const { username } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [quizes, setQuizes] = useState([])

    // temporary
    useEffect(() => {
        api.post(`quiz/getQuizesByUser`, {
            username: username
        })
            .then(response => {
                setQuizes(response.data)
                setLoading(false)
                console.log(quizes)
            })
    }, [])

    return (
        <>
        <Box sx={{ pt: '10vh' }} />
        <h1 style={{ textAlign: 'center', paddingBottom: '20px' }}>Quizes made by {username}</h1>

            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                {!loading &&
                    <>
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
                                        <Grid item xs={6} md={6} lg={4} onClick={() => navigate(`/play/${item._id}`)} sx={{ position: 'relative', height: `${size < 600 ? '200px' : '400px'}`, width: '400px', cursor: 'pointer' }}>
                                            <img src={`http://45.136.70.211:8000/images/${item.image}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            </>
    )
}

export default Quizes