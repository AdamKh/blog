import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function RequireAuth({ children }) {
  const location = useLocation()
  const { loggedIn } = useSelector((state) => state.user)

  if (!loggedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} />
  }

  return children
}
