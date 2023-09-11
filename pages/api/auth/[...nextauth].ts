import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import kakoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'

const kakaoCustomProvider = kakoProvider({
  clientId: process.env.KAKAO_ID ?? '',
  clientSecret: process.env.KAKAO_SECRET ?? '',
})

const naverCustomProvider = NaverProvider({
  clientId: process.env.NAVER_ID ?? '',
  clientSecret: process.env.NAVER_SECRET ?? '',
})

kakaoCustomProvider.style = {
  logo: 'https://www.kakaocorp.com/page/favicon.ico',
  logoDark: 'https://www.kakaocorp.com/page/favicon.ico',
  bgDark: '#FEE500',
  bg: '#FEE500',
  text: '#191919',
  textDark: '#191919',
}

naverCustomProvider.style = {
  logo: 'https://logoproject.naver.com/favicon.ico',
  logoDark: 'https://logoproject.naver.com/favicon.ico',
  bgDark: '#2DB400',
  bg: '#2DB400',
  text: '#FFFFFF',
  textDark: '#FFFFFF',
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    kakaoCustomProvider,
    naverCustomProvider,
  ],
}
export default NextAuth(authOptions)
