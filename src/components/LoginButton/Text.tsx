import { ComponentProps } from 'react'

interface TextProps extends ComponentProps<'span'> {}

export function Text(props: TextProps) {
  return (
    <span className="text-lg font-bold leading-base text-gray-200" {...props} />
  )
}
