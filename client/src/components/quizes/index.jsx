import React, { useEffect, useState, useContext } from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { api, deleteQuiz, getQuizes } from 'helpers/api'
import { useNavigate, useParams } from 'react-router-dom'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Cookies from 'js-cookie'

const Quizes = () => {

    const { username } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    // temporary
    useEffect(() => {
        api.post(`quiz/getQuizesByUser`, {
            username: username
        })
            .then(response => {
                setData(response.data)
                setLoading(false)
                console.log(data)
            })
    }, [])

    return (

        <Box sx={{ mt: '100px' }}>
            {!loading &&
                <>
                    <h1 style={{ textAlign: 'center' }}>Quizes made by {username}</h1>
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
                                                    <PlayCircleFilledWhiteIcon onClick={() => navigate(`/play/${quiz._id}`)} />
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

export default Quizes