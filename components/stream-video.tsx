import { createToken } from '@/lib/actions'
import { useTheme } from 'next-themes'
import React, { useCallback } from 'react'
import { CallingState, StreamCall, StreamVideo, StreamVideoClient, useCall, useCallStateHooks, User } from '@stream-io/video-react-sdk';

interface StreamVideoProps {
    userData: {
        id: string
        name?: string
        image?: string
    }
}

const StreamVideoPage = ({ userData }: StreamVideoProps) => {
    const { resolvedTheme } = useTheme()

    const tokenProvider = useCallback(async () => {
        return await createToken(userData.id)
    }, [userData.id, createToken])

    const client = useCreateChatClient({
        userData,
        tokenOrProvider: tokenProvider,
        apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!
    })
    const call = client.call('default', callId);
    call.join({ create: true });
    if (!client) {
        return null
    }
    return (
        <div>StreamVideo</div>
    )
}

export default StreamVideo