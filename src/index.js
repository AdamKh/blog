import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
import './index.scss'

import App from './components/app'
// import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <Provider store={store}>
  <App />
  // </Provider>
)
