import { Routes, Route, Navigate } from 'react-router-dom'

import Header from '../header'
import ArticleList from '../../pages/articlesList'
import ArticleBySlug from '../../pages/articleBySlug'

import classes from './App.module.scss'

export default function App() {
  return (
    <div className={classes.App}>
      <Header />
      <main className={classes.main}>
        <Routes>
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/" element={<Navigate to="/articles" replace />} />
          <Route path="/articles/articleBySlug" element={<ArticleBySlug />} />
        </Routes>
      </main>
    </div>
  )
}
