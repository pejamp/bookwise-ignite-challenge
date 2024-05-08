import { InputHTMLAttributes } from 'react'

interface TagProps extends InputHTMLAttributes<HTMLInputElement> {
  tagName: string
}

export function Tag({ tagName, ...rest }: TagProps) {
  return (
    <label className="box-border cursor-pointer rounded-full border border-purple-100 px-4 py-1 leading-base text-purple-100 duration-150 ease-in hover:bg-purple-200 hover:text-gray-100 has-[input:checked]:border-purple-200 has-[input:checked]:bg-purple-200 has-[input:checked]:text-gray-100">
      <input type="radio" className="appearance-none" {...rest} />
      {tagName}
    </label>
  )
}
