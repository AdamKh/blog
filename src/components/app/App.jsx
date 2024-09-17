import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as pathes from '../../constants/pathes'
import Layout from '../layout'
import ArticleList from '../../pages/articlesList'
import ArticleBySlug from '../../pages/articleBySlug'
import LoginPage from '../../pages/loginPage'
import RegisterPage from '../../pages/registerPage'
import EditProfile from '../../pages/editProfile'
import RequireAuth from '../../hoc/RequireAuth'
import CreateArticle from '../../pages/createArticle'
import EditArticle from '../../pages/editArticle'
import NotFoundPage from '../../pages/notFoundPage'
import { getCurrentUserAction } from '../../store/actions/index'

export default function App() {
  const dispatch = useDispatch()
  const articlesRequest = useSelector((state) => state.articleRequest)

  useEffect(() => {
    dispatch(getCurrentUserAction())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={pathes.articlesPath} replace />} />
        <Route path={pathes.articlesPath} element={<ArticleList articlesRequest={articlesRequest} />} />
        <Route path={pathes.articleBySlugPath} element={<ArticleBySlug />} />
        <Route
          path={pathes.newArticlePath}
          element={
            <RequireAuth>
              <CreateArticle />
            </RequireAuth>
          }
        />
        <Route
          path={pathes.articleEditPath}
          element={
            <RequireAuth>
              <EditArticle />
            </RequireAuth>
          }
        />
        <Route path={pathes.signInPath} element={<LoginPage />} />
        <Route path={pathes.signUpPath} element={<RegisterPage />} />
        <Route
          path={pathes.profilePath}
          element={
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
