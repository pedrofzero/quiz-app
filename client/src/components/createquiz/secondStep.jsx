import React from 'react'
import { useNavigate } from 'react-router-dom';
import { api, createQuiz } from 'helpers/api'
import { Box, Grid, Container, TextField, InputLabel, Button, Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add'


const SecondStep = ({ quizData, setQuizData, nextPage, previousPage }) => {

    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    const handleSubmit = async () => {
        await setQuizData({ ...quizData, creator: user })
        await createQuiz(quizData.name, quizData.description, quizData.category, quizData.questions, quizData.creator, quizData.image)
        navigate('/profile')
    }

    const deleteQuestion = async (index) => {
        await setQuizData(quizData.questions.splice(index, 1));
        console.log(quizData)

    }

    return (
        <Box sx={{ margin: '0 auto', borderRadius: '5px', width: '100%', textAlign: 'center', }}>
            <h1 style={{ paddingTop: '20px' }}>{quizData.name} sounds good!</h1>
            <p onClick={() => console.log(quizData.questions)} className='secondary-text'>Time to add some questions</p>

            {/* <Container maxWidth='lg'> */}
            <Grid className='questions-container' container sx={{ mt: '100px', px: 4, overflow: 'scroll' }}>
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
                                                {/* <EditIcon /> */}
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
            <Box onClick={() => nextPage()} sx={{ border: '2px black dotted', height: '60px', width: '100%', mt: '100px' }}>
                <Box sx={{ height: '100%', margin: '0 auto' }}>
                    <Stack direction='column' spacing={1} justifyContent='center' alignItems='center'>
                        <AddIcon sx={{ m: 0, p: 0 }} />
                        <p>Add a question!</p>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '50px',  }}>
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
    )
}

export default SecondStep