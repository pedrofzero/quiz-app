import React, { useEffect, useState } from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { api, deleteQuiz, getQuizes } from 'helpers/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Profile = () => {

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
        
        <Box sx={{ mt: '100px' }}>
            {!loading &&
                <>
                    <h1 style={{ textAlign: 'center' }}>Hey there, {user}!</h1>
                    <h6 style={{ textAlign: 'center' }}>Here are some of your quizzes</h6>
                    <Grid container sx={{ mt: '50px' }}>
                        {data && data.map((quiz, index) => {
                            return (
                                <>
                                    <Grid key={index} item xs={12} sm={12}>
                                        <Box sx={{ border: '2px black solid', height: '60px', width: '100%', }}>
                                            <Box sx={{ height: '100%', margin: '0 auto', }}>
                                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' sx={{ height: '100%', p: 1 }}>
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
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </>
            }
        </Box>
    )
}

export default Profile