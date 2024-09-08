// import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import classNames from 'classnames'

import classes from './EditProfile.module.scss'

export default function EditProfile() {
  const [errorClasses, setErrorClasses] = useState({
    username: '',
    email: '',
    password: '',
    imageUrl: '',
  })

  const {
    register,
    handleSubmit,
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
      imageUrl: classNames({ [classes.errorInput]: error.imageUrl }),
    })
  }

  // const navigate = useNavigate()
  // const location = useLocation()

  // const fromPage = location.state?.from?.pathname || '/'

  return (
    <div className={classes.editWrapper}>
      <h1 className={classes.header}>Edit profile</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={classes.inputGroup}>
          <label htmlFor="username">
            <p>Username</p>
            <input
              className={errorClasses.username}
              id="username"
              type="text"
              placeholder="New username"
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
              placeholder="New email address"
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
            <p>New password</p>
            <input
              className={errorClasses.password}
              id="password"
              type="password"
              placeholder="New password"
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
          <label htmlFor="imageUrl">
            <p>Avatar image (url)</p>
            <input
              className={errorClasses.imageUrl}
              id="imageUrl"
              type="text"
              placeholder="Avatar image"
              {...register('imageUrl', {
                pattern: {
                  value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
                  message: 'Enter a valid URL',
                },
              })}
            />
            {errors.imageUrl && <p className={classes.error}>{errors.imageUrl.message}</p>}
          </label>
        </div>

        <button className={classes.submit} type="submit">
          Save
        </button>
      </form>
    </div>
  )
}
