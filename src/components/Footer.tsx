import React, { FC, ReactElement } from 'react'
import style from '../../styles/Footer.module.css'
import { Typography } from '@material-ui/core'

export const Footer: FC = ({}): ReactElement => {
  return (
    <div className={style.footer}>
      <Typography variant="body1" display="inline" className={style['footer-content']}>
        Text copyright @2020,{' '}
        <a href="http://www.github.com/FelixMohr" target="_blank" rel="noreferrer">
          Felix Mohr
        </a>
      </Typography>
    </div>
  )
}
