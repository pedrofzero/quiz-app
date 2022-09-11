import React, { useState } from 'react'
import { Box, Container, Grid } from '@mui/material'
import useWindowSize from 'hooks/useWindowSize'

const Play = ({ quiz }) => {

    const size = useWindowSize();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [quizEnd, setQuizEnd] = useState(false);
    const [correctCounter, setCorrectCounter] = useState(1);

    console.log(quiz)

    const test = (event) => {
        console.log(event)
    }

    const nextQuestion = (selectedAnswer) => {
        if (selectedAnswer === 'true') {
            setCorrectCounter(correctCounter + 1)
            console.log(correctCounter)
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }

        // if (currentQuestion < quiz.questions.length + 1) {
        //     setCurrentQuestion(currentQuestion + 1)
        // }
        // if (currentQuestion > quiz.questions.length) {
        //     setQuizEnd(true)
        // }

    }

    return (
        <Container>
            {!quizEnd &&
                <>
                    <h3 style={{ textAlign: 'center', paddingBottom: '1em' }}>
                        {quiz.questions[currentQuestion].question}
                    </h3>
                    <Grid container sx={{ m: '0 auto', textAlign: 'center', width: '100%', p: 1 }}>
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
            }
            {quizEnd &&
                <>

                    <h1>yo</h1>

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