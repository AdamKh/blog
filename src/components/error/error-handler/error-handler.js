import '../error.scss'
import { Alert } from 'antd'

export default function ErrorHandler({ errorMessage = 'undetermined error', errorDescription = 'undetermined error' }) {
  return <Alert className="error" message={errorMessage} description={`${errorDescription}`} type="error" showIcon />
}
