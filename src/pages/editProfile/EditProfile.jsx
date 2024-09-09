import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import { editProfileAction } from '../../store/actions'

import classes from './EditProfile.module.scss'

export default function EditProfile() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { user, err: errors } = useSelector((state) => state.user)

  const fromPage = location.state?.from?.pathname || '/'

  const [errorClasses, setErrorClasses] = useState({
    username: '',
    email: '',
    password: '',
    imageUrl: '',
  })

  const {
    register,
    handleSubmit,
    formState: { errors: errorsForm },
  } = useForm()

  const onSubmit = async (data) => {
    await dispatch(
      editProfileAction({
        user: { username: data.username, email: data.email, password: data.password, image: data.imageUrl },
      })
    )
    if (!errors || Object.keys(errors).length === 0) navigate(fromPage)
  }

  const onError = (error) => {
    setErrorClasses({
      username: classNames({ [classes.errorInput]: error.username }),
      email: classNames({ [classes.errorInput]: error.email }),
      password: classNames({ [classes.errorInput]: error.password }),
      imageUrl: classNames({ [classes.errorInput]: error.imageUrl }),
    })
  }

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
              defaultValue={user.username}
              {...register('username', {
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
              placeholder="New email address"
              defaultValue={user.email}
              {...register('email', {
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
              })}
            />
            {errorsForm.email && <p className={classes.error}>{errorsForm.email.message}</p>}
            {errors?.email && <p className={classes.error}>{errors.email}</p>}
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
              defaultValue={user.password}
              {...register('password', {
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
            {errors?.imageUrl && <p className={classes.error}>{errors.imageUrl}</p>}
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
              defaultValue={user.imageUrl || null}
              {...register('imageUrl', {
                pattern: {
                  value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
                  message: 'Enter a valid URL',
                },
              })}
            />
            {errorsForm.imageUrl && <p className={classes.error}>{errorsForm.imageUrl.message}</p>}
            {errors?.imageUrl && <p className={classes.error}>{errors.imageUrl}</p>}
          </label>
        </div>

        <button className={classes.submit} type="submit">
          Save
        </button>
      </form>
    </div>
  )
}
