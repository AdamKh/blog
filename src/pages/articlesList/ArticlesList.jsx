/* eslint-disable max-len */
// import { Link } from 'react-router-dom'
import { HeartOutlined, HeartTwoTone, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { format, parseISO } from 'date-fns'
import Markdown from 'markdown-to-jsx'

// import { shortenText } from '../../utils'

import classes from './ArticlesList.module.scss'

function Article({ article }) {
  return (
    <article className={classes.article}>
      <header className={classes.articleHeader}>
        <div className={classes.left}>
          <div className={classes.leftTop}>
            <p className={classes.articleTitle}>{article.title}</p>
            {!article.favorited && <HeartOutlined />}
            {article.favorited && <HeartTwoTone twoToneColor="#FF0707" />}
          </div>
          <div className={classes.leftBottom}>
            {article.tagList.map((tag) => (
              <span className={classes.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.rightLeft}>
            <p className={classes.authorName}>{article.author.username}</p>
            <p className={classes.date}>{format(parseISO(article.createdAt), 'MMMM d, yyyy')}</p>
          </div>
          <div className={classes.rightRight}>
            <Avatar size={48} icon={<UserOutlined />} />
          </div>
        </div>
      </header>
      <p className={classes.description}>
        <Markdown>{article.description}</Markdown>
      </p>
    </article>
  )
}

export default function ArticlesList() {
  const articleList = [
    {
      slug: 'zagolovok-hlsq43',
      title: 'Заголовок',
      description: 'Короткое описание',
      body: 'Текст\n# Заголовок\n## Заголовок',
      createdAt: '2024-09-02T15:41:47.289Z',
      updatedAt: '2024-09-04T14:26:46.802Z',
      tagList: ['tag 1', 'tag 3', 'tag 5', 'tag 6'],
      favorited: false,
      favoritesCount: 2,
      author: {
        username: 'mailmann',
        image:
          'https://media.king5.com/assets/KING/images/e975f9f0-9d30-4ede-b119-a87f8775d8b0/e975f9f0-9d30-4ede-b119-a87f8775d8b0_1920x1080.jpg',
        following: false,
      },
    },
    {
      slug: 'hello-v6ey10',
      title: 'Hello',
      description:
        'Hello ⢀⣀⣰⠟⣷⡀⠀⠀⠀⢀⣘⡞⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣻⣏⣰⢯⠗⠀⠀⠀⢹⣿⣇⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⣯⣟⠞⠀⠀⠀⠀⣸⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠏⠉⠉⢹⡀⠀⠀⢀⡼⠛⠉⠉⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⠈⡇⠀⢠⠎⠀⠀⠀⠀⢸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⢸⠁⢀⡏⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⠀⠀⣿⠀⣼⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠈⡏⢠⡏⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⣸⠃⣼⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⣿⠀⣿⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⣠⣦⡀⡟⠀⡇⢀⣴⣆⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⢠⣿⣿⣿⠁⢰⠀⣾⣿⣿⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣧⠘⣿⣿⢻⠀⠸⠀⢿⣿⡟⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡆⠈⠁⢸⠀⠀⡇⠀⠉⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⢸⠀⠀⣇⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⠀⢸⡀⠀⣟⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣄⠀⠀⠀⠸⡆⠀⣧⣀⣿⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢷⣲⡦⣄⣹⡤⠞⠉⠙⣇⣸⣧⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢉⡿⢯⣷⡄⠀⠀⠈⠉⡁⠉⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠾⣄⣈⠉⠀⠀⢀⣀⡸⠟⠦⠀⠙⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠃⠀⠀⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠸⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡶⠶⠶⠶⠤⢄⣖⡝⠲⣄⡏⠿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠾⢹⡁⣠⠶⠚⢦⣀⣀⣠⡤⠴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⣰⠶⠶⢦⣄⡼⠁⢀⡼⠧⠀⣿⠳⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡴⠚⠉⠀⠴⠛⠁⠀⢸⣏⣉⣉⣰⡀⢀⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡾⢹⠀⠀⠘⢧⣄⣠⡞⠁⠀⠀⢸⣄⡴⢿⡇⠀⠀⠀⣴⣖⠶⠶⠶⢶⡶⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢿⢹⠏⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⣀⣤⠤⠖⠲⣤⢸⡇⢸⣦⣄⡀⠀⣠⠏⠀⠀⠀⠀⠈⠉⠀⢸⡇⠀⣠⠞⠁⠹⣄⣠⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠳⣶⠒⢫⠏⠀⣼⡁⠀⠀⢀⡤⠖⠢⢤⡀⠀⠀ // ⠀⣠⠞⠉⠀⠀⣠⠔⠛⠉⠙⠘⠃⠀⢙⡶⠃⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⠞⠁⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣈⠷⠋⠀⠀⠁⠈⠙⣴⠋⠀⠀⠀⠀⠙⢆⠀ // ⡼⠃⠀⣠⣿⣿⠃⠀⠀⠀⠀⠀⠀⢸⢻⣅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠉⠀⠀⠀⠀⠀⠀⠀⢘⣦⣾⠀⠀⠀⠀⠘⣗ // ⡇⠀⠀⠀⠰⠃⠀⠀⠀⠀⠀⠀⠀⣼⣦⣈⠙⠒⢤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠈⠃⠀⠀⠀⠀⢸ // ⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣟⢫⣿⣦⣄⠀⠉⠛⠓⠲⢤⣤⣤⣀⣀⣀⣀⣀⣀⣀⣀⣀⣤⣤⣤⠤⠖⠚⠛⢋⠁⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⢸ // ⠸⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠟⠯⣾⣿⣿⣿⣿⣿⣿⣶⣤⡴⠛⠛⠓⠲⠲⠶⠾⠿⣄⠀⠀⠀⢀⣀⣀⣤⣤⣶⣶⣿⡀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡷ // ⠀⠘⢦⡀⠀⠀⠀⠀⠀⠀⠀⣿⡀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⠃⣼⣿⣿⣿⣿⣿⣿⡒⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠁ // ⠀⠀⠀⠙⢦⣄⡀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀⠀⠀⠉⠛⠛⢿⡇⢸⣿⣿⣿⣿⣿⣿⠆⢸⣿⣿⣿⣿⣿⣿⠿⠿⠟⠛⠛⠙⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠂⠀⠀ // ⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣬⣥⣄⣠⣁⣤⣭⡤⠞⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣨⡗⠢⠤⢤⣤⣤⡤⠴⠚⠋⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡇⠀⠀⠹⡽⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢦⣀⡀⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⢷⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣀⡁⠀⠀⠀⢦⣀⣀⡀⢳⡀⠀⠀⢿⣧⡀⠀⢀⣀⣀⣀⣠⠤⠄⠀⠀⠉⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠉⠙⠒⢦⣤⣠⠏⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠹⣇⣀⣀⣀⣀⣠⢤⠶⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⣠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⣏⠀⠀⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠤⠴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣇⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',

      body: '⢀⣀⣰⠟⣷⡀⠀⠀⠀⢀⣘⡞⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣻⣏⣰⢯⠗⠀⠀⠀⢹⣿⣇⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⣯⣟⠞⠀⠀⠀⠀⣸⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠏⠉⠉⢹⡀⠀⠀⢀⡼⠛⠉⠉⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⠈⡇⠀⢠⠎⠀⠀⠀⠀⢸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⢸⠁⢀⡏⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⠀⠀⣿⠀⣼⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠈⡏⢠⡏⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⣸⠃⣼⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⣿⠀⣿⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⣠⣦⡀⡟⠀⡇⢀⣴⣆⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⢠⣿⣿⣿⠁⢰⠀⣾⣿⣿⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣧⠘⣿⣿⢻⠀⠸⠀⢿⣿⡟⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡆⠈⠁⢸⠀⠀⡇⠀⠉⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⢸⠀⠀⣇⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⠀⢸⡀⠀⣟⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣄⠀⠀⠀⠸⡆⠀⣧⣀⣿⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢷⣲⡦⣄⣹⡤⠞⠉⠙⣇⣸⣧⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢉⡿⢯⣷⡄⠀⠀⠈⠉⡁⠉⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠾⣄⣈⠉⠀⠀⢀⣀⡸⠟⠦⠀⠙⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠃⠀⠀⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠸⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡶⠶⠶⠶⠤⢄⣖⡝⠲⣄⡏⠿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠾⢹⡁⣠⠶⠚⢦⣀⣀⣠⡤⠴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⣰⠶⠶⢦⣄⡼⠁⢀⡼⠧⠀⣿⠳⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡴⠚⠉⠀⠴⠛⠁⠀⢸⣏⣉⣉⣰⡀⢀⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡾⢹⠀⠀⠘⢧⣄⣠⡞⠁⠀⠀⢸⣄⡴⢿⡇⠀⠀⠀⣴⣖⠶⠶⠶⢶⡶⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢿⢹⠏⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⣀⣤⠤⠖⠲⣤⢸⡇⢸⣦⣄⡀⠀⣠⠏⠀⠀⠀⠀⠈⠉⠀⢸⡇⠀⣠⠞⠁⠹⣄⣠⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠳⣶⠒⢫⠏⠀⣼⡁⠀⠀⢀⡤⠖⠢⢤⡀⠀⠀\n// ⠀⣠⠞⠉⠀⠀⣠⠔⠛⠉⠙⠘⠃⠀⢙⡶⠃⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⠞⠁⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣈⠷⠋⠀⠀⠁⠈⠙⣴⠋⠀⠀⠀⠀⠙⢆⠀\n// ⡼⠃⠀⣠⣿⣿⠃⠀⠀⠀⠀⠀⠀⢸⢻⣅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠉⠀⠀⠀⠀⠀⠀⠀⢘⣦⣾⠀⠀⠀⠀⠘⣗\n// ⡇⠀⠀⠀⠰⠃⠀⠀⠀⠀⠀⠀⠀⣼⣦⣈⠙⠒⢤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠈⠃⠀⠀⠀⠀⢸\n// ⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣟⢫⣿⣦⣄⠀⠉⠛⠓⠲⢤⣤⣤⣀⣀⣀⣀⣀⣀⣀⣀⣀⣤⣤⣤⠤⠖⠚⠛⢋⠁⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⢸\n// ⠸⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠟⠯⣾⣿⣿⣿⣿⣿⣿⣶⣤⡴⠛⠛⠓⠲⠲⠶⠾⠿⣄⠀⠀⠀⢀⣀⣀⣤⣤⣶⣶⣿⡀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡷\n// ⠀⠘⢦⡀⠀⠀⠀⠀⠀⠀⠀⣿⡀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⠃⣼⣿⣿⣿⣿⣿⣿⡒⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠁\n// ⠀⠀⠀⠙⢦⣄⡀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀⠀⠀⠉⠛⠛⢿⡇⢸⣿⣿⣿⣿⣿⣿⠆⢸⣿⣿⣿⣿⣿⣿⠿⠿⠟⠛⠛⠙⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠂⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣬⣥⣄⣠⣁⣤⣭⡤⠞⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣨⡗⠢⠤⢤⣤⣤⡤⠴⠚⠋⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡇⠀⠀⠹⡽⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢦⣀⡀⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⢷⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣀⡁⠀⠀⠀⢦⣀⣀⡀⢳⡀⠀⠀⢿⣧⡀⠀⢀⣀⣀⣀⣠⠤⠄⠀⠀⠉⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠉⠙⠒⢦⣤⣠⠏⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠹⣇⣀⣀⣀⣀⣠⢤⠶⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⣠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⣏⠀⠀⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠤⠴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣇⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n\nПоказать меньше\nУспешный вход в систему\nНаписать в OxY\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
      createdAt: '2024-09-03T17:31:32.286Z',
      updatedAt: '2024-09-04T10:55:50.108Z',
      tagList: ['1', '2', '3'],
      favorited: false,
      favoritesCount: 3,
      author: {
        username: 'artem26245',
        bio: 'I love SPB.',
        image: 'https://i.pinimg.com/originals/ce/dc/3d/cedc3debaf6cd366755ddcc76e457450.jpg',
        following: false,
      },
    },
    {
      slug: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy-y94ptf',
      title:
        'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
      description:
        'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
      body: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
      createdAt: '2024-09-02T13:03:52.340Z',
      updatedAt: '2024-09-03T11:53:47.349Z',
      tagList: [
        'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
      ],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'test4444',
        image: 'https://pbs.twimg.com/profile_images/1607914109378658304/Pn8M2amG_400x400.jpg',
        following: false,
      },
    },
  ]

  return (
    <div className={classes.articleList}>
      {articleList.map((article) => (
        <Article article={article} />
      ))}
    </div>
  )
}
