import { Star } from '@phosphor-icons/react'

interface RatingProps {
  rating: number
}

export function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-1 text-purple-100">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          size={16}
          weight={value <= rating ? 'fill' : 'regular'}
        />
      ))}
    </div>
  )
}
