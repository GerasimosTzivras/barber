import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import styles from './page.module.scss'

function PageHeaderBreadcrumb({ breadcrumb = [] }) {
  return (
    <nav className={clsx('d-flex', 'align-items-center')}>
      <ol className={styles['page-header-breadcrumb']}>
        {breadcrumb.map((item, idx) => (
          <li
            key={idx}
            className={clsx('breadcrumb-item', 'flex-nowrap', {
              active: !item.path
            })}>
            {item.path ? (
              <NavLink className="text-decoration-none" to={item.path}>
                {item.caption}
              </NavLink>
            ) : (
              item.caption
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

PageHeaderBreadcrumb.displayName = 'PageHeaderBreadcrumb'

export default PageHeaderBreadcrumb
