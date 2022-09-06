import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { getQuizById } from 'helpers/api';
import { api } from 'helpers/api'
import Play from './Play';

const PlayQuiz = () => {

  const { quizId } = useParams();
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [startQuiz, setStartQuiz] = useState(false)

  // temporary, supposed to use helpers api file later.
  useEffect(() => {
    const getQuiz = async () => {
      await api.post(`quiz/getQuizById`, {
        id: quizId
      })
        .then(response => {
          setData(response.data)
          setLoading(false)
          console.log(data)
        })
    }

    getQuiz()
    console.log(quizId)
  }, [])

  return (
    <Box sx={{ mt: '100px', border: '1px red solid' }}>
      {!loading && startQuiz === false &&
        <>
          <div style={{ textAlign: 'center' }}>
            <h1>{data.name}</h1>
            <h4 className='secondary-text'>{data.questions.length} questions</h4>
            <Box sx={{ height: '300px', width: '300px', border: '1px solid black', margin: '0 auto' }}>
              <img src={data.image} />
            </Box>
            <Button onClick={() => setStartQuiz(true)} variant='contained' sx={{ mt: '10px', px: '100px' }}>Play</Button>
          </div>
        </>
      }
      {startQuiz &&
        <Play quiz={data} />
      }
    </Box>
  )
}

export default PlayQuiz