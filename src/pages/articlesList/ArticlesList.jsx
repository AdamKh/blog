import { Pagination } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SingleArticle from '../../components/singleArticle'
import Spinner from '../../components/spinner'
import { getArticlesRequest, setPaginationPage } from '../../store/actions'

import classes from './ArticlesList.module.scss'

export default function ArticlesList({ articlesRequest }) {
  const { articlesCount, articles, loaded } = articlesRequest
  const dispatch = useDispatch()
  const pagValue = useSelector((state) => state.pagValue)

  useEffect(() => {
    dispatch(getArticlesRequest(pagValue))
  }, [dispatch, pagValue])

  return (
    <>
      {!loaded && <Spinner />}
      {loaded && (
        <div className={classes.articleList}>
          {articles.map((article) => (
            <SingleArticle key={article.slug} article={article} />
          ))}

          <Pagination
            className={classes.pagination}
            align="center"
            current={pagValue}
            showSizeChanger={false}
            total={articlesCount}
            pageSize={20}
            onChange={(page) => {
              dispatch(setPaginationPage(page))
              window.scrollTo(0, 0)
            }}
          />
        </div>
      )}
    </>
  )
}
