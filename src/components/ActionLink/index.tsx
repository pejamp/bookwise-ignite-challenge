import Link from 'next/link'
import { ReactNode } from 'react'

interface ActionLinkProps {
  color?: 'purple' | 'white'
  size?: 'medium' | 'small'
  children: ReactNode
}

export function ActionLink({
  children,
  color = 'white',
  size = 'medium',
}: ActionLinkProps) {
  return (
    <Link href={'#'}>
      <span
        className={`flex items-center gap-3 rounded-sm px-2 py-1 font-bold leading-base text-gray-200 transition duration-200 ease-in-out hover:bg-gray-200 hover:bg-opacity-5 ${size === 'small' ? 'gap-2 text-sm' : ''} ${color === 'purple' ? 'text-purple-100 hover:bg-purple-100' : ''}`}
      >
        {children}
      </span>
    </Link>
  )
}
