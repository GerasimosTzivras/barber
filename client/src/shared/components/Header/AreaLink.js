import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

export function AreaLink({ label, path, badge }) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={path}>
        {badge ? (
          <span className="position-relative">
            <span>{label}</span>
            <span
              className={clsx(
                'position-absolute',
                'top-0',
                'start-100',
                'translate-middle',
                'badge',
                'rounded-pill',
                'bg-danger'
              )}>
              {badge}
            </span>
          </span>
        ) : (
          label
        )}
      </NavLink>
    </li>
  )
}
