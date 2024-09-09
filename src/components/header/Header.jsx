import { Link } from 'react-router-dom'

import HeaderButtons from '../headerButtons'

import classes from './Header.module.scss'

export default function Header() {
  return (
    <div className={classes.headerWrapper}>
      <header className={classes.header}>
        <Link to="/" className="link">
          <h1 className={classes.headerHead}>Realworld Blog</h1>
        </Link>
        <HeaderButtons />
      </header>
    </div>
  )
}
