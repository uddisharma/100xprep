'use client'
import React, { useEffect } from 'react'
import { Input } from '../ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Searchbar = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const path = usePathname()
    const [query, setQuery] = React.useState(searchParams.get('query') ?? '')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`${path}?query=${query}`)
    }

    useEffect(() => {
        if (query == "") {
            router.push(`${path}`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return (
        <form onSubmit={handleSubmit} className="px-2 md:px-0 w-full md:w-[400px] ">
            <Input onChange={(e) => setQuery(e.target.value)} value={query} placeholder="Search Handbooks" />
        </form>
    )
}

export default Searchbar