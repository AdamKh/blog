import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { loginAction } from '../../store/actions'

import classes from './LoginPage.module.scss'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { err: errors } = useSelector((state) => state.user)

  const fromPage = location.state?.from?.pathname || '/'

  const [errorClasses, setErrorClasses] = useState({
    email: '',
    password: '',
  })

  const {
    register,
    handleSubmit,
    formState: { errors: errorsForm },
  } = useForm()

  const onSubmit = async (data) => {
    const result = await dispatch(loginAction({ user: { email: data.email, password: data.password } }))

    if (!result.err) {
      navigate(fromPage)
    }
  }

  const onError = (error) => {
    setErrorClasses({
      email: classNames({ [classes.errorInput]: error.email }),
      password: classNames({ [classes.errorInput]: error.password }),
    })
  }

  return (
    <div className={classes.loginWrapper}>
      <h1 className={classes.header}>Sign in</h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit, onError)}>
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
            {errors?.password && <p className={classes.error}>{errors.password}</p>}
          </label>
        </div>

        <button className={classes.submit} type="submit">
          Login
        </button>

        {errors?.['email or password'] && (
          <p className={classes.error}>Email or password {errors?.['email or password']}</p>
        )}
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
