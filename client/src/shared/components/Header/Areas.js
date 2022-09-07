import { useBadges } from '../../providers'
import { AreaLink } from './AreaLink'

const areas = [
  {
    label: 'Έγγραφα',
    path: 'documents',
    badge: 'DocumentsArea'
  },
  {
    label: 'Εργασίες',
    path: 'tasks',
    badge: 'TasksArea'
  },
  {
    label: 'Εργαλεία',
    path: 'tools',
    badge: 'ToolsArea'
  }
]

function Areas() {
  const badges = useBadges()

  return (
    <ul data-tut="menu-up" className="navbar-nav">
      {areas.map((area) => (
        <AreaLink key={area.path} {...area} badge={badges[area.badge]} />
      ))}
    </ul>
  )
}

export default Areas
