import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import * as pathes from '../../constants/pathes'
import { createNewUserAction } from '../../store/actions'

import classes from './RegisterPage.module.scss'

export default function RegisterPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { loggedIn, err: errors } = useSelector((state) => state.user)

  const fromPage = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (loggedIn) {
      navigate(fromPage, {
        replace: true,
        state: {
          notification: {
            message: 'You already logged in!',
            description: 'Log out of your current account to log in to another one',
          },
        },
      })
    }
  }, [fromPage, loggedIn, navigate])

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
    formState: { errors: errorsForm },
  } = useForm()

  const onSubmit = async (data) => {
    const result = await dispatch(
      createNewUserAction({ user: { username: data.username, email: data.email, password: data.password } })
    )

    if (!result.err) {
      navigate(fromPage, { replace: true })
    }
  }

  const onError = (error) => {
    setErrorClasses({
      username: classNames({ [classes.errorInput]: error.username }),
      email: classNames({ [classes.errorInput]: error.email }),
      password: classNames({ [classes.errorInput]: error.password }),
      repeatPassword: classNames({ [classes.errorInput]: error.repeatPassword }),
    })
  }

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
            {errorsForm.username && <p className={classes.error}>{errorsForm.username.message}</p>}
            {errors?.username && <p className={classes.error}>{errors.username}</p>}
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
            {errorsForm.email && <p className={classes.error}>{errorsForm.email.message}</p>}
            {errors?.email && <p className={classes.error}>{errors.email}</p>}
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
            {errorsForm.password && <p className={classes.error}>{errorsForm.password.message}</p>}
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
            {errorsForm.repeatPassword && <p className={classes.error}>{errorsForm.repeatPassword.message}</p>}
          </label>
        </div>

        <div className={`${classes.inputGroup} ${classes.inputCheckbox}`}>
          <label htmlFor="agree">
            <input id="agree" type="checkbox" defaultChecked {...register('terms', { required: true })} />{' '}
            <p>I agree to the processing of my personal information</p>
          </label>
          {errorsForm.terms && <p className={classes.error}>You must agree to continue</p>}
        </div>

        <button className={classes.submit} type="submit">
          Create
        </button>

        <footer className={classes.footer}>
          <p>
            Already have an account?{' '}
            <Link className={classes.Link} to={pathes.signInPath}>
              Sign In
            </Link>
            .
          </p>
        </footer>
      </form>
    </div>
  )
}
