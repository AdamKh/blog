import { Outlet, useLocation } from 'react-router-dom'
import { notification } from 'antd'

import Header from '../header'

import classes from './Layout.module.scss'

export default function Layout() {
  const { state: locationState } = useLocation()
  const [api, contextHolder] = notification.useNotification()

  const openNotification = (pauseOnHover) => {
    api.open({
      message: locationState?.notification?.message,
      description: locationState?.notification?.description,
      showProgress: true,
      pauseOnHover,
    })
  }

  if (locationState?.notification) {
    openNotification(true)
  }

  return (
    <div className={classes.App}>
      {contextHolder}
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  )
}
