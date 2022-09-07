import clsx from 'clsx'

function PageContent({ children }) {
  return <div className={clsx('container-xl', 'overflow-auto')}>{children}</div>
}

export default PageContent
