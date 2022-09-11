import React, { useEffect, useState } from 'react'
import { Box, Grid, Stack, Container } from '@mui/material'
import { api, deleteQuiz, getQuizes } from 'helpers/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useWindowSize from 'hooks/useWindowSize'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Profile = () => {

    const size = useWindowSize();
    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    // temporary
    useEffect(() => {
        api.post(`quiz/getQuizesByUser`, {
            username: user
        })
            .then(response => {
                setData(response.data)
                setLoading(false)
                console.log(data)
            })
    }, [])

    const handleDeleteQuiz = (quizID) => {
        deleteQuiz(user, quizID)
        setData(data)
    }

    return (
        <>
            <Box sx={{ paddingTop: '10vh' }} />

            <h1 style={{ textAlign: 'center' }}>Hey there, {user}!</h1>
            <h6 style={{ textAlign: 'center' }}>Here are the quizzes you created</h6>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                {!loading &&
                    <>

                        <Grid container spacing={1} sx={{ mt: '50px' }}>
                            {data && data.map((quiz, index) => {
                                return (
                                    <>

                                        <Grid item onClick={() => navigate(`/play/${quiz._id}`)} quiz xs={6} md={6} lg={4} sx={{ position: 'relative', height: `${size < 600 ? '200px' : '400px'}`, width: '400px' }}>
                                            <img src={`http://45.136.70.211:8000/images/${quiz.image}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} />
                                            <Stack spacing={1} sx={{ position: 'absolute', bottom: 0, p: 1, width: '100%' }}>
                                                <Box sx={{ width: 'fit-content', borderRadius: '5px', background: '#fff', p: 0.5 }}>
                                                    <h4 style={{ height: '100%', margin: 0, padding: 0, fontSize: `${size < 600 ? '14px' : '16px'}` }}>{quiz.category}</h4>
                                                </Box>
                                                <Box sx={{ width: '98%', borderRadius: '5px', background: '#fff', p: 0.5 }}>
                                                    <h4 style={{ height: '100%', margin: 0, padding: 1, fontSize: `${size < 600 ? '14px' : '20px'}` }}>{quiz.name}</h4>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                        {/* <Grid key={index} quiz xs={12} sm={12}>
                                        <Box sx={{ border: '2px black solid', height: '60px', width: '100%', }}>
                                            <Box sx={{ height: '100%', margin: '0 auto', }}>
                                                <Stack direction='row' spacing={1} justifyContent='space-between' alignquizs='center' sx={{ height: '100%', p: 1 }}>
                                                    <Stack direction='row' spacing={3}>
                                                        <h5>{quiz.name}</h5>
                                                    </Stack>
                                                    <Stack direction='row'>
                                                        <PlayCircleFilledWhiteIcon onClick={() => navigate(`/play/${quiz._id}`)} />
                                                        <EditIcon />
                                                        <DeleteIcon onClick={() => deleteQuiz(user, quiz._id)} />
                                                    </Stack>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Grid> */}
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

export default Profile