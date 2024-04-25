import { Star } from '@phosphor-icons/react'

import Image, { StaticImageData } from 'next/image'

interface TrendBookCardProps {
  title: string
  author: string
  cover: string | StaticImageData
  rating: number
}

export function TrendBookCard(props: TrendBookCardProps) {
  return (
    <div className="flex w-[308px] gap-5 rounded-md border-2 border-solid border-gray-700 bg-gray-700 px-5 py-4 hover:border-gray-600">
      <div className="h-24 w-16 overflow-hidden rounded bg-gray-600">
        <Image
          src={props.cover}
          alt=""
          width={200}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-bold leading-short text-gray-100">
            {props.title}
          </h3>
          <p className="text-sm leading-base text-gray-400">{props.author}</p>
        </div>
        <div className="mt-auto flex items-center gap-1 text-purple-100">
          {[1, 2, 3, 4, 5].map((value) => (
            <Star
              key={value}
              size={16}
              weight={value <= props.rating ? 'fill' : 'regular'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
