import RootLayout from '@/layouts/RootLayout'
import { ChartLineUp } from '@phosphor-icons/react'

interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <RootLayout>
      <h1 className="mb-10 flex items-center gap-3 text-2xl font-bold leading-short text-gray-100">
        <ChartLineUp size={32} className="text-green-100" /> Início
      </h1>
      <div className="flex gap-16">
        <div>recentes</div>
        <div>
          <div>
            <h2>Livros populares</h2>
            <span>ver todos</span>
          </div>
          <ul>
            <li>livro</li>
          </ul>
        </div>
      </div>
    </RootLayout>
  )
}
