import { Rating } from '@/components/Rating'
import RootLayout from '@/layouts/RootLayout'
import { User } from '@phosphor-icons/react'
import Image from 'next/image'
import bookImage from '@/assets/images/entendendo-algoritmos.png'

export default function Profile() {
  return (
    <RootLayout>
      <h1 className="mb-10 flex items-center gap-3 text-2xl font-bold leading-short text-gray-100">
        <User size={32} className="text-green-100" /> Perfil
      </h1>
      <div className="flex items-start gap-16">
        <div>
          <div>input</div>
          <ul className="flex flex-col gap-6">
            <li>
              <time className="mb-2 inline-block text-sm leading-base text-gray-300">
                Há 2 dias
              </time>
              <div className="max-w-screen-sm rounded-md bg-gray-700 p-6">
                <div className="mb-6 flex gap-6">
                  <div className="h-[134px] max-w-[98px] overflow-hidden rounded">
                    <Image
                      src={bookImage}
                      alt=""
                      width={100}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold leading-short text-gray-100">
                        title
                      </h3>
                      <span className="text-sm leading-base text-gray-400">
                        author
                      </span>
                    </div>
                    <Rating rating={3} />
                  </div>
                </div>
                <p className="text-sm leading-base text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  eius corrupti molestias, voluptates fugit reprehenderit nobis
                  hic molestiae animi, facilis eos. Fugiat dignissimos excepturi
                  debitis dicta dolor ad, nesciunt quaerat?
                </p>
              </div>
            </li>
            <li>
              <time className="mb-2 inline-block text-sm leading-base text-gray-300">
                Há 2 dias
              </time>
              <div className="max-w-screen-sm rounded-md bg-gray-700 p-6">
                <div className="mb-6 flex gap-6">
                  <div className="h-[134px] max-w-[98px] overflow-hidden rounded">
                    <Image
                      src={bookImage}
                      alt=""
                      width={100}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold leading-short text-gray-100">
                        title
                      </h3>
                      <span className="text-sm leading-base text-gray-400">
                        author
                      </span>
                    </div>
                    <Rating rating={3} />
                  </div>
                </div>
                <p className="text-sm leading-base text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  eius corrupti molestias, voluptates fugit reprehenderit nobis
                  hic molestiae animi, facilis eos. Fugiat dignissimos excepturi
                  debitis dicta dolor ad, nesciunt quaerat?
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center border-l border-gray-700">
          <div className="relative mb-8 flex justify-center pb-8 after:absolute after:bottom-0 after:h-1 after:w-8 after:rounded-full after:bg-gradient-horizontal after:content-['']">
            avatar
          </div>
          <div>infos</div>
        </div>
      </div>
    </RootLayout>
  )
}
