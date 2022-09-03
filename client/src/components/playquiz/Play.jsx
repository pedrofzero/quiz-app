import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'

const Play = ({ quiz }) => {
    console.log(quiz)

    const [currentQuestion, setCurrentQuestion] = useState(0)

    return (
        <Box sx={{ mt: '100px', border: '1px red solid' }}>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <h3>{quiz.questions[currentQuestion].question}</h3>
                </Grid>
                <Grid item xs={6}>
                    <h4>{quiz.questions[currentQuestion].answer}</h4>
                </Grid>
                <Grid item xs={6}>
                    <h4>{quiz.questions[currentQuestion].wrongAnswer1}</h4>
                </Grid>
                <Grid item xs={6}>
                <h4>{quiz.questions[currentQuestion].wrongAnswer2}</h4>
                </Grid>
                <Grid item xs={6}>
                <h4>{quiz.questions[currentQuestion].wrongAnswer3}</h4>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Play