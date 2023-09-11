'use client'

import kakaoIcon from '../../public/image/kakao_logo.svg'
import googleIcon from '../../public/image/google_logo.svg'
import naverIcon from '../../public/image/naver.logo.svg'
import SocialBtn from './SocialBtn'

export default function SocialBtnBox() {
  return (
    <div>
      <p className="text-center mt-7 text-lg font-bold">Or Login with</p>
      <div className="flex justify-center items-center gap-10 mt-10">
        <SocialBtn src={kakaoIcon} />
        <SocialBtn src={googleIcon} />
        <SocialBtn src={naverIcon} />
      </div>
    </div>
  )
}
