import React, { useState } from 'react'
import { Box, Container, Grid, Button } from '@mui/material'
import useWindowSize from 'hooks/useWindowSize'
import { updateTimesPlayed } from 'helpers/api'
import { useNavigate } from 'react-router-dom'

const Play = ({ quiz }) => {

    const size = useWindowSize();
    const navigate = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [quizEnd, setQuizEnd] = useState(false);
    const [correctCounter, setCorrectCounter] = useState(0);

    console.log(quiz.questions.length)

    const nextQuestion = (selectedAnswer) => {
        if (currentQuestion < quiz.questions.length + 1) {
            if (selectedAnswer === true) {
                setCorrectCounter(correctCounter + 1)
            }
            setCurrentQuestion(currentQuestion + 1)
        }

        // Finish and proceed to next page
        if (currentQuestion >= quiz.questions.length - 1) {
            setQuizEnd(true)
            updateTimesPlayed(quiz._id)
        }

    }

    return (
        <Container>
            {!quizEnd ?
                <>
                    <Box sx={{ paddingTop: '10vh' }} />
                    <h3 style={{ textAlign: 'center', paddingBottom: '1em' }}>
                        {quiz.questions[currentQuestion].question}
                    </h3>
                    <Grid container sx={{ m: '0 auto', textAlign: 'center', width: '100%', p: 1 }}>

                        {/* Answer 1 */}
                        <Grid item xs={12} sm={6} sx={{ width: '100%', p: '1em' }}>
                            <Box onClick={(e) => nextQuestion(quiz.questions[currentQuestion].answer1.isCorrect)}
                                sx={{
                                    background: '#fffaf0',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    width: '100%',
                                    height: '50px',
                                    margin: '0 auto',
                                    '&:hover': {
                                        background: '#476442',
                                        color: '#fff'
                                    }
                                }}
                            >
                                <h4 style={styles.centeredAnswer}>
                                    {quiz.questions[currentQuestion].answer1.answer}
                                </h4>
                            </Box>
                        </Grid>

                        {/* Answer 2 */}
                        <Grid item xs={12} sm={6} sx={{ width: '100%', p: '1em' }}>
                            <Box onClick={() => nextQuestion(quiz.questions[currentQuestion].answer2.isCorrect)}
                                sx={{
                                    background: '#fffaf0',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    width: '100%',
                                    height: '50px',
                                    margin: '0 auto',
                                    '&:hover': {
                                        background: '#476442',
                                        color: '#fff'
                                    }
                                }}
                            >
                                <h4 style={styles.centeredAnswer}>
                                    {quiz.questions[currentQuestion].answer2.answer}
                                </h4>
                            </Box>
                        </Grid>

                        {/* Answer 3 */}
                        <Grid item xs={12} sm={6} sx={{ width: '100%', p: '1em' }}>
                            <Box onClick={() => nextQuestion(quiz.questions[currentQuestion].answer3.isCorrect)}
                                sx={{
                                    background: '#fffaf0',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    width: '100%',
                                    height: '50px',
                                    margin: '0 auto',
                                    '&:hover': {
                                        background: '#476442',
                                        color: '#fff'
                                    }
                                }}
                            >
                                <h4 style={styles.centeredAnswer}>
                                    {quiz.questions[currentQuestion].answer3.answer}
                                </h4>
                            </Box>
                        </Grid>

                        {/* Answer 4 */}
                        <Grid item xs={12} sm={6} sx={{ width: '100%', p: '1em' }}>
                            <Box onClick={() => nextQuestion(quiz.questions[currentQuestion].answer4.isCorrect)}
                                sx={{
                                    background: '#fffaf0',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    width: '100%',
                                    height: '50px',
                                    margin: '0 auto',
                                    '&:hover': {
                                        background: '#476442',
                                        color: '#fff'
                                    }
                                }}
                            >
                                <h4 style={styles.centeredAnswer}>
                                    {quiz.questions[currentQuestion].answer4.answer}
                                </h4>
                            </Box>
                        </Grid>

                    </Grid>
                </>
                :
                <>
                    <Box sx={{ paddingTop: '10vh' }} />
                    <div style={{ textAlign: 'center' }}>
                        <h1>{quiz.name}</h1>
                        <Box sx={{ height: '300px', width: '300px', border: '1px solid black', margin: '0 auto' }}>
                            <img src={`http://45.136.70.211:8000/images/${quiz.image}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                        <h3 style={{ marginTop: '10px' }}>You got {correctCounter}/{quiz.questions.length} questions correct</h3>

                        <Button onClick={() => { navigate('/home') }} variant='contained' sx={{ width: '200px', background: '#476442', padding: '10px 0px', mt: '20px' }}>
                            Browse other quizes
                        </Button>

                    </div>
                </>

            }

        </Container>
    )
}

const styles = {

    answerBox: {
        background: '#0fc0fc',
        border: '1px solid black',
        borderRadius: '5px',
        width: '100%',
        height: '50px',
        margin: '0 auto'
    },

    centeredAnswer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default Play