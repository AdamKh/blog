import { Link } from 'react-router-dom'
import { Button, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import * as pathes from '../../constants/pathes'
import { logoutAction } from '../../store/actions'

import classes from './HeaderButtons.module.scss'

export default function HeaderButtons() {
  const { user, loggedIn } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <div className={classes.links}>
      {!loggedIn && (
        <>
          <Link to={pathes.signInPath} className={classes.link}>
            <Button className={classes.button} type="text">
              Sign in
            </Button>
          </Link>
          <Link to={pathes.signUpPath} className={classes.link}>
            <Button className={`${classes.button} ${classes.buttonSuccess}`}>Sign up</Button>
          </Link>
        </>
      )}

      {loggedIn && (
        <div className={classes.buttonsWrapper}>
          <Link to={pathes.newArticlePath} className={classes.link}>
            <Button className={`${classes.button} ${classes.buttonSuccess} ${classes.buttonCreateArticle}`}>
              Create article
            </Button>
          </Link>
          <Link to={pathes.profilePath} className={`${classes.link} ${classes.profile}`}>
            <p className={classes.username}>{user.username}</p>
            <Avatar size={48} src={user.image} icon={<UserOutlined />} />
          </Link>
          <Button
            className={`${classes.button} ${classes.buttonLogOut}`}
            size="large"
            onClick={() => dispatch(logoutAction())}
          >
            <Link to="/" className={classes.link}>
              log Out
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
