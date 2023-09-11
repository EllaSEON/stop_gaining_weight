import Link from 'next/link'
import Image from 'next/image'
import MainImage from '../public/image/weight.webp'
import LogoTitle from '../public/image/logoTitle.png'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="sr-only">Record Weight</h1>
      <Image
        src={LogoTitle}
        alt="logo-title"
        priority={true}
        className="w-72 h-32 mb-16"
      />
      <Image
        src={MainImage}
        alt="logo-image"
        className="w-52 h-52 animate-bounce"
        priority={true}
      />
      <p className="mt-12 mb-20 font-bold text-2xl text-center font-mono">
        Record your weight
        <br />
        day by day to day
      </p>
      <div className="text-center">
        <Link
          className=" bg-main mt-8 px-12 py-4 rounded-lg text-xl font-bold text-white m-2"
          href="/login"
        >
          LOGIN
        </Link>
        <Link
          className=" bg-main mt-8 px-10 py-4 rounded-lg text-xl font-bold text-white m-2"
          href="/login"
        >
          SIGN UP
        </Link>
      </div>
    </div>
  )
}
