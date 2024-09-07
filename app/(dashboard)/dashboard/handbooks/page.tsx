import { HoverEffect } from "@/components/ui/card-hover-effect";
import { RequestCorrection } from "@/components/others/CorrectionRequest";
import { Cover } from "@/components/ui/cover";

export default function CardHoverEffectDemo() {
  return (
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
      <div className="flex justify-between items-center mt-2 lg:mt-0  flex-wrap ">
        <h2 className="text-3xl font-bold text-white">
          <Cover>
            Interview Tools
          </Cover>
        </h2>
        <div className="w-full md:w-[250px]">
          <RequestCorrection />
        </div>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
const projects = [
  {
    title: "HTML CSS",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/dashboard/handbooks/1",
  },
  {
    title: "JavaScript",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/dashboard/handbooks/1",
  },
  {
    title: "TypeScript",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/dashboard/handbooks/1",
  },
  {
    title: "ReactJS",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/dashboard/handbooks/1",
  },
  {
    title: "NextJS",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/dashboard/handbooks/1",
  },
  {
    title: "Redux",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/dashboard/handbooks/1",
  },
  {
    title: "Recoil",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/dashboard/handbooks/1",
  },
];


