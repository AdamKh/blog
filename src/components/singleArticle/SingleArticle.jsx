import { HeartOutlined, HeartTwoTone, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import Markdown from 'markdown-to-jsx'

import Tag from '../tags'

import classes from './SingleArticle.module.scss'

export default function SingleArticle({ article, articleBySlug }) {
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
            {!article.favorited && (
              <span>
                <HeartOutlined /> {article.favoritesCount}
              </span>
            )}
            {article.favorited && (
              <span>
                <HeartTwoTone twoToneColor="#FF0707" /> {article.favoritesCount}
              </span>
            )}
          </div>
          <div className={classes.leftBottom}>
            {article.tagList.map((tag) => (
              <Tag key={`${article.slug + tag}`} tag={tag} />
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
      <p className={articleBySlug ? classes.descriptionSlug : classes.description}>
        <Markdown>{article.description}</Markdown>
      </p>
      <div className={classes.articleBody}>{articleBySlug && <Markdown>{article.body}</Markdown>}</div>
    </article>
  )
}
