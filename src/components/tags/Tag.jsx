import classes from './Tag.module.scss'

export default function Tag({ tag }) {
  return <span className={classes.tag}>{tag}</span>
}
