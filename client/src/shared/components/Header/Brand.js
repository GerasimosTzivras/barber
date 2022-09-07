import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import logo from 'modules/shared/assets/images/logo_light.png'
import { Image } from 'modules/shared/components'

function Brand() {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx('navbar-brand', 'd-flex', 'align-items-center', 'ms-3', {
          active: isActive
        })
      }
      to="/">
      <Image src={logo} width={20} className="me-1" />
      IRIS
    </NavLink>
  )
}

export default Brand
