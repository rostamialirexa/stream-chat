import React from 'react'
import { currentUser, User } from '@clerk/nextjs/server'
import StreamVideo from '@/components/stream-video'
export default async function Video() {
  const user = (await currentUser()) as User

  if (!user) {
    return null
  }

  const userData = {
    id: user.id,
    ...(user.fullName ? { name: user.fullName } : {}),
    ...(user.imageUrl ? { image: user.imageUrl } : {})
  }

  return (
    <StreamVideo userData={userData}/>
  )
}
