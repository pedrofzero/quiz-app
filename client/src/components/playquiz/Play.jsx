import React, { useState } from 'react'
import { Box, Container, Grid } from '@mui/material'
import useWindowSize from 'hooks/useWindowSize'

const Play = ({ quiz }) => {

    const size = useWindowSize();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [quizEnd, setQuizEnd] = useState(false);
    const [correctCounter, setCorrectCounter] = useState(1);

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
        <Box sx={{}}>
            <Container>
                {!quizEnd &&
                    <Grid container sx={{ m: '0 auto', textAlign: 'center' }}>
                        <Grid item xs={12} sm={12} sx={{ p: '5em' }}>
                            <Box>
                                <h3>
                                    {quiz.questions[currentQuestion].question}
                                </h3>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ p: '2em' }}>
                            <Box onClick={(e) => nextQuestion(quiz.questions[currentQuestion].answer1.isCorrect)} style={styles.answerBox}>
                                <h4 style={styles.centeredAnswer}>
                                    {quiz.questions[currentQuestion].answer1.answer}
                                </h4>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ p: '2em' }}>
                            <Box onClick={() => nextQuestion(quiz.questions[currentQuestion].answer2.isCorrect)} style={styles.answerBox}>
                                <h4 style={styles.centeredAnswer}>
                                    {quiz.questions[currentQuestion].answer2.answer}
                                </h4>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ p: '2em' }}>
                            <Box onClick={() => nextQuestion(quiz.questions[currentQuestion].answer3.isCorrect)} style={styles.answerBox}>
                                <h4 style={styles.centeredAnswer}>
                                    {quiz.questions[currentQuestion].answer3.answer}
                                </h4>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ p: '2em' }}>
                            <Box onClick={() => nextQuestion(quiz.questions[currentQuestion].answer4.isCorrect)} style={styles.answerBox}>
                                <h4 style={styles.centeredAnswer}>
                                    {quiz.questions[currentQuestion].answer4.answer}
                                </h4>
                            </Box>
                        </Grid>
                    </Grid>
                }
                {quizEnd &&
                    <>

                        <h1>yo</h1>

                    </>

                }
            </Container>
        </Box>
    )
}

const styles = {

    answerBox: {
        background: '#0fc0fc',
        border: '1px solid black',
        borderRadius: '5px',
        width: '250px',
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