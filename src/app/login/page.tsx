import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function Login () {
  return (
    <section className='grid place-content-center min-h-screen' >
      <h1 className='text-4xl font-bold text-center mb-6' >Sign In on Twitter Clone</h1>
      {/* @ts-expect-error Async Server Component */}
      <AuthButtonServer />
    </section>
  )
}
