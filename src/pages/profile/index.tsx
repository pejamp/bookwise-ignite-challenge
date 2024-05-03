import { Rating } from '@/components/Rating'
import RootLayout from '@/layouts/RootLayout'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  CaretLeft,
  User,
  UserList,
} from '@phosphor-icons/react'
import Image from 'next/image'
import bookImage from '@/assets/images/entendendo-algoritmos.png'
import { Avatar } from '@/components/Avatar'
import { Input } from '@/components/Input'
import { ActionLink } from '@/components/ActionLink'

export default function Profile() {
  const isOwnProfile = false

  return (
    <RootLayout>
      <div className="mb-10">
        {isOwnProfile ? (
          <h1 className="flex items-center gap-3 text-2xl font-bold leading-short text-gray-100">
            <User size={32} className="text-green-100" /> Perfil
          </h1>
        ) : (
          <div className="max-w-24">
            <ActionLink>
              <CaretLeft size={20} />
              Voltar
            </ActionLink>
          </div>
        )}
      </div>
      <div className="flex items-start gap-16">
        <div>
          <form className="mb-8">
            <Input type="text" placeholder="Buscar livro avaliado" />
          </form>
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

        <div className="flex flex-col items-center border-l border-gray-700 px-14">
          <div className="relative mb-8 flex flex-col items-center pb-8 after:absolute after:bottom-0 after:h-1 after:w-8 after:rounded-full after:bg-gradient-horizontal after:content-['']">
            <Avatar
              src={bookImage}
              alt=""
              width={100}
              height={100}
              size="large"
            />
            <span className="mt-5 text-xl font-bold leading-short text-gray-100">
              Cristofer Rosser
            </span>
            <span className="text-sm leading-base text-gray-400">
              membro desde 2019
            </span>
          </div>
          <div className="flex flex-col gap-10 py-5">
            <div className="flex items-center gap-5">
              <BookOpen size={32} className="text-green-100" />
              <div className="flex flex-col">
                <span className="font-bold leading-short text-gray-200">
                  3256
                </span>
                <span className="text-sm leading-base text-gray-300">
                  Páginas lidas
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Books size={32} className="text-green-100" />
              <div className="flex flex-col">
                <span className="font-bold leading-short text-gray-200">
                  3256
                </span>
                <span className="text-sm leading-base text-gray-300">
                  Livros avaliados
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <UserList size={32} className="text-green-100" />
              <div className="flex flex-col">
                <span className="font-bold leading-short text-gray-200">
                  3256
                </span>
                <span className="text-sm leading-base text-gray-300">
                  Autores lidos
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <BookmarkSimple size={32} className="text-green-100" />
              <div className="flex flex-col">
                <span className="font-bold leading-short text-gray-200">
                  3256
                </span>
                <span className="text-sm leading-base text-gray-300">
                  Categoria mais lida
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}
