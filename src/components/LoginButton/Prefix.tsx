import { ComponentProps } from 'react'

interface PrefixProps extends ComponentProps<'div'> {}

export function Prefix(props: PrefixProps) {
  return <div className="flex h-8 w-8 items-center justify-center" {...props} />
}
