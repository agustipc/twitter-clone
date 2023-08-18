'use client'

import { Card, CardHeader, CardBody, CardFooter, Avatar, Link } from '@nextui-org/react'
import { IconMessageCircle, IconHeart, IconRepeat } from '@tabler/icons-react'

export default function PostCard ({ userName, avatarUrl, userFullName, content }: { userName: string, avatarUrl: string, userFullName: string, content: string }) {
  // const [isFollowed, setIsFollowed] = useState(false)

  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 cursor-pointer transition border-b border-white/20 rounded-none">
      <CardHeader className="justify-between">
        <div className="flex gap-x-3">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
        {/* <Button
          className={isFollowed ? 'bg-transparent text-foreground border-default-200' : ''}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => { setIsFollowed(!isFollowed) }}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button> */}
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>
  )
}
