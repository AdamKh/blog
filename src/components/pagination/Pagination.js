import { Pagination as PaginationAntd } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { setPaginationPage } from '../../store/actions'

import classes from './Pagination.module.scss'

export default function Pagination({ articlesCount }) {
  const dispatch = useDispatch()
  const pagValue = useSelector((state) => state.pagValue)

  return (
    <PaginationAntd
      className={classes.pagination}
      align="center"
      current={pagValue}
      showSizeChanger={false}
      total={articlesCount}
      pageSize={20}
      onChange={(page) => {
        dispatch(setPaginationPage(page))
        window.scrollTo(0, 0)
      }}
    />
  )
}
