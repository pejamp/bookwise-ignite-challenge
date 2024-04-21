import Image from 'next/image'
import logoImage from '@/assets/logo.svg'
import heroImage from '@/assets/login-banner.png'
import googleIcon from '@/assets/icons-google.svg'
import githubIcon from '@/assets/icons-github-fill.svg'
import rocketIcon from '@/assets/icons-rocket-launch.svg'
import { LoginButton } from '@/components/LoginButton'

export default function Login() {
  return (
    <div className="flex h-screen flex-row items-center justify-center gap-5 p-5">
      <div className="relative h-full w-full max-w-xl overflow-hidden rounded-md">
        <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-hero-login">
          <Image src={logoImage} alt="" height={58} priority />
        </div>
        <Image
          src={heroImage.src}
          alt=""
          width={600}
          height={900}
          className="h-full w-full"
        />
      </div>
      <div className="m-auto min-w-[372px]">
        <h1 className="text-2xl font-bold leading-short text-gray-100">
          Boas vindas!
        </h1>
        <p className="mb-10 leading-base text-gray-200">
          Faça seu login ou acesse como visitante.
        </p>
        <div className="flex flex-col gap-4">
          <LoginButton.Root>
            <LoginButton.Prefix>
              <Image src={googleIcon} alt="" height={32} />
            </LoginButton.Prefix>
            <LoginButton.Text>Entrar com Google</LoginButton.Text>
          </LoginButton.Root>
          <LoginButton.Root>
            <LoginButton.Prefix>
              <Image src={githubIcon} alt="" height={32} />
            </LoginButton.Prefix>
            <LoginButton.Text>Entrar com GitHub</LoginButton.Text>
          </LoginButton.Root>
          <LoginButton.Root>
            <LoginButton.Prefix>
              <Image src={rocketIcon} alt="" height={32} />
            </LoginButton.Prefix>
            <LoginButton.Text>Acessar como visitante</LoginButton.Text>
          </LoginButton.Root>
        </div>
      </div>
    </div>
  )
}
