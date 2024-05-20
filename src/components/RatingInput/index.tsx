import { Star } from '@phosphor-icons/react'
import { useState } from 'react'

// interface RatingInputProps {}

export function RatingInput() {
  const [rating, setRating] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label key={star}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden appearance-none"
            />
            <Star
              size={28}
              weight={ratingValue <= (hover || rating) ? 'fill' : 'regular'}
              className={`cursor-pointer text-purple-100 transition duration-200 ease-in`}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })}
    </div>
  )
}
