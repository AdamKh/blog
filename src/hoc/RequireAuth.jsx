import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import * as pathes from '../constants/pathes'

export default function RequireAuth({ children }) {
  const location = useLocation()
  const { loggedIn } = useSelector((state) => state.user)

  // if (!loggedIn && Object.keys(user).length !== 0) {
  //   return <Navigate to={pathes.signInPath} state={{ from: location }} />
  // }

  if (!loggedIn) {
    return <Navigate to={pathes.signInPath} state={{ from: location }} />
  }

  return children
}
