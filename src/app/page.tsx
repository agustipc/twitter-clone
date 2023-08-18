// crear un cliente de supabase desde un componente de tipo servidor
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '@/app/components/auth-button-server'
import { redirect } from 'next/navigation'
import { PostList } from './components/posts-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  // by doing "user:users()" we are renaming it
  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(*) ')
    .order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='max-w-[600px] w-full mx-auto border-l border-r border-white/30 min-h-screen'>
        <ComposePost useravatarUrl={session.user.user_metadata.avatar_url}/>
        <PostList posts={posts}/>
      </section>
        {/* @ts-expect-error Async Server Component */}
        <AuthButtonServer/>
    </main>
  )
}
