// import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import classNames from 'classnames'

import classes from './RegisterPage.module.scss'

export default function RegisterPage() {
  const [errorClasses, setErrorClasses] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data) // Здесь можно обработать данные, например, отправить на сервер
  }

  const onError = (error) => {
    console.log('error', error)
    setErrorClasses({
      username: classNames({ [classes.errorInput]: error.username }),
      email: classNames({ [classes.errorInput]: error.email }),
      password: classNames({ [classes.errorInput]: error.password }),
      repeatPassword: classNames({ [classes.errorInput]: error.repeatPassword }),
    })
  }

  // const navigate = useNavigate()
  // const location = useLocation()

  // const fromPage = location.state?.from?.pathname || '/'

  return (
    <div className={classes.registerWrapper}>
      <h1 className={classes.header}>Create new account</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={classes.inputGroup}>
          <label htmlFor="username">
            <p>Username</p>
            <input
              className={errorClasses.username}
              id="username"
              type="text"
              placeholder="Username"
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters long',
                },
                maxLength: {
                  value: 20,
                  message: 'Username must be less than 20 characters long',
                },
              })}
            />
            {errors.username && <p className={classes.error}>{errors.username.message}</p>}
          </label>
        </div>

        <div className={classes.inputGroup}>
          <label htmlFor="email">
            <p>Email address</p>
            <input
              className={errorClasses.email}
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
              className={errorClasses.password}
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

        <div className={classes.inputGroup}>
          <label htmlFor="repeatPassword">
            <p>Repeat password</p>
            <input
              className={errorClasses.repeatPassword}
              id="repeatPassword"
              type="password"
              placeholder="Password"
              {...register('repeatPassword', {
                required: 'Repeat password is required',
                validate: (value) => value === watch('password') || 'Passwords do not match',
              })}
            />
            {errors.repeatPassword && <p className={classes.error}>{errors.repeatPassword.message}</p>}
          </label>
        </div>

        <div className={`${classes.inputGroup} ${classes.inputCheckbox}`}>
          <label htmlFor="agree">
            <input id="agree" type="checkbox" defaultChecked {...register('terms', { required: true })} />{' '}
            <p>I agree to the processing of my personal information</p>
          </label>
          {errors.terms && <p className={classes.error}>You must agree to continue</p>}
        </div>

        <button className={classes.submit} type="submit">
          Create
        </button>

        <footer className={classes.footer}>
          <p>
            Already have an account?{' '}
            <Link className={classes.Link} to="/sign-in">
              Sign In
            </Link>
            .
          </p>
        </footer>
      </form>
    </div>
  )
}
