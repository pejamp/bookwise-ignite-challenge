import { MagnifyingGlass } from '@phosphor-icons/react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <label className="flex items-center gap-2 rounded border border-gray-500 px-5 py-3 text-gray-500 focus-within:border-green-200 focus-within:text-green-200">
      <input
        className="bg-transparent flex-1 text-sm leading-base text-gray-200 caret-green-100 outline-none placeholder:text-gray-400"
        {...rest}
      />
      <button className="text-inherit">
        <MagnifyingGlass size={20} />
      </button>
    </label>
  )
}
