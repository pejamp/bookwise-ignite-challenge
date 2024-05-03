import testImage from '@/assets/images/o-programador-pragmatico.png'
import Image from 'next/image'
import { Rating } from '../Rating'
import { Avatar } from '../Avatar'

interface CommentBookCardProps {}

export function CommentBookCard(props: CommentBookCardProps) {
  return (
    <div className="max-h-[280px] max-w-[608px] rounded-md bg-gray-700 p-6">
      <div className="mb-8 flex items-start gap-4">
        <Avatar src={testImage} alt="" width={100} height={100} size="medium" />
        <div className="flex flex-1 flex-col">
          <span className="leading-base text-gray-100">Jaxson Dias</span>
          <time className="text-sm leading-base text-gray-400">Hoje</time>
        </div>
        <Rating rating={3} />
      </div>
      <div className="flex gap-5">
        <div className="min-w-[108px] overflow-hidden rounded">
          <Image
            src={testImage}
            alt=""
            width={150}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="font-bold leading-short text-gray-100">title</span>
            <span className="text-sm leading-base text-gray-400">author</span>
          </div>
          <p className="line-clamp-4 text-sm leading-base text-gray-300">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh. Semper et sapien proin vitae nisi.
            Feugiat neque integer donec et aenean posuere amet ultrices. Cras
            fermentum id pulvinar varius leo a in. Amet libero pharetra nunc
            elementum fringilla velit ipsum. Sed vulputate massa velit nibh.
          </p>
        </div>
      </div>
    </div>
  )
}
