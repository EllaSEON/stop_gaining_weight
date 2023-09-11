import Image from 'next/image'
import { signIn } from 'next-auth/react'

interface SocialBtnProps {
  src: string
}

export default function SocialBtn({ src }: SocialBtnProps) {
  return (
    <button
      type="button"
      onClick={() => {
        signIn()
      }}
    >
      <Image src={src} alt={src} priority={true} className="w-14 h-14" />
    </button>
  )
}
