import React, { useEffect, useState } from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { getQuizes } from 'helpers/api'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from 'helpers/api'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Quizes = () => {

    const { username } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    // temporary
    useEffect(() => {
        api.post(`quiz/getQuizes`, {
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
                    <h1 style={{ textAlign: 'center' }}>Quizes made by {localStorage.getItem('user')}</h1>
                    <Grid container sx={{ mt: '50px' }}>
                        {data && data.map((quiz, index) => {
                            return (
                                <>
                                    <Grid key={index} item xs={12} sm={12}>
                                        <Box sx={{ border: '2px black solid', height: '60px', width: '100%', }}>
                                            <Box sx={{ height: '100%', margin: '0 auto', }}>
                                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' sx={{ height: '100%', p: 1, border: '1px red solid' }}>
                                                    <Stack direction='row' spacing={3}>
                                                        <h3>{quiz.name}</h3>
                                                        <h4>{quiz.description}</h4>
                                                    </Stack>
                                                    <Stack direction='row'>
                                                        <PlayCircleFilledWhiteIcon onClick={() => navigate(`/play/${quiz._id}`)} />
                                                        <EditIcon />
                                                        <DeleteIcon />
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

export default Quizes