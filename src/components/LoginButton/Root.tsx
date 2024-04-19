import { ComponentProps } from 'react'

interface RootProps extends ComponentProps<'button'> {}

export function Root(props: RootProps) {
  return (
    <button
      className="flex items-end justify-start gap-x-5 rounded-md bg-gray-600 px-6 py-5 transition duration-200 ease-in-out hover:bg-gray-500"
      {...props}
    />
  )
}
