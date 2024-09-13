import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import SingleArticle from '../../components/singleArticle'
import Spinner from '../../components/spinner'
import ErrorHundler from '../../components/error/error-handler'
import { getArticle } from '../../store/actions'

export default function ArticleBySlug() {
  const { article, loaded, err } = useSelector((state) => state.articleBySlug)
  const dispatch = useDispatch()
  const { slug } = useParams()

  useEffect(() => {
    dispatch(getArticle(slug))
  }, [dispatch, slug])

  return (
    <>
      {!loaded && <Spinner />}
      {err && <ErrorHundler errorMessage={err.message} errorDescription={err.description} />}
      {loaded && <SingleArticle article={article} articleBySlug />}
    </>
  )
}
