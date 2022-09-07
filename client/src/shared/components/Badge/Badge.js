import clsx from 'clsx'

import styles from './badge.module.scss'

function Badge({
  color = 'primary',
  pill = true,
  topRight = false,
  className,
  title,
  children,
  ...props
}) {
  if (!children || children.length === 0) {
    return null
  }
  return (
    <span
      className={clsx(
        'badge',
        `bg-${color}`,
        'user-select-none',
        styles.badge,
        {
          'rounded-pill': pill,
          'position-absolute top-0 start-100 translate-middle': topRight,
          [className]: className
        }
      )}
      title={title}
      {...props}>
      {children}
    </span>
  )
}

export default Badge
