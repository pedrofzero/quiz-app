import React from 'react'
import { Box, Grid, Container, TextField, InputLabel, Button, Stack } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { api, createQuiz } from 'helpers/api'


const SecondStep = ({ quizData, setQuizData, nextPage, previousPage }) => {

    const token = localStorage.getItem('access_token')

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const handleSubmit = async () => {
        await setQuizData({...quizData, creator: localStorage.getItem('user')})
        await createQuiz(quizData.name, quizData.description, quizData.category, quizData.questions, quizData.creator, quizData.image)
        previousPage();
    }

    const deleteQuestion = async (index) => {
        await setQuizData(quizData.questions.splice(index, 1));
        console.log(quizData)

    }

    return (
        <Box sx={{ margin: '0 auto', backgroundColor: '#D9D9D9', borderRadius: '5px', width: '100%', height: '100%' }}>
            <Box sx={{ position: 'relative', top: '2.5%', margin: '0 auto', backgroundColor: '#fff', borderRadius: '5px', width: '95%', height: '95%', textAlign: 'center' }}>
                <h1 style={{ paddingTop: '20px' }}>{quizData.name} sounds good!</h1>
                <p onClick={() => console.log(quizData.questions)} className='secondary-text'>Time to add some questions</p>

                {/* <Container maxWidth='lg'> */}
                <Grid className='questions-container' container sx={{ mt: '100px', px: 4, overflow: 'scroll', height: '400px', }}>
                    <h3>Questions</h3>
                    {quizData.questions &&
                        quizData.questions.map((question, index) => {
                            return (
                                <>
                                    <Box sx={{ border: '2px black solid', height: '60px', width: '100%', mt: '20px' }}>
                                        <Box sx={{ height: '100%', margin: '0 auto' }}>
                                            <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' sx={{ height: '100%', p: 1 }}>
                                                <p>{question.question}</p>
                                                <Stack direction='column'>
                                                    <EditIcon />
                                                    <DeleteIcon onClick={() => deleteQuestion(index)} />
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </>
                            )
                        })
                    }

                </Grid>
                <Box onClick={() => nextPage()} sx={{ border: '2px black dotted', height: '60px', width: '100%', mt: '40px' }}>
                    <Box sx={{ height: '100%', margin: '0 auto' }}>
                        <Stack direction='column' spacing={1} justifyContent='center' alignItems='center'>
                            <AddIcon sx={{ m: 0, p: 0 }} />
                            <p>Add a question!</p>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{ position: 'absolute', mb: '50px', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
                    <Stack direction='row' spacing={3}>
                        <Button onClick={() => previousPage()} variant='contained' sx={{ width: '150px' }}>
                            Go back
                        </Button>

                        {quizData.questions.length > 0 &&
                            <Button onClick={() => handleSubmit()} variant='contained' sx={{ width: '150px' }}>
                                Save
                            </Button>
                        }

                    </Stack>
                </Box>
                {/* </Container> */}
            </Box>
        </Box >
    )
}

export default SecondStep