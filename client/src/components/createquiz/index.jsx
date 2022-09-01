import React, { useState } from 'react'
import { Box } from '@mui/material'
import FirstStep from './firstStep';

const CreateQuiz = () => {

  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1)
  }


  const [quizData, setQuizData] = useState({
    name: '',
    category: '',
    description: ''
  })

  const handlePages = () => {
    switch (page) {
      case 0: return <FirstStep quizData={quizData} setQuizData={setQuizData} nextPage={nextPage} />
      case 1: return <SecondStep  quizData={quizData} setQuizData={setQuizData} nextPage={nextPage} />
      // case 2: return <ThirdStep />
    }

  }

  return (
    <Box sx={{ textAlign: 'center', margin: '0 auto', marginTop: '100px', width: '1300px', height: '800px', border: '1px red solid' }}>
      {handlePages()}
    </Box>
  )
}

export default CreateQuiz