import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import { api, register } from 'helpers/api';
import { v4 as uuid } from 'uuid'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup
    .string('Enter your e-mail')
    .email('Enter a valid e-mail')
    .required('Email is required'),
  username: yup
    .string('Enter your password')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be at least 8 characters')
    .required('Password is required')
})

const Register = () => {

  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await register(values.email, values.username, values.password)
      navigate('/login')
    },
  });


  return (
    <div>
      <h1 style={{ paddingTop: '100px', textAlign: 'center' }}>Register</h1>
      <form onClick={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', width: '300px', paddingBottom: '100px', paddingTop: '50px' }}>
        <TextField
          style={{ paddingBottom: '30px' }}
          id="email"
          name="email"
          label={"E-mail"}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          style={{ paddingBottom: '30px' }}
          id="username"
          name="username"
          label={"Username"}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          style={{ paddingBottom: '30px' }}
          id="password"
          name="password"
          type='password'
          label={"Password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button variant='contained'>Register</Button>
      </form>
    </div>
  )
}

export default Register