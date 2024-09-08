// import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import classNames from 'classnames'

import classes from './LoginPage.module.scss'

export default function LoginPage() {
  const [emailClasses, setEmailClasses] = useState('')
  const [passwordClasses, setPasswordClasses] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data) // Здесь можно обработать данные, например, отправить на сервер
  }

  const onError = (error) => {
    console.log(error)
    setEmailClasses(classNames({ [classes.errorInput]: error.email }))
    setPasswordClasses(classNames({ [classes.errorInput]: error.password }))
  }

  // const navigate = useNavigate()
  // const location = useLocation()

  // const fromPage = location.state?.from?.pathname || '/'

  return (
    <div className={classes.loginWrapper}>
      <h1 className={classes.header}>Sign in</h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={classes.inputGroup}>
          <label htmlFor="email">
            <p>Email address</p>
            <input
              className={emailClasses}
              id="email"
              type="email"
              placeholder="Email address"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
              })}
            />
            {errors.email && <p className={classes.error}>{errors.email.message}</p>}
          </label>
        </div>

        <div className={classes.inputGroup}>
          <label htmlFor="password">
            <p>Password</p>
            <input
              className={passwordClasses}
              id="password"
              type="password"
              placeholder="Password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
                maxLength: {
                  value: 40,
                  message: 'Password must be less than 40 characters long',
                },
              })}
            />
            {errors.password && <p className={classes.error}>{errors.password.message}</p>}
          </label>
        </div>

        <button className={classes.submit} type="submit">
          Login
        </button>

        <footer className={classes.footer}>
          <p>
            Don’t have an account?{' '}
            <Link className={classes.Link} to="/sign-up">
              Sign Up
            </Link>
            .
          </p>
        </footer>
      </form>
    </div>
  )
}
