// crear un cliente de supabase desde un componente de tipo servidor
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '@/app/components/auth-button-server'
import { redirect } from 'next/navigation'
import { PostList } from './components/posts-list'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  // by doing "user:users()" we are renaming it
  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(*) ')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='max-w-[800px] mx-auto border-l border-r border-white/30 min-h-screen'>
        {/* @ts-expect-error Async Server Component */}
        <AuthButtonServer/>
        <PostList posts={posts}/>
      </section>
    </main>
  )
}
