import React, { useState } from 'react'
import { Box, Grid, Container, TextField, InputLabel, Button, Select, MenuItem, Stack } from '@mui/material'
import { api } from 'helpers/api'
import useWindowSize from 'hooks/useWindowSize'

const FirstStep = ({ quizData, setQuizData, nextPage }) => {

    const size = useWindowSize();
    const [file, setFile] = useState('https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg');

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
        <Box sx={{ margin: '0 auto', borderRadius: '5px', width: '100%', height: '100%', textAlign: 'center' }}>
            <h1 style={{ paddingTop: '20px', textAlign: 'center' }}>Let's create your quiz!</h1>
            <p style={{ textAlign: 'center' }} className='secondary-text'>It's very simple, just follow along the instructions</p>

            <Container maxWidth='lg' sx={{}}>
                <Grid container sx={{ m: 0, p: 0, paddingTop: '5vh', }}>
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
                                    sx={{ width: `${size < 900 ? '80%' : '90%'}` }}
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
                                    sx={{ width: `${size < 900 ? '80%' : '90%'}` }}
                                >
                                    <MenuItem value={'Coding'}>Coding</MenuItem>
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
                                    sx={{ width: `${size < 900 ? '80%' : '90%'}` }}
                                />
                            </div>
                        </Stack>
                    </Grid>
                    {/* {size < 1200 && <Box></Box>} */}
                    <Grid item xs={12} lg={5} xl={4} sx={{ pt: `${size < 1200 ? '50px' : '0px'}`, width: '50%' }}>
                        <Box sx={{ border: '1px black solid', borderRadius: '5px' }}>
                            <img style={{ height: `${size < 1200 ? '400px' : '100%'}`, width: '100%', objectFit: 'cover' }} src={file} />
                        </Box>

                        {/* image */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
                            <input type='file' id='img-upload' onChange={setImage} />
                            <label htmlFor='img-upload' id='img-label'>
                                Choose an image
                            </label>
                        </Box>

                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: '150px' }}>
                    <Stack direction='row' spacing={3}>
                        <Button onClick={() => { console.log(quizData); nextPage(); }} variant='contained' sx={{ width: '150px', background: '#476442', padding: '10px' }}>
                            Next
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default FirstStep