// import { Link } from 'react-router-dom'
import { Button } from 'antd'

import classes from './Header.module.scss'

export default function Header() {
  return (
    <div className={classes.headerWrapper}>
      <header className={classes.header}>
        <h1 className={classes.headerHead}>Realworld Blog</h1>
        <div className={classes.links}>
          <Button className={classes.button} type="text">
            Sign in
          </Button>
          <Button className={`${classes.button} ${classes.buttonSuccess}`}>Sign up</Button>
        </div>
      </header>
    </div>
  )
}
