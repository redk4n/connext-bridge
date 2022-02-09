import Link from 'next/link'
import { useRouter } from 'next/router'

import { TiArrowRight } from 'react-icons/ti'

import { navigations } from '../../../lib/menus'

export default function Navigation() {
  const router = useRouter()
  const { pathname } = { ...router }

  return (
    <div className="hidden lg:flex items-center space-x-0 lg:space-x-2 mx-auto">
      {navigations.map((item, i) => {
        const className = `bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl flex items-center uppercase text-xs lg:text-sm ${pathname === item.path ? 'text-black hover:text-gray-800 dark:text-gray-200 dark:hover:text-white font-bold' : 'text-blue-400 hover:text-blue-600 dark:text-gray-200 dark:hover:text-white font-medium'} p-2`

        return item.external ?
          <a key={i} href={item.path} target="_blank" rel="noopener noreferrer" className={className}>
            {item.icon && (
              <span className="mb-0.5 mr-1.5">{item.icon}</span>
            )}
            <span>{item.title}</span>
            <TiArrowRight size={20} className="transform -rotate-45" />
          </a>
          :
          <Link key={i} href={item.path}>
            <a className={className}>
              {item.icon && (
                <span className="mb-0.5 mr-1.5">{item.icon}</span>
              )}
              <span>{item.title}</span>
            </a>
          </Link>
      })}
    </div>
  )
}