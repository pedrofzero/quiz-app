import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { getQuizById } from 'helpers/api';
import { api } from 'helpers/api'
import Play from './Play';

const PlayQuiz = () => {

  // const { quizId } = useParams();
  const [loading, setLoading] = useState(true)
  const [quizData, setQuizData] = useState([])
  const [startQuiz, setStartQuiz] = useState(false)

  // temporary, supposed to use helpers api file later.
  useEffect(() => {

    const quizId = window.location.pathname.split("/").pop()

    const getQuiz = async () => {
      await api.post(`quiz/getQuizById`, {
        id: quizId
      })
        .then(response => {
          setQuizData(response.data)
          setLoading(false)
          console.log(quizData);

        })
    }
    getQuiz()
  }, [])

  return (
    <Box sx={{ mt: '100px' }}>
      {!loading && startQuiz === false &&
        <>
          <div style={{ textAlign: 'center' }}>
            <h1>{quizData.name}</h1>
            <h4 className='secondary-text'>{quizData.questions.length} questions</h4>
            <Box sx={{ height: '300px', width: '300px', border: '1px solid black', margin: '0 auto' }}>
              <img src={quizData.image} />
            </Box>
            <Button onClick={() => setStartQuiz(true)} variant='contained' sx={{ mt: '10px', px: '100px' }}>Play</Button>
          </div>
        </>
      }

      {startQuiz &&
        <Play quiz={quizData} />
      }

    </Box>
  )
}

export default PlayQuiz