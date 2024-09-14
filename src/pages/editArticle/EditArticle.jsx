import { Button } from 'antd'
import { useForm, useFieldArray } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import BlogService from '../../services/blogService'
import { getArticle } from '../../store/actions'
import Spinner from '../../components/spinner'
import ErrorHundler from '../../components/error/error-handler'

import classes from './EditArticle.module.scss'

const blogService = new BlogService()

export default function EditArticle() {
  const { article, loaded, err } = useSelector((state) => state.articleBySlug)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { slug } = useParams()

  useEffect(() => {
    dispatch(getArticle(slug))
  }, [dispatch, slug])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags',
  })

  useEffect(() => {
    if (loaded) {
      reset({
        title: article.title,
        shortDescription: article.description,
        text: article.body,
        tags: article.tagList.map((tag) => ({ value: tag })),
      })
    }
  }, [loaded, article, reset])

  const validateUniqueTags = (tags) => {
    const tagValues = tags.map((tag) => tag.value.trim().toLowerCase())
    const hasDuplicates = tagValues.some((tag, idx) => tagValues.indexOf(tag) !== idx)
    return !hasDuplicates || 'Tags must be unique!'
  }

  const onSubmit = async (data) => {
    const tagValues = data.tags.map((tag) => tag.value.trim())

    const uniqueCheck = validateUniqueTags(data.tags)

    if (uniqueCheck !== true) {
      setError('tags', { type: 'manual', message: uniqueCheck })
      return
    }

    const emptyTag = tagValues.some((tag) => tag === '')
    if (emptyTag) {
      setError('tags', {
        type: 'manual',
        message:
          "Tag shoudn't be empty! If you don't want to provide the Tag, please delete the tag before sending form",
      })
      return
    }

    clearErrors('tags')

    const body = {
      article: {
        title: data.title,
        description: data.shortDescription,
        body: data.text,
        tagList: tagValues,
      },
    }

    await blogService.editArticle(slug, body)
    navigate('/')
  }

  return (
    <>
      {!loaded && <Spinner />}
      {err && <ErrorHundler errorMessage={err.message} errorDescription={err.description} />}
      {loaded && (
        <div className={classes.pageWrapper}>
          <header className={classes.header}>Edit article</header>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.inputGroup}>
              <label htmlFor="title">
                <p>Title</p>
                <input id="title" type="text" placeholder="Title" {...register('title')} defaultValue={article.title} />
              </label>
            </div>

            <div className={classes.inputGroup}>
              <label htmlFor="shortDescription">
                <p>Short description</p>
                <input
                  id="shortDescription"
                  type="text"
                  placeholder="Title"
                  {...register('shortDescription')}
                  defaultValue={article.description}
                />
              </label>
            </div>

            <div className={classes.inputGroup}>
              <label htmlFor="text">
                <p>Text</p>
                <textarea
                  id="text"
                  type="text"
                  placeholder="Text"
                  rows={7}
                  {...register('text')}
                  defaultValue={article.body}
                />
              </label>
            </div>

            <div className={`${classes.inputGroup} ${classes.tags}`}>
              <p>Tags</p>

              {fields.map((field, index) => (
                <>
                  <div key={field.id} className={classes.tagWrapper}>
                    <input
                      type="text"
                      placeholder="Tag"
                      {...register(`tags.${index}.value`, {
                        required:
                          "Tag shoudn't be empty!" +
                          " If you don't want to provide the Tag, please delete the tag before sending form",
                      })}
                      defaultValue={field.value}
                    />

                    <Button danger onClick={() => remove(index)} className={classes.deleteTagButton}>
                      Delete
                    </Button>

                    {index === fields.length - 1 && (
                      <Button onClick={() => append({ value: '' })} className={classes.addTagButton}>
                        Add tag
                      </Button>
                    )}
                  </div>
                  {errors.tags?.[index]?.value && <p className={classes.error}>{errors.tags[index].value.message}</p>}
                </>
              ))}

              {fields.length === 0 && (
                <Button onClick={() => append({ value: '' })} className={classes.addTagButton}>
                  Add tag
                </Button>
              )}

              {errors.tags && <p className={classes.error}>{errors.tags.message}</p>}
            </div>

            <button type="submit" className={classes.submit}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  )
}
