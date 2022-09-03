import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, TextField } from '@mui/material';
import { login } from 'helpers/api';
import * as yup from 'yup';
import { useFormik } from 'formik'

const Login = () => {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await login(username, password)
    navigate('/home')
    window.location.reload()
  }

  return (
    <div>
      <h1 style={{ paddingTop: '100px', textAlign: 'center' }}>Sign in</h1>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', width: '300px', paddingBottom: '100px', paddingTop: '50px' }}>
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
        <Button type="submit" onClick={(e) => handleSubmit()} variant='contained'>Log in</Button>
      </div>
    </div>
  )
}

export default Login