"use server"

import { auth } from '@/auth'
import { log } from 'console';
import Image from 'next/image';
import React from 'react'

const UserDetails = async () => {
    const session = await auth();
    const user = session?.user;
    log(session)

    return session?.user && (
        <div>
            {user?.image && (
                <Image src={user.image} alt={user?.name ?? "Avatar"} width={50} height={50} className='rounded-full hover:cursor-pointer' />
            )}
        </div>
    )
}

export default UserDetails