import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import { api } from 'helpers/api';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post(`auth/login`, {
      username: username,
      password: password
    })
      .then(response => {
        console.log(response.data)
        localStorage.setItem("user_token", response.data.accessToken)
      })
  }

  return (
    <div>
      <h1 style={{ paddingTop: '100px', textAlign: 'center' }}>Sign in</h1>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', width: '400px', paddingBottom: '100px' }}>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          label={"Username"}
          style={{ paddingBottom: '30px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label={"Password"}
          style={{ paddingBottom: '30px' }}
        />
        <Button onClick={(e) => handleSubmit(e)} variant='contained'>Log in</Button>
      </div>
    </div>
  )
}

export default Login