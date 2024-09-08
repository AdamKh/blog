import { useLoaction, Navigate } from 'react-router-dom'

export default function RequireAuth({ children }) {
  const location = useLoaction()
  // console.log(location)
  const auth = false

  if (!auth) {
    return <Navigate to="login" state={{ from: location }} />
  }

  return children
}
