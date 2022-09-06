import React, { useState } from 'react'
import { Box } from '@mui/material'
import FirstStep from './firstStep';
import SecondStep from './secondStep';
import AddQuestion from './addQuestion';

const CreateQuiz = () => {

  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    setPage(page - 1)
  }


  const [quizData, setQuizData] = useState({
    name: '',
    category: '',
    description: '',
    questions: []
  })

  const handlePages = () => {
    switch (page) {
      case 0: return <FirstStep quizData={quizData} setQuizData={setQuizData} nextPage={nextPage} />
      case 1: return <SecondStep quizData={quizData} setQuizData={setQuizData} nextPage={nextPage} previousPage={previousPage} />
      case 2: return <AddQuestion quizData={quizData} setQuizData={setQuizData} previousPage={previousPage} />
    }

  }

  return ( // textAlign: center?
    <Box sx={{ margin: '0 auto', marginTop: '50px', width: '95%', height: '1000px', }}>
      {handlePages()}
    </Box>
  )
}

export default CreateQuiz