import { Routes, Route } from 'react-router-dom'

import Header from '../header'

import classes from './App.module.scss'

export default function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/articles" element={<p>asd</p>} />
      </Routes>
    </div>
  )
}
