import { HeartOutlined, HeartTwoTone, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Popconfirm } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import Markdown from 'markdown-to-jsx'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import BlogService from '../../services/blogService'
import Tag from '../tags'

import classes from './SingleArticle.module.scss'

const blogService = new BlogService()

export default function SingleArticle({ article, articleBySlug }) {
  const navigate = useNavigate()
  const { loggedIn, user } = useSelector((state) => state.user)

  const [favorited, setFavorited] = useState(article.favorited)
  const [favoritesCount, setFavoritesCount] = useState(article.favoritesCount)

  const handleLike = async () => {
    if (!loggedIn) return
    if (!favorited) {
      await blogService.like(article.slug)
      setFavorited(true)
      setFavoritesCount(favoritesCount + 1)
    } else {
      await blogService.unlike(article.slug)
      setFavorited(false)
      setFavoritesCount(favoritesCount - 1)
    }
  }

  return (
    <article className={`${articleBySlug && classes.articleSlug} ${classes.article}`}>
      <header className={classes.articleHeader}>
        <div className={classes.left}>
          <div className={classes.leftTop}>
            {articleBySlug ? (
              <h1 className={classes.articleTitleSlug}>{article.title}</h1>
            ) : (
              <Link to={article.slug} className={classes.articleTitle}>
                {article.title}
              </Link>
            )}
            <button type="button" onClick={handleLike} className={classes.buttonLike}>
              {favorited ? <HeartTwoTone twoToneColor="#FF0707" /> : <HeartOutlined />}
              {favoritesCount}
            </button>
          </div>
          <div className={classes.leftBottom}>
            {article.tagList.map((tag) => (
              <Tag key={uuidv4()} tag={tag} />
            ))}
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.rightLeft}>
            <p className={classes.authorName}>{article.author.username}</p>
            <p className={classes.date}>{format(parseISO(article.createdAt), 'MMMM d, yyyy')}</p>
          </div>
          <div className={classes.rightRight}>
            <Avatar size={48} src={article.author.image} icon={<UserOutlined />} />
          </div>
        </div>
      </header>

      <div className={classes.descriptionWrapper}>
        <p className={articleBySlug ? classes.descriptionSlug : classes.description}>
          <Markdown>{article.description}</Markdown>
        </p>

        {articleBySlug && loggedIn && article.author.username === user.username && (
          <div className={classes.buttons}>
            <Popconfirm
              title="Delete the article"
              description="Are you sure to delete this article?"
              onConfirm={() => {
                blogService.deleteArticle(article.slug)
                navigate('/', { replace: true })
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button className={classes.buttonDelete}>Delete</Button>
            </Popconfirm>
            <Link to={`/articles/${article.slug}/edit`}>
              <Button className={classes.buttonEdit}>Edit</Button>
            </Link>
          </div>
        )}
      </div>

      <div className={classes.articleBody}>{articleBySlug && <Markdown>{article.body}</Markdown>}</div>
    </article>
  )
}
