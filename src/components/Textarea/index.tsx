import { TextareaHTMLAttributes, useState } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ ...rest }: TextareaProps) {
  const [charCount, setCharCount] = useState(0)
  const charLimit = 450

  return (
    <label className="relative flex items-center gap-2 rounded border border-gray-500 bg-gray-800 px-5 py-3 text-gray-500 focus-within:border-green-200 focus-within:text-green-200">
      <textarea
        className="min-h-40 flex-1 resize-none bg-transparent text-sm leading-base text-gray-200 caret-green-100 outline-none placeholder:text-gray-400"
        maxLength={charLimit}
        onChange={(e) => setCharCount(e.target.value.length)}
        {...rest}
      />
      <span className="absolute bottom-1 right-2 text-xs leading-base text-gray-400">
        {charCount}/{charLimit}
      </span>
    </label>
  )
}
