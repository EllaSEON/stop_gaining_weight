'use client'
import { useSession } from 'next-auth/react'

export default function Main() {
  let session = useSession()
  if (session) {
    console.log('세션', session)
  }
  return <div>메인페이지</div>
}
