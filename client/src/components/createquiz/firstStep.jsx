import React, { useState } from 'react'
import { Box, Grid, Container, TextField, InputLabel, Button, Select, MenuItem, Stack } from '@mui/material'
import { api } from 'helpers/api'

const FirstStep = ({ quizData, setQuizData, nextPage }) => {

    const [file, setFile] = useState();

    const showImage = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]))
        setQuizData({ ...quizData, image: e.target.files[0] })
    }

    return (
        <Box sx={{ margin: '0 auto', backgroundColor: '#D9D9D9', borderRadius: '5px', width: '100%', height: '100%' }}>
            <Box sx={{ position: 'relative', top: '2.5%', margin: '0 auto', backgroundColor: '#fff', borderRadius: '5px', width: '95%', height: '95%', textAlign: 'center' }}>
                <h1 style={{ paddingTop: '20px' }}>Let's create your quiz!</h1>
                <p className='secondary-text'>It's very simple, just follow along the instructions</p>

                {/* <Container maxWidth='lg'> */}
                <Grid container sx={{ mt: '40px', p: '2em' }}>
                    <Grid item xs={12} lg={8} sx={{}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                <InputLabel htmlFor="standard-adornment-amount">What is the name of your quiz?</InputLabel>
                                <TextField
                                    value={quizData.name}
                                    onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                                    id="input-with-icon-textfield"
                                    label="Quiz"
                                    variant="outlined"
                                    sx={{ m: 1, width: '45%' }}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="standard-adornment-amount">What category will it be under?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={quizData.category}
                                    label="Time"
                                    onChange={(e) => setQuizData({ ...quizData, category: e.target.value })}
                                    sx={{ m: 1, width: '45%' }}
                                >
                                    <MenuItem value={'Math'}>Math</MenuItem>
                                    <MenuItem value={'Music'}>Music</MenuItem>
                                    <MenuItem value={'History'}>History</MenuItem>
                                    <MenuItem value={'Sports'}>Sports</MenuItem>
                                    <MenuItem value={'Trivia'}>Trivia</MenuItem>
                                    <MenuItem value={'TV Shows'}>TV Shows</MenuItem>
                                </Select>
                            </div>
                            <div>
                                <InputLabel htmlFor="standard-adornment-amount">Brief description</InputLabel>
                                <TextField
                                    value={quizData.description}
                                    onChange={(e) => setQuizData({ ...quizData, description: e.target.value })}
                                    id="input-with-icon-textfield"
                                    label="Quiz"
                                    variant="outlined"
                                    sx={{ m: 1, width: '45%' }}
                                />
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={4} sx={{}}>
                        <Box sx={{ height: '100%', border: '1px black solid' }}>
                            <img style={{ height: '100%', width: 'auto' }} src={file} />
                        </Box>
                        <input type='file' onChange={showImage} />
                    </Grid>
                </Grid>
                <Box sx={{ position: 'absolute', mb: '50px', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
                    <Stack direction='row' spacing={3}>
                        <Button onClick={() => { console.log(quizData); nextPage(); }} variant='contained' sx={{ width: '150px' }}>
                            Next
                        </Button>
                    </Stack>
                </Box>
                {/* </Container> */}
            </Box>
        </Box>
    )
}

export default FirstStep