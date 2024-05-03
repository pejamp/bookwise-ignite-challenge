import Image, { ImageProps } from 'next/image'

type SizeTypes = {
  small: string
  medium: string
  large: string
}

const sizeValues: SizeTypes = {
  small: 'w-[32px] h-[32px]',
  medium: 'w-[40px] h-[40px]',
  large: 'w-[72px] h-[72px]',
}

interface AvatarProps extends ImageProps {
  size: keyof SizeTypes
}

export function Avatar({ size = 'small', ...rest }: AvatarProps) {
  const sizeValue = sizeValues[size]

  return (
    <div
      className={`flex ${sizeValue} items-center justify-center overflow-hidden rounded-full bg-gradient-vertical`}
    >
      <Image
        className={`h-full w-full rounded-full object-cover p-0.5`}
        {...rest}
      />
    </div>
  )
}
