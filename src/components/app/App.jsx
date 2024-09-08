import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../layout'
import ArticleList from '../../pages/articlesList'
import ArticleBySlug from '../../pages/articleBySlug'
import LoginPage from '../../pages/loginPage'
import RegisterPage from '../../pages/registerPage'
import EditProfile from '../../pages/editProfile'
// import RequireAuth from '../../hoc/RequireAuth'
import { getArticlesRequest } from '../../store/actions/index'

export default function App() {
  const dispatch = useDispatch()
  const articlesRequest = useSelector((state) => state.articleRequest)
  // const { articlesCount, articles } = articlesRequest

  useEffect(() => {
    dispatch(getArticlesRequest())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/articles" replace />} />
        <Route path="articles" element={<ArticleList articlesRequest={articlesRequest} />} />
        <Route path="articles/:slug" element={<ArticleBySlug />} />
        {/* <Route
          path="articles/new-article"
          element={
            <CreateArticle />
          }
        /> */}
        {/* <Route
          path="articles/{slug}/edit"
          element={
            <RequireAuth>
              <EditArticle />
            </RequireAuth>
          }
        /> */}
        <Route path="sign-in" element={<LoginPage />} />
        <Route path="sign-up" element={<RegisterPage />} />
        <Route path="profile" element={<EditProfile />} />
      </Route>
    </Routes>
  )
}
