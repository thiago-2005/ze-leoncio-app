'use client'
import '@/services/auth'
import { login } from '@/services/auth'
import { useRouter } from 'next/navigation'

export function Login () {
  const router = useRouter()

  async function handleLogin () {
    await login()
    router.refresh()
  }

  return (
    <button
      className="btn btn--secondary border-2 bg-indigo-600 p-2 text-white leading-6 font-medium py-2 px-3 rounded-lg  duration-200 fixed bottom-3 sm:bottom-auto sm:top-3 right-1 z-50 bg-gradient-to-r"
      onClick={handleLogin}
    >
      Entrar
    </button>
  )
}