import AuthInput from '../components/AuthInput'
import Button from '../components/Button'
import SocialBtnBox from './SocialBtnBox'

export default function Login() {
  return (
    <div>
      <h1 className="text-center text-3xl mb-8 font-bold">LOGIN</h1>
      <form action="">
        <AuthInput
          htmlFor="userId"
          id="userId"
          label="email"
          placeholder="enter your email"
        />
        <br />
        <AuthInput
          htmlFor="userPw"
          id="userPw"
          label="password"
          placeholder="enter a password of at least 8 digits"
        />
        <Button
          type="submit"
          color="bg-main"
          onClick={() => {
            console.log('로그인')
          }}
        >
          LOGIN by Email
        </Button>
      </form>
      <SocialBtnBox />
    </div>
  )
}
