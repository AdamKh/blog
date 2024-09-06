import { LoadingOutlined } from '@ant-design/icons'
import { Flex, Spin } from 'antd'

import classes from './Spinner.module.scss'

export default function Spinner() {
  return (
    <Flex className={classes.spinWrapper} align="center" justify="center">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />} />
    </Flex>
  )
}
