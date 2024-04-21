import Image from 'next/image'
import { ReactNode } from 'react'
import logoIcon from '@/assets/logo.svg'
import { ActionLink } from '@/components/ActionLink'
import { SignIn } from '@phosphor-icons/react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-app gap-x-[96px] p-5">
      <aside className="flex flex-col items-center rounded-xl bg-gray-700 bg-sidebar pb-6 pt-10">
        <Image src={logoIcon} alt="" height={32} className="mb-16" />
        <div>navbar</div>
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
