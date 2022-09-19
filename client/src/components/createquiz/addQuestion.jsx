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

  // checkbox state for each answer
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)

  const handleChange1 = () => {
    if (checked2 || checked3 || checked4) {
      setChecked1(true)
      setChecked2(false)
      setChecked3(false)
      setChecked4(false)
    }
    setChecked1(true)
  }

  const handleChange2 = () => {
    if (checked1 || checked3 || checked4) {
      setChecked2(true)

      setChecked1(false)
      setChecked3(false)
      setChecked4(false)
    }
    setChecked2(true)
  }

  const handleChange3 = () => {
    if (checked1 || checked2 || checked4) {
      setChecked3(true)

      setChecked1(false)
      setChecked2(false)
      setChecked4(false)
    }
    setChecked3(true)
  }

  const handleChange4 = () => {
    if (checked1 || checked2 || checked3) {
      setChecked4(true)

      setChecked1(false)
      setChecked2(false)
      setChecked3(false)
    }
    setChecked4(true)
  }

  // big issue. because im applying isCorrect on onchange, it will not care if I tick the checkbox AFTER i write out the answer. needs big big fix.

  const saveQuestion = () => {
    setQuizData({ ...quizData, questions: [...quizData.questions, question] })
    console.log(quizData)
    // console.log(question)
    previousPage();
  }

  return (
      <Box sx={{ margin: '0 auto',  borderRadius: '5px', width: '95%', height: '95%', textAlign: 'center' }}>
        <h1 style={{ paddingTop: '20px' }}>It's time to insert your question!</h1>
        <p className='secondary-text'>Add up to 4 answers and tick the correct one.</p>

        {/* <Container maxWidth='lg'> */}
        <Box sx={{ mt: '50px', px: 2,}}>
          <h3>Question</h3>

          <Grid container sx={{ pt: 4, margin: 'auto', textAlign: 'center' }}>

            {/* Question */}
            <Grid item xs={12} sx={{ width: '100%' }}>
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
            <Grid item xs={12} sx={{ width: '100%' }}>
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
            <Grid item sm={12} sx={{ width: '100%' }}>
              <InputLabel htmlFor="standard-adornment-amount" >Answer 1</InputLabel>
              <TextField
                value={question.answer1.answer}
                onChange={(e) => setQuestion({ ...question, answer1: { answer: e.target.value, isCorrect: checked1 } })}
                id="input-with-icon-textfield"
                label=" "
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox checked={checked1} onChange={() => handleChange1()} color="success" sx={{ pt: '25px' }} />

            </Grid>

            {/* Answer 2 */}
            <Grid item sm={12} sx={{ width: '100%' }}>
              <InputLabel htmlFor="standard-adornment-amount">Answer 2</InputLabel>
              <TextField
                value={question.answer2.answer}
                onChange={(e) => setQuestion({ ...question, answer2: { answer: e.target.value, isCorrect: checked2 } })}
                id="input-with-icon-textfield"
                label=" "
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox checked={checked2} onChange={() => handleChange2()} color="success" sx={{ pt: '25px' }} />
            </Grid>

            {/* Answer 3 */}
            <Grid item sm={12} sx={{ width: '100%' }}>
              <InputLabel htmlFor="standard-adornment-amount">Answer 3</InputLabel>
              <TextField
                value={question.answer3.answer}
                onChange={(e) => setQuestion({ ...question, answer3: { answer: e.target.value, isCorrect: checked3 } })}
              id="input-with-icon-textfield"
              label="Quiz"
              variant="outlined"
              sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox checked={checked3} onChange={() => handleChange3()} color="success" sx={{ pt: '25px' }} />
            </Grid>

            {/* Answer 4 */}
            <Grid item sm={12} sx={{ width: '100%' }}>
              <InputLabel htmlFor="standard-adornment-amount">Answer 4</InputLabel>
              <TextField
                value={question.answer4.answer}
                onChange={(e) => setQuestion({ ...question, answer4: { answer: e.target.value, isCorrect: checked4 } })}
                id="input-with-icon-textfield"
                label="Quiz"
                variant="outlined"
                sx={{ m: 1, width: '25ch' }}
              />
              <Checkbox checked={checked4} onChange={() => handleChange4()} color="success" sx={{ pt: '25px' }} />
            </Grid>

          </Grid>
        </Box>

        <Stack sx={{ pt: '2em' }} direction={`${size < 400 ? 'column' : 'row'}`} justifyContent='center' alignItems='center' spacing={3}>
          <Button onClick={() => previousPage()} variant='contained' sx={{ width: '150px' }}>
            Go back
          </Button>

          <Button onClick={() => saveQuestion()} variant='contained' sx={{ width: '150px', padding: '10px' }}>
            Next
          </Button>
        </Stack>
        {/* </Container> */}
      </Box>
  )
}

export default AddQuestion