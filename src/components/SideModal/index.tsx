import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import bookImage from '@/assets/images/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import { Rating } from '../Rating'
import { Avatar } from '../Avatar'
import { LoginButton } from '../LoginButton'
import googleIcon from '@/assets/icons-google.svg'
import githubIcon from '@/assets/icons-github-fill.svg'

interface SideModalProps {}

export function SideModal(props: SideModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black opacity-60" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed right-0 top-0 flex h-screen w-full max-w-[660px] flex-col overflow-y-scroll overscroll-contain bg-gray-800 px-12 py-16">
        <Dialog.Close asChild>
          <button
            className="absolute right-[48px] top-[24px] inline-flex h-[24px] w-[24px] cursor-pointer appearance-none items-center justify-center rounded-full text-gray-400 focus:outline-none"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </Dialog.Close>

        <div className="mb-10 rounded-md bg-gray-700 px-8 pb-4 pt-6">
          <div className="mb-10 flex gap-8">
            <div className="h-[242px] w-full max-w-[172px] overflow-hidden rounded-md">
              <Image
                src={bookImage}
                alt=""
                width={200}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="mb-2 text-lg font-bold leading-short text-gray-100">
                  14 Hábitos de Desenvolvedores Altamente Produtivos
                </h1>
                <span className="leading-base text-gray-300">Zeno Rocha</span>
              </div>
              <div>
                <Rating rating={4} />
                <span className="mt-1 text-sm leading-base text-gray-400">
                  3 avaliações
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-14 border-t border-gray-600 py-6">
            <div className="flex items-center gap-4 px-1">
              <BookmarkSimple size={24} className="text-green-100" />
              <div className="flex flex-col">
                <span className="text-sm leading-base text-gray-300">
                  Categoria
                </span>
                <span className="font-bold leading-short text-gray-200">
                  Computação, educação
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 px-1">
              <BookOpen size={24} className="text-green-100" />
              <div className="flex flex-col">
                <span className="text-sm leading-base text-gray-300">
                  Páginas
                </span>
                <span className="font-bold leading-short text-gray-200">
                  160
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm leading-base text-gray-200">
              avaliações
            </span>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="rounded px-2 py-1 font-bold leading-base text-purple-100 transition duration-200 ease-in-out hover:bg-purple-100 hover:bg-opacity-5">
                  avaliar
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black opacity-60" />
                <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[516px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-gray-700 px-[72px] py-14 shadow-[hsl(0_0%_0%_/_25%)_4px_16px_24px_0px] focus:outline-none">
                  <Dialog.Title className="mb-10 text-center text-md font-bold leading-short text-gray-200">
                    Faça login para deixar sua avaliação
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      className="absolute right-[16px] top-[16px] inline-flex h-[24px] w-[24px] appearance-none items-center justify-center rounded-full text-gray-400 focus:outline-none"
                      aria-label="Close"
                    >
                      <X size={24} />
                    </button>
                  </Dialog.Close>
                  <div className="flex flex-col gap-4">
                    <LoginButton.Root>
                      <LoginButton.Prefix>
                        <Image src={googleIcon} alt="" width={50} height={50} />
                      </LoginButton.Prefix>
                      <LoginButton.Text>Entrar com Google</LoginButton.Text>
                    </LoginButton.Root>
                    <LoginButton.Root>
                      <LoginButton.Prefix>
                        <Image src={githubIcon} alt="" width={50} height={50} />
                      </LoginButton.Prefix>
                      <LoginButton.Text>Entrar com GitHub</LoginButton.Text>
                    </LoginButton.Root>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>

          <ul className="flex flex-col gap-3">
            <li>
              <div className="rounded-md bg-gray-700 p-6">
                <div className="mb-5 flex items-start gap-4">
                  <Avatar
                    size="medium"
                    src={bookImage}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-1 flex-col">
                    <span className="font-bold leading-short text-gray-100">
                      Brandon
                    </span>
                    <time className="text-sm leading-short text-gray-400">
                      há 2 dias
                    </time>
                  </div>
                  <Rating rating={4} />
                </div>
                <p className="text-sm leading-base text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus dignissimos beatae, natus, hic voluptates dolor vero
                  labore pariatur nobis officia assumenda eligendi culpa aperiam
                  maiores? Porro dolores debitis dicta maiores.
                </p>
              </div>
            </li>
            <li>
              <div className="rounded-md bg-gray-700 p-6">
                <div className="mb-5 flex items-start gap-4">
                  <Avatar
                    size="medium"
                    src={bookImage}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-1 flex-col">
                    <span className="font-bold leading-short text-gray-100">
                      Brandon
                    </span>
                    <time className="text-sm leading-short text-gray-400">
                      há 2 dias
                    </time>
                  </div>
                  <Rating rating={4} />
                </div>
                <p className="text-sm leading-base text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus dignissimos beatae, natus, hic voluptates dolor vero
                  labore pariatur nobis officia assumenda eligendi culpa aperiam
                  maiores? Porro dolores debitis dicta maiores.
                </p>
              </div>
            </li>
            <li>
              <div className="rounded-md bg-gray-700 p-6">
                <div className="mb-5 flex items-start gap-4">
                  <Avatar
                    size="medium"
                    src={bookImage}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-1 flex-col">
                    <span className="font-bold leading-short text-gray-100">
                      Brandon
                    </span>
                    <time className="text-sm leading-short text-gray-400">
                      há 2 dias
                    </time>
                  </div>
                  <Rating rating={4} />
                </div>
                <p className="text-sm leading-base text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus dignissimos beatae, natus, hic voluptates dolor vero
                  labore pariatur nobis officia assumenda eligendi culpa aperiam
                  maiores? Porro dolores debitis dicta maiores.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
