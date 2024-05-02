import { ActionLink } from '@/components/ActionLink'
import { TrendBookCard } from '@/components/TrendBookCard'
import RootLayout from '@/layouts/RootLayout'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import bookImage from '@/assets/images/Book.png'
import { CommentBookCard } from '@/components/CommentBookCard'
import { UserBookCard } from '@/components/UserBookCard'

export default function Home() {
  const isLoggedIn = true

  return (
    <RootLayout>
      <h1 className="mb-10 flex items-center gap-3 text-2xl font-bold leading-short text-gray-100">
        <ChartLineUp size={32} className="text-green-100" /> Início
      </h1>
      <div className="flex gap-16">
        <div className="flex flex-col gap-10">
          {isLoggedIn && (
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm leading-base text-gray-100">
                  Sua última leitura
                </h2>
                <ActionLink size="small" color="purple">
                  Ver todas <CaretRight size={16} />
                </ActionLink>
              </div>
              <UserBookCard />
            </section>
          )}
          <section>
            <h2 className="mb-4 text-sm leading-base text-gray-100">
              Avaliações mais recentes
            </h2>
            <ul className="flex flex-col gap-3">
              <li>
                <CommentBookCard />
              </li>
              <li>
                <CommentBookCard />
              </li>
              <li>
                <CommentBookCard />
              </li>
            </ul>
          </section>
        </div>
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm leading-base text-gray-100">
              Livros populares
            </h2>
            <ActionLink size="small" color="purple">
              Ver todos <CaretRight size={16} />
            </ActionLink>
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <TrendBookCard
                cover={bookImage}
                title="A revolução dos bichos"
                author="George Orwell"
                rating={4}
              />
            </li>
            <li>
              <TrendBookCard
                cover={bookImage}
                title="A revolução dos bichos"
                author="George Orwell"
                rating={4}
              />
            </li>
            <li>
              <TrendBookCard
                cover={bookImage}
                title="A revolução dos bichos"
                author="George Orwell"
                rating={4}
              />
            </li>
            <li>
              <TrendBookCard
                cover={bookImage}
                title="A revolução dos bichos"
                author="George Orwell"
                rating={4}
              />
            </li>
          </ul>
        </div>
      </div>
    </RootLayout>
  )
}
