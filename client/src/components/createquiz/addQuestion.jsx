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
        <Box sx={{ mt: '50px', px: 2,  overflow: 'scroll'}}>
          <h3>Question</h3>

          <Grid container sx={{ pt: 4, margin: 'auto', textAlign: 'center' }}>

            {/* Question */}
            <Grid item xs={12} sx={{width: '100%'}}>
              <InputLabel htmlFor="standard-adornment-amount">What is the name of your question?</InputLabel>
              <TextField
                value={question.question}
                onChange={(e) => setQuestion({ ...question, question: e.target.value })}
                id="input-with-icon-textfield"
                label="Quiz"
                variant="outlined"
                sx={{ width: `${size < 600 ? '100%' : '50ch'}` }}
              />
            </Grid>

            {/* Time limit */}
            <Grid item xs={12} sx={{width: '100%'}}>
              <InputLabel htmlFor="standard-adornment-amount">What is the the question's time limit?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={question.timeLimit}
                label="Time"
                onChange={(e) => setQuestion({ ...question, timeLimit: e.target.value })}
                sx={{ width: `${size < 600 ? '100%' : '50ch'}` }}
              >
                <MenuItem value={20}>20 sec</MenuItem>
                <MenuItem value={30}>30 sec</MenuItem>
                <MenuItem value={60}>60 sec</MenuItem>
              </Select>
            </Grid>

            {/* Answer 1 */}
            <Grid item sm={12} sx={{width: '100%'}}>
              <InputLabel htmlFor="standard-adornment-amount" >Answer 1</InputLabel>
              <TextField
                value={question.answer1.answer}
                onChange={(e) => setQuestion({ ...question, answer1: { answer: e.target.value, isCorrect: false } })}
                id="input-with-icon-textfield"
                label=" "
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox color="success" sx={{ pt: '25px' }} />

            </Grid>

            {/* Answer 2 */}
            <Grid item sm={12} sx={{width: '100%'}}>
              <InputLabel htmlFor="standard-adornment-amount">Answer 2</InputLabel>
              <TextField
                value={question.answer2.answer}
                onChange={(e) => setQuestion({ ...question, answer2: { answer: e.target.value, isCorrect: false } })}
                id="input-with-icon-textfield"
                label=" "
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox color="success" sx={{ pt: '25px' }} />
            </Grid>

            {/* Answer 3 */}
            <Grid item sm={12} sx={{width: '100%'}}>
              <InputLabel htmlFor="standard-adornment-amount">Answer 3</InputLabel>
              <TextField
                value={question.answer3.answer}
                onChange={(e) => setQuestion({ ...question, answer3: { answer: e.target.value, isCorrect: false } })}
                id="input-with-icon-textfield"
                label="Quiz"
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox color="success" sx={{ pt: '25px' }} />
            </Grid>

            {/* Answer 4 */}
            <Grid item sm={12} sx={{width: '100%'}}>
              <InputLabel htmlFor="standard-adornment-amount">Answer 4</InputLabel>
              <TextField
                value={question.answer4.answer}
                onChange={(e) => setQuestion({ ...question, answer4: { answer: e.target.value, isCorrect: false } })}
                id="input-with-icon-textfield"
                label="Quiz"
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox color="success" sx={{ pt: '25px' }} />
            </Grid>

          </Grid>
        </Box>

        <Stack sx={{ pt: '2em' }} direction={`${size < 400 ? 'column' : 'row'}`} justifyContent='center' alignItems='center' spacing={3}>
          <Button onClick={() => previousPage()} variant='contained' sx={{ width: '150px' }}>
            Go back
          </Button>

          <Button onClick={() => saveQuestion()} variant='contained' sx={{ width: '150px' }}>
            Next
          </Button>
        </Stack>
        {/* </Container> */}
      </Box>
    </Box>
  )
}

export default AddQuestion