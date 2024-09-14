import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function RequireAuth({ children }) {
  const location = useLocation()
  const { loggedIn, user } = useSelector((state) => state.user)

  if (!loggedIn && Object.keys(user).length !== 0) {
    return <Navigate to="/sign-in" state={{ from: location }} />
  }

  return children
}
