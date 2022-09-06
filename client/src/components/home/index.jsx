import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { api, createQuiz, refreshToken } from 'helpers/api'
import { Box, Button } from '@mui/material';

const Home = () => {

  const [token, setToken] = useState(localStorage.getItem('access_token'))
  const user = localStorage.getItem('user')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [randomQuiz, setRandomQuiz] = useState([]);

  useEffect(() => {
    api.get(`quiz/getRandomQuiz`)
      .then((response => {
        console.log(response)
        setRandomQuiz(response.data[0])
        setLoading(false)
      }))
  }, [])

  const test = () => {
    refreshToken()
  }

  return (
    <div>
      <Box sx={{ mt: '100px', textAlign: 'center' }}>
        {!loading && randomQuiz &&
          <>
            <h1>Hey {user}, check out this quiz!</h1>
            {/* 300px seems to be perfect for mobile at least on my phone. probably get a condition here for bigger on pcs. */}
            <Box sx={{ height: '300px', width: '300px', margin: '0 auto' }}>
              <img style={{ border: '1px solid black', height: '90%', width: '90%' }} />
              <h3>{randomQuiz.name}</h3>
              <p className='secondary-text'>{randomQuiz.description}</p>
              <Button variant='contained' onClick={() => navigate(`/play/${randomQuiz._id}`)}>Play</Button>
              {/* <button onClick={() => test()}>Refresh Token</button> */}

            </Box>
          </>
        }

      </Box>
    </div>

  )
}

export default Home