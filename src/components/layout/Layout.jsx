import { Outlet } from 'react-router-dom'

import Header from '../header'

import classes from './Layout.module.scss'

export default function Tag() {
  return (
    <div className={classes.App}>
      <Header />

      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  )
}
