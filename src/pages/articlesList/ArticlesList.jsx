import { Pagination } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import SingleArticle from '../../components/singleArticle'
import { getArticlesRequest } from '../../store/actions'

import classes from './ArticlesList.module.scss'

export default function ArticlesList({ articlesRequest }) {
  const { articlesCount, articles, loaded } = articlesRequest
  const [pagValue, setPagValue] = useState(1)

  const dispatch = useDispatch()

  return (
    <>
      {!loaded && <p>Loading...</p>}
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
              setPagValue(page)
              dispatch(getArticlesRequest(page))
              window.scrollTo(0, 0)
            }}
          />
        </div>
      )}
    </>
  )
}
