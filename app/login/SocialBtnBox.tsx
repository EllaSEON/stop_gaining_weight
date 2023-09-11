import Image from 'next/image'
import kakaoIcon from '../../public/image/kakao_logo.svg'
import googleIcon from '../../public/image/google_logo.svg'
import naverIcon from '../../public/image/naver.logo.svg'

export default function SocialBtnBox() {
  return (
    <div>
      <p className="text-center mt-7 text-lg font-bold">Or Login with</p>
      <div className="flex justify-center items-center gap-10 mt-10">
        <Image
          src={kakaoIcon}
          alt="kakao icon"
          priority={true}
          className="w-14 h-14"
        />
        <Image
          src={googleIcon}
          alt="google icon"
          priority={true}
          className="w-14 h-14"
        />
        <Image
          src={naverIcon}
          alt="naver icon"
          priority={true}
          className="w-14 h-14"
        />
      </div>
    </div>
  )
}
