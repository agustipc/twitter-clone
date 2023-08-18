import PostCard from './post-card'
import { type Post } from '@/app/types/posts'

export function PostList ({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {
        posts?.map(post => {
          const { id, user, content } = post
          const { user_name: userName, avatar_url: avatarUrl, name: userFullName } = user

          return (
              <PostCard key={id} userName={userName} avatarUrl={avatarUrl} userFullName={userFullName} content={content} />
          )
        })
      }
    </>
  )
}
