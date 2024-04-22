import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavigationProps extends LinkProps {
  children: ReactNode
}

export function Navigation({ children, ...rest }: NavigationProps) {
  const { href } = rest
  const pathName = usePathname()

  const isActive = pathName === href
  return (
    <Link {...rest}>
      <span
        className={`relative flex items-center gap-3 py-2 pl-5 capitalize leading-base transition duration-200 ease-in-out before:absolute before:left-0 before:h-6 before:w-1 before:rounded-full before:content-[''] hover:text-gray-100 ${isActive ? 'font-bold text-gray-100 before:bg-gradient-vertical' : 'text-gray-400'}`}
      >
        {children}
      </span>
    </Link>
  )
}
