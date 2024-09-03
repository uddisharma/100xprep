import React from 'react'

const Loading = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                    {[...new Array(3)].map((i) => (
                        <div
                            key={"first-array" + i}
                            className=" w-full h-40 rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {[...new Array(2)].map((i) => (
                        <div
                            key={"second-array" + i}
                            className="h-[300px] w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
                <div className="w-full">
                    <div
                        className="h-[300px] w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                    ></div>
                </div>
            </div>
        </div >
    )
}

export default Loading