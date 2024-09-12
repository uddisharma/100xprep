import React from 'react'
import InterviewCard from '../InterviewCard'

const InterviewsGiven = () => {

    return (
        <div>
            {[...new Array(10)].map((i) => (
                <InterviewCard key={i} />
            ))}
        </div>
    )
}

export default InterviewsGiven