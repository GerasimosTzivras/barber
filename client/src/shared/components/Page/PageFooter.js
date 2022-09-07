import clsx from 'clsx'

import styles from './page.module.scss'

function PageFooter({ children }) {
  return (
    <div className={clsx('container', styles['page-footer'])}>{children}</div>
  )
}

export default PageFooter
