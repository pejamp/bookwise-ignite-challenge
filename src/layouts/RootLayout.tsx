import Image from 'next/image'
import { ReactNode } from 'react'
import logoIcon from '@/assets/logo.svg'
import { ActionLink } from '@/components/ActionLink'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import { Navigation } from '@/components/Navigation'
import testImage from '@/assets/images/o-programador-pragmatico.png'
import { Avatar } from '@/components/Avatar'

export default function RootLayout({ children }: { children: ReactNode }) {
  const isLoggedIn = true
  return (
    <div className="relative min-h-screen p-5">
      <aside className="fixed inset-5 flex w-full max-w-60 flex-col items-center rounded-xl bg-gray-700 bg-sidebar pb-6 pt-10">
        <Image src={logoIcon} alt="" height={32} className="mb-16" />
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Navigation href={'/home'}>
                <ChartLineUp size={24} /> início
              </Navigation>
            </li>
            <li>
              <Navigation href={'#'}>
                <Binoculars size={24} /> explorar
              </Navigation>
            </li>
            {isLoggedIn && (
              <li>
                <Navigation href={'#'}>
                  <User size={24} /> Perfil
                </Navigation>
              </li>
            )}
          </ul>
        </nav>
        <div className="mt-auto">
          {isLoggedIn ? (
            <ActionLink>
              <Avatar
                src={testImage}
                alt=""
                width={100}
                height={100}
                size="small"
              />
              <span>Cristofer</span>
              <SignOut size={20} color="#F75A68" />
            </ActionLink>
          ) : (
            <ActionLink>
              <span>Fazer login</span>
              <SignIn size={20} className="text-green-100" />
            </ActionLink>
          )}
        </div>
      </aside>
      <main className="grid justify-center pl-60 pt-[72px]">{children}</main>
    </div>
  )
}
