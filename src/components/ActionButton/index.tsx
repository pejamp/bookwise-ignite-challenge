import { ButtonHTMLAttributes } from 'react'

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ActionButton({ ...rest }: ActionButtonProps) {
  return (
    <button
      className="flex items-center justify-center rounded bg-gray-600 p-2 transition duration-200 ease-in-out hover:bg-gray-500"
      {...rest}
    />
  )
}
