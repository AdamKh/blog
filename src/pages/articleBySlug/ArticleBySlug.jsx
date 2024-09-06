/* eslint-disable max-len */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import SingleArticle from '../../components/singleArticle'
import Spinner from '../../components/spinner'
import { getArticle } from '../../store/actions'

export default function ArticleBySlug() {
  const dispatch = useDispatch()
  const { slug } = useParams()

  useEffect(() => {
    dispatch(getArticle(slug))
  }, [dispatch, slug])

  const articleBySlug = useSelector((state) => state.articleBySlug)

  return (
    <>
      {!articleBySlug.loaded && <Spinner />}
      {articleBySlug.loaded && <SingleArticle article={articleBySlug.article} articleBySlug />}
    </>
  )
}
