import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, TextField } from '@mui/material';
import { api } from 'helpers/api';
import { login } from 'helpers/api';
import { useAuth } from 'hooks/useAuth';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await login(username, password)
    navigate('/home')
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
        <Button onClick={(e) => handleSubmit()} variant='contained'>Log in</Button>
      </div>
    </div>
  )
}

export default Login