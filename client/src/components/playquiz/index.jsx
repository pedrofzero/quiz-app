import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { getQuizById } from 'helpers/api';
import { api } from 'helpers/api'
import Play from './Play';

const PlayQuiz = () => {

  const { quizId } = useParams();
  const [loading, setLoading] = useState(true)
  const [quiz, setQuiz] = useState([])
  const [quizCreator, setQuizCreator] = useState('')
  const [startQuiz, setStartQuiz] = useState(false)

  // temporary, supposed to use helpers api file later.
  useEffect(() => {

    const getQuiz = async () => {
      await api.post(`quiz/getQuizById`, {
        id: quizId
      })
        .then(response => {
          setQuiz(response.data)
          console.log(quiz)
          setLoading(false)
        })
    }

    getQuiz()

  }, [])

  return (
    <Box sx={{ mt: '100px' }}>
      {!loading && startQuiz === false &&
        <>
          <div style={{ textAlign: 'center' }}>
            <h1>{quiz.name}</h1>
            <h4 className='secondary-text'>{quiz.questions.length} questions</h4>
            <Box sx={{ height: '300px', width: '300px', border: '1px solid black', margin: '0 auto' }}>
              <img src={`http://45.136.70.211:8000/images/${quiz.image}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Button onClick={() => setStartQuiz(true)} variant='contained' sx={{ mt: '10px', px: '100px', mb: '50px' }}>Play</Button>
            <h4 className='secondary-text'>This quiz has been played {quiz.timesPlayed} times.</h4>

          </div>
        </>
      }

      {startQuiz &&
        <Play quiz={quiz} />
      }

    </Box>
  )
}

export default PlayQuiz