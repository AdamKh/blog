import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SingleArticle from '../../components/singleArticle'
import Spinner from '../../components/spinner'
import Pagination from '../../components/pagination'
import ErrorHundler from '../../components/error/error-handler'
import { getArticlesRequest } from '../../store/actions'

import classes from './ArticlesList.module.scss'

export default function ArticlesList({ articlesRequest }) {
  const { articlesCount, articles, loaded, err } = articlesRequest
  const dispatch = useDispatch()
  const pagValue = useSelector((state) => state.pagValue)

  useEffect(() => {
    dispatch(getArticlesRequest(pagValue))
  }, [dispatch, pagValue])

  return (
    <>
      {!loaded && <Spinner />}
      {err && <ErrorHundler errorMessage={err.message} errorDescription={err.description} />}
      {loaded && (
        <div className={classes.articleList}>
          {articles.map((article) => (
            <SingleArticle key={article.slug} article={article} />
          ))}

          <Pagination articlesCount={articlesCount} />
        </div>
      )}
    </>
  )
}
