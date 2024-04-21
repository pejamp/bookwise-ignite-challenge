import Link from 'next/link'
import { ReactNode } from 'react'

interface ActionLinkProps {
  children: ReactNode
}

export function ActionLink(props: ActionLinkProps) {
  return (
    <Link href={'#'}>
      <span className="flex items-center gap-3 rounded-sm px-2 py-1 font-bold leading-base text-gray-200 transition duration-200 ease-in-out hover:bg-gray-200 hover:bg-opacity-5">
        {props.children}
      </span>
    </Link>
  )
}
