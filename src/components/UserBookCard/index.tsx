import Image from 'next/image'
import testImage from '@/assets/images/o-guia-do-mochileiro-das-galaxias.png'
import { Rating } from '../Rating'

interface UserBookCardProps {}

export function UserBookCard(props: UserBookCardProps) {
  return (
    <div className="flex max-h-48 max-w-[608px] gap-6 rounded-md border-2 border-gray-600 bg-gray-600 px-6 py-5 hover:border-gray-500">
      <div className="max-w-[108px] overflow-hidden rounded">
        <Image
          src={testImage}
          alt=""
          width={150}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid flex-1">
        <div className="mb-3 flex justify-between">
          <time className="text-sm leading-base text-gray-300">Hoje</time>
          <Rating rating={4} />
        </div>
        <h3 className="font-bold capitalize leading-short text-gray-100">
          title
        </h3>
        <span className="text-sm leading-base text-gray-400">author</span>
        <p className="mt-auto line-clamp-2 text-sm leading-base text-gray-300">
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </p>
      </div>
    </div>
  )
}
