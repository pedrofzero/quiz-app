import React from 'react'
import { Box, Grid, Container, TextField, InputLabel, Button } from '@mui/material'
import { api } from 'helpers/api'

const FirstStep = ({ quizData, setQuizData, nextPage }) => {

    const token = localStorage.getItem('user_token')

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const handleSubmit = () => {
        api.post('/quiz/createQuiz', {
            name: quizData.name,
            description: quizData.description,
            category: quizData.category,
            creator: '630fe297ede698edce26c34b'
        }, config)
    }

    return (
        <Box sx={{ margin: '0 auto', backgroundColor: '#D9D9D9', borderRadius: '5px', width: '100%', height: '100%' }}>
            <Box sx={{ position: 'relative', top: '2.5%', margin: '0 auto', backgroundColor: '#fff', borderRadius: '5px', width: '95%', height: '95%' }}>
                <h1 style={{ paddingTop: '20px' }}>Let's create your quiz!</h1>
                <p className='secondary-text'>It's very simple, just follow along the instructions</p>

                {/* <Container maxWidth='lg'> */}
                <Grid container sx={{ mt: '40px' }}>
                    <Grid item sm={8} sx={{ border: '1px red solid' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                <InputLabel htmlFor="standard-adornment-amount">What is the name of your quiz?</InputLabel>
                                <TextField
                                    value={quizData.name}
                                    onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                                    id="input-with-icon-textfield"
                                    label="Quiz"
                                    variant="outlined"
                                    sx={{ m: 1, width: '25ch' }}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="standard-adornment-amount">What category will it be under?</InputLabel>
                                <TextField
                                    value={quizData.category}
                                    onChange={(e) => setQuizData({ ...quizData, category: e.target.value })}
                                    id="input-with-icon-textfield"
                                    label="Quiz"
                                    variant="outlined"
                                    sx={{ m: 1, width: '25ch' }}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="standard-adornment-amount">Brief description</InputLabel>
                                <TextField
                                    value={quizData.description}
                                    onChange={(e) => setQuizData({ ...quizData, description: e.target.value })}
                                    id="input-with-icon-textfield"
                                    label="Quiz"
                                    variant="outlined"
                                    sx={{ m: 1, width: '25ch' }}
                                />
                            </div>
                        </Box>
                    </Grid>
                    <Grid item sm={4} sx={{ border: '1px red solid' }}>

                    </Grid>
                </Grid>
                <Box sx={{ position: 'absolute', mb: '50px', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
                    <Button onClick={() => nextPage()} variant='contained' sx={{ width: '150px' }}>
                        Next
                    </Button>
                </Box>
                {/* </Container> */}
            </Box>
        </Box>
    )
}

export default FirstStep