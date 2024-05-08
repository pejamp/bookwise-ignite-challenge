import { Input } from '@/components/Input'
import RootLayout from '@/layouts/RootLayout'
import { Binoculars } from '@phosphor-icons/react'
import bookImage from '@/assets/images/fragmentos-do-horror.png'
import Image from 'next/image'
import { Rating } from '@/components/Rating'
import { Tag } from '@/components/Tag'

export default function Explore() {
  return (
    <RootLayout>
      <div className="mb-10 flex justify-between">
        <h1 className="flex items-center gap-3 text-2xl font-bold leading-short text-gray-100">
          <Binoculars size={32} className="text-green-100" /> Explorar
        </h1>
        <div className="max-w-[430px] flex-1">
          <Input type="text" placeholder="Buscar livro ou autor" />
        </div>
      </div>

      <nav>
        <ul className="mb-12 flex items-center gap-3">
          <li>
            <Tag tagName="Tudo" name="book-tag" />
          </li>
          <li>
            <Tag tagName="Computação" name="book-tag" />
          </li>
          <li>
            <Tag tagName="Educação" name="book-tag" />
          </li>
        </ul>
      </nav>

      <ul className="grid-cols-explore grid gap-5">
        <li className="relative flex max-w-80 gap-5 overflow-hidden rounded-md bg-gray-700 px-5 py-4">
          <span className="absolute right-0 top-0 rounded-bl bg-green-300 px-3 py-1 text-xs font-bold uppercase leading-shorter text-green-100">
            lido
          </span>
          <div className="h-[152px] w-[108px] overflow-hidden rounded bg-gray-600">
            <Image
              src={bookImage}
              alt=""
              width={150}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-bold leading-short text-gray-100">title</h3>
              <p className="text-sm leading-base text-gray-400">author</p>
            </div>
            <Rating rating={3} />
          </div>
        </li>
        <li className="relative flex max-w-80 gap-5 overflow-hidden rounded-md bg-gray-700 px-5 py-4">
          <span className="absolute right-0 top-0 rounded-bl bg-green-300 px-3 py-1 text-xs font-bold uppercase leading-shorter text-green-100">
            lido
          </span>
          <div className="h-[152px] w-[108px] overflow-hidden rounded bg-gray-600">
            <Image
              src={bookImage}
              alt=""
              width={150}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-bold leading-short text-gray-100">title</h3>
              <p className="text-sm leading-base text-gray-400">author</p>
            </div>
            <Rating rating={3} />
          </div>
        </li>
        <li className="relative flex max-w-80 gap-5 overflow-hidden rounded-md bg-gray-700 px-5 py-4">
          <span className="absolute right-0 top-0 rounded-bl bg-green-300 px-3 py-1 text-xs font-bold uppercase leading-shorter text-green-100">
            lido
          </span>
          <div className="h-[152px] w-[108px] overflow-hidden rounded bg-gray-600">
            <Image
              src={bookImage}
              alt=""
              width={150}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-bold leading-short text-gray-100">title</h3>
              <p className="text-sm leading-base text-gray-400">author</p>
            </div>
            <Rating rating={3} />
          </div>
        </li>
      </ul>
    </RootLayout>
  )
}
