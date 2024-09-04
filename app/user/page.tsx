'use client'
import { useSession } from "next-auth/react"

export default function Component() {
    const { data: session, status } = useSession()

    if (status === "authenticated") {
        return <div>
            <p>Signed in as {JSON.stringify(session?.user)}</p>
            <p>expires at {session?.expires}</p>
            <p>status {status}</p>
        </div>

    }

    return <a href="/api/auth/signin">Sign in</a>
}