import BottomGradient from "@/components/others/BottomGradient";
import { Spotlight } from "@/components/ui/Spotlight";
import { IconBuilding, IconCash, IconMapPin } from "@tabler/icons-react";

export default async function JobDetails({ params }: { params: { id: string } }) {
    return (
        <div className="h-full rounded-md flex flex-col items-left justify-center relative overflow-hidden mx-auto py-10 md:py-0 p-6  overflow-y-scroll w-full">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <h1
                className="w-full text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-[400px] lg:mt-10"
            >
                Full Stack developer</h1>
            <div className="rounded-lg mt-5">
                <p className="text-white mb-4 flex gap-2 items-center"> <IconBuilding className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    1doc healthcare pvt ltd
                </p>

                <p className="text-white mb-4 flex gap-2 items-center"> <IconMapPin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    Rohtak Hayrana
                </p>
                <p className="text-white mb-4 flex gap-2 items-center"> <IconCash className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    $30000 - $40000
                </p>


                <div className="border-t pt-4">
                    <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                    <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur ratione eius minima, iusto esse aut temporibus in officia obcaecati numquam reiciendis dolorum eos. Sapiente aliquid cum dolores nisi, eaque officia dolorem saepe? Perferendis ad commodi non! Eum beatae, ex hic odio cum magni maxime eligendi voluptas vitae recusandae molestias aperiam est mollitia iusto officiis inventore explicabo dicta ut rem natus aliquam. Id neque natus necessitatibus ipsum obcaecati saepe iure temporibus assumenda eligendi beatae culpa consequatur itaque, quo molestias labore reiciendis magni aliquam soluta. Sit quibusdam minus explicabo, nulla nostrum rem assumenda alias sunt ullam aut corrupti expedita, dolorum eveniet.</p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                    <ul className="list-disc pl-5">

                        <li className="text-white">Master degree in Computer Science or related field</li>

                        <li className="text-white">5+ years of experience in web development</li>

                        <li className="text-white">Strong problem-solving skills</li>

                        <li>Next js</li>

                        <li>React js</li>
                        <li>Node js</li>

                    </ul>
                </div>
                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-5 lg:w-[200px] mt-5 "

                >
                    Apply
                    <BottomGradient />
                </button>
            </div>
        </div>
    )
}