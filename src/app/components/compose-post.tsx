'use client'

import { ComposePostButton } from './compose-post-button'
import { useRef } from 'react'
import { addPost } from '../actions/add-post-action'

export function ComposePost ({ useravatarUrl }: { useravatarUrl: string }) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef} action={async (formData) => {
      await addPost(formData)
      formRef.current?.reset()
    }} className='flex flex-row p-3 border-b border-white/20'>
      <img src={useravatarUrl} className='rounded-full w-10 h-10 object-contain mr-4'/>
      <div className='flex flex-1 flex-col gap-y-4'>
      <textarea
        name="content"
        rows={4}
        placeholder='What is happening?'
        className='w-full text-l bg-black placeholder-gray-500 p-2'
      ></textarea>
        <ComposePostButton/>
      </div>
    </form>
  )
}
