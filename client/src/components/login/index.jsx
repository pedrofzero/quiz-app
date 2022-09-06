import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, TextField } from '@mui/material';
import { login } from 'helpers/api';
import * as yup from 'yup';
import { useFormik } from 'formik'
import useWindowSize from 'hooks/useWindowSize';

const Login = () => {

  const size = useWindowSize()

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
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto',  alignItems: 'center', justifyContent: 'center', paddingBottom: '100px', paddingTop: '50px' }}>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          label={"Enter your username"}
          sx={{ pb: '30px', width: `${size < 600 ? '25ch' : '50ch'}` }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
          label={"Enter your password"}
          sx={{ pb: '30px', width: `${size < 600 ? '25ch' : '50ch'}` }}
        />
        <Button type="submit" onClick={(e) => handleSubmit()} variant='contained' sx={{ background: '#476442', width: `${size < 600 ? '25ch' : '50ch'}` }}>Log in</Button>
      </div>
    </div>
  )
}

export default Login