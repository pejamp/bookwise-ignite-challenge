import Image from 'next/image'
import { ReactNode } from 'react'
import logoIcon from '@/assets/logo.svg'
import { ActionLink } from '@/components/ActionLink'
import { Binoculars, ChartLineUp, SignIn } from '@phosphor-icons/react'
import { Navigation } from '@/components/Navigation'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-app gap-x-[96px] p-5">
      <aside className="flex flex-col items-center rounded-xl bg-gray-700 bg-sidebar pb-6 pt-10">
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
          </ul>
        </nav>
        <div className="mt-auto">
          <ActionLink>
            Fazer login <SignIn size={20} className="text-green-100" />
          </ActionLink>
        </div>
      </aside>
      <main className="pt-[72px]">{children}</main>
    </div>
  )
}
