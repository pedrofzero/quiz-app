import React, { useState } from 'react'
import { Box, Grid, Container, TextField, InputLabel, Button, Select, MenuItem, Stack } from '@mui/material'
import { api } from 'helpers/api'
import useWindowSize from 'hooks/useWindowSize'

const FirstStep = ({ quizData, setQuizData, nextPage }) => {

    const size = useWindowSize();
    const [file, setFile] = useState();

    const setImage = (e) => {
        const image = e.target.files[0]
        // upload it
        api.post('/uploadimage', {
            image: image
        }, {
            headers: { 'content-type': 'multipart/form-data' }
        })
            .then(response => {
                const newImageName = response.data
                // add uploaded image to the quiz form
                setQuizData({ ...quizData, image: newImageName })
            })

        // preview it on the img tag
        setFile(URL.createObjectURL(e.target.files[0]))


    }

    return (
        <Box sx={{ margin: '0 auto', borderRadius: '5px', width: '100%', height: '100%' }}>
            <Box sx={{ position: 'relative', top: '2.5%', margin: '0 auto', borderRadius: '5px', width: '95%', height: '95%', }}>
                <h1 style={{ paddingTop: '20px', textAlign: 'center' }}>Let's create your quiz!</h1>
                <p style={{ textAlign: 'center' }} className='secondary-text'>It's very simple, just follow along the instructions</p>

                <Container maxWidth='lg'>
                    <Grid container sx={{ m: 0, p: 0, paddingTop: '10vh' }}>
                        <Grid item xs={12} lg={7} xl={8} sx={{}}>
                            <Stack direction='column' spacing={2}>
                                <div>
                                    <InputLabel htmlFor="standard-adornment-amount">What is the name of your quiz?</InputLabel>
                                    <TextField
                                        value={quizData.name}
                                        onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                                        id="input-with-icon-textfield"
                                        label="Quiz"
                                        variant="outlined"
                                        sx={{ width: `${size < 900 ? '80%' : '50%'}` }}
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
                                        sx={{ width: `${size < 900 ? '80%' : '50%'}` }}
                                    >
                                        <MenuItem value={'Games'}>Games</MenuItem>
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
                                        sx={{ width: `${size < 900 ? '80%' : '50%'}` }}
                                    />
                                </div>
                            </Stack>
                        </Grid>
                        {/* {size < 1200 && <Box></Box>} */}
                        <Grid item xs={12} lg={5} xl={4} sx={{ pt: `${size < 1200 ? '50px' : '0px'}` }}>
                            <Box sx={{ height: '100%', width: '100%', border: '1px black solid', pr: '1em', pl: '1em' }}>
                                <img style={{ height: `${size < 1200 ? '200px' : '100%'}`, width: 'auto', }} src={file} />
                            </Box>

                            {/* image */}
                            <input type='file' onChange={setImage} />

                        </Grid>
                    </Grid>
                    <Box sx={{ position: 'absolute', mb: '50px', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
                        <Stack direction='row' spacing={3}>
                            <Button onClick={() => { console.log(quizData); nextPage(); }} variant='contained' sx={{ width: '150px', background: '#476442', }}>
                                Next
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default FirstStep