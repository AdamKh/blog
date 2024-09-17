import { useLocation } from 'react-router-dom'

import ErrorHundler from '../../components/error/error-handler'

export default function NotFoundPage() {
  const location = useLocation()
  return (
    <ErrorHundler
      errorMessage="Page not found"
      errorDescription={`По запросу ${location.pathname} ничего не найдено`}
    />
  )
}
