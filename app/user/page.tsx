import React from 'react'

const page = () => {
  return (
    <div className="relative">
      <div className="before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-purple-400 before:via-pink-500 before:to-red-500">
        <div className="bg-white p-6">
          Your content here
        </div>
      </div>
    </div>

  )
}

export default page