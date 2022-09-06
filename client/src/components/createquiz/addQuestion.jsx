import React, { useState, useEffect } from 'react';
import useWindowSize from 'hooks/useWindowSize'
import { Box, Grid, Button, Stack, InputLabel, TextField, Checkbox, Select, MenuItem } from '@mui/material'

const AddQuestion = ({ quizData, setQuizData, previousPage }) => {

  const size = useWindowSize();

  const [question, setQuestion] = useState(
    {
      timeLimit: 20,
      question: '',
      answer1:
      {
        answer: '',
        isCorrect: ''
      },
      answer2:
      {
        answer: '',
        isCorrect: ''
      },
      answer3:
      {
        answer: '',
        isCorrect: ''
      },
      answer4:
      {
        answer: '',
        isCorrect: ''
      },
    }
  )

  useEffect(() => {
    console.log(question)
  }, [question])

  const saveQuestion = () => {
    setQuizData({ ...quizData, questions: [...quizData.questions, question] })
    console.log(quizData)
    previousPage();
  }

  return (
    <Box sx={{ margin: '0 auto', backgroundColor: '#D9D9D9', borderRadius: '5px', width: '100%', height: '100%' }}>
      <Box sx={{ position: 'relative', top: '2.5%', margin: '0 auto', backgroundColor: '#fff', borderRadius: '5px', width: '95%', height: '95%', textAlign: 'center' }}>
        <h1 style={{ paddingTop: '20px' }}>It's time to insert your question!</h1>
        <p className='secondary-text'>Add up to 4 answers and tick the correct one.</p>

        {/* <Container maxWidth='lg'> */}
        <Box sx={{ mt: '50px', px: 4 }}>
          <h3>Question</h3>

          <Grid container sx={{ pt: 4 }}>

            {/* Question */}
            <Grid item sm={12}>
              <InputLabel htmlFor="standard-adornment-amount">What is the name of your question?</InputLabel>
              <TextField
                value={question.question}
                onChange={(e) => setQuestion({ ...question, question: e.target.value })}
                id="input-with-icon-textfield"
                label="Quiz"
                variant="outlined"
                sx={{ m: 'auto', width: `${size < 600 ? '100%' : '50ch'}` }}
              />
            </Grid>

            {/* Time limit */}
            <Grid item sm={12}>
              <InputLabel htmlFor="standard-adornment-amount">What is the the question's time limit?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quizData.timeLimit}
                label="Time"
                onChange={(e) => setQuestion({ ...question, timeLimit: e.target.value })}
                sx={{ m: 1, width: `${size < 600 ? '100%' : '50ch'}` }}
              >
                <MenuItem value={20}>20 sec</MenuItem>
                <MenuItem value={30}>30 sec</MenuItem>
                <MenuItem value={60}>60 sec</MenuItem>
              </Select>
            </Grid>

            {/* Answer 1 */}
            <Grid item md={12} lg={6} xl={6} sx={{ m: 0, pt: 2 }}>
              <InputLabel htmlFor="standard-adornment-amount" >Answer 1</InputLabel>
              <TextField
                value={question.answer1.answer}
                onChange={(e) => setQuestion({ ...question, answer1: { answer: e.target.value, isCorrect:false } })}
                id="input-with-icon-textfield"
                label=" "
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox color="success" />
            </Grid>

            {/* Answer 2 */}
            <Grid item md={12} lg={6} xl={6} >
              <InputLabel htmlFor="standard-adornment-amount">Answer 2</InputLabel>
              <TextField
                value={question.answer2.answer}
                onChange={(e) => setQuestion({ ...question, answer2: { answer: e.target.value, isCorrect:false } })}
                id="input-with-icon-textfield"
                label=" "
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox color="success" />
            </Grid>

            {/* Answer 4 */}
            <Grid item md={12} lg={6} xl={6}>
              <InputLabel htmlFor="standard-adornment-amount">Answer 3</InputLabel>
              <TextField
                value={question.answer3.answer}
                onChange={(e) => setQuestion({ ...question, answer3: { answer: e.target.value, isCorrect:false } })}
                id="input-with-icon-textfield"
                label="Quiz"
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox color="success" />
            </Grid>

            {/* Answer 4 */}
            <Grid item md={12} lg={6} xl={6} >
              <InputLabel htmlFor="standard-adornment-amount">Answer 4</InputLabel>
              <TextField
                value={question.answer4.answer}
                onChange={(e) => setQuestion({ ...question, answer4: { answer: e.target.value, isCorrect:false } })}
                id="input-with-icon-textfield"
                label="Quiz"
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox color="success" />
            </Grid>

          </Grid>
        </Box>

        <Box sx={{ position: 'absolute', mb: '50px', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
          <Stack direction='row' spacing={3}>
            <Button onClick={() => previousPage()} variant='contained' sx={{ width: '150px' }}>
              Go back
            </Button>

            <Button onClick={() => saveQuestion()} variant='contained' sx={{ width: '150px' }}>
              Next
            </Button>
          </Stack>
        </Box>
        {/* </Container> */}
      </Box>
    </Box>
  )
}

export default AddQuestion