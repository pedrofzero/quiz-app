import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import { api } from 'helpers/api';
import { v4 as uuid } from 'uuid'

const Register = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    api.post(`api/users/createUser`, {
      id: uuid().slice(0, 10).replace(/\D/g, ''),
      email: email,
      username: username,
      password: password
    })
      .then(response => {
        console.log(response.data)
      })
  }

  return (
    <div>
      <h1 style={{ paddingTop: '100px', textAlign: 'center' }}>Register</h1>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', width: '400px', paddingBottom: '100px' }}>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label={"E-mail"}
          style={{ paddingBottom: '30px' }}
        />
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          label={"Username"}
          style={{ paddingBottom: '30px' }}
        />
        <TextField
        type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label={"Password"}
          style={{ paddingBottom: '30px' }}
        />
        <Button onClick={(e) => handleSubmit(e)} variant='contained'>Register</Button>
      </div>
    </div>
  )
}

export default Register