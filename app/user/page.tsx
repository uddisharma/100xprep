'use client'
import { addJob } from '@/actions/jobs'
import React from 'react'

const Page = () => {
    return (
        <div>
            <button
                onClick={async () => {
                    const res = await addJob({
                        id: 'your_id_here',
                        company: 'company',
                        description: 'description',
                        link: 'link',
                        location: 'location',
                        requirements: ['requirements'],
                        salary: 'salary',
                        startDate: new Date(),
                        endDate: new Date(),
                        title: 'title',
                    });
                    console.log(res)
                }}
            >Add Job</button>
        </div>
    )
}

export default Page
