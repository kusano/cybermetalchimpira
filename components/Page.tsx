import style from './Page.module.scss'

import {PropsWithChildren} from 'react'

type Props = {
  pageNumber: number
  hidePageNumber?: boolean
}

export function Page({children, pageNumber, hidePageNumber}: PropsWithChildren<Props>) {
  return (
    <div className={`${style.page} ${pageNumber % 2 === 0 ? style.even : style.odd}`}>
      <div className={style.container}>
        {children}
      </div>
      {!hidePageNumber && (
        <div className={`${style.pageNumber} ${pageNumber % 2 === 0 ? style.even : style.odd}`}>{pageNumber}</div>
      )}
    </div>
  )
}
