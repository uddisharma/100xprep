"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { NotionRenderer as NotionRendererLib } from "react-notion-x";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import { Spotlight } from "../ui/Spotlight";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code),
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection,
  ),
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation),
);
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  },
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  },
);

export const NotionRenderer = ({ recordMap }: { recordMap: any }) => {
  const components = useMemo(
    () => ({
      Code,
      Collection,
      Equation,
      Modal,
      Pdf,
    }),
    [],
  );

  return (
    <div className="h-full  w-full rounded-md flex flex-col items-center justify-center mx-auto py-10 md:py-0">
      <div className="hidden md:block">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>
      <div className="min-h-[100vh] overflow-y-scroll w-full">
        <NotionRendererLib
          recordMap={recordMap}
          fullPage={false}
          darkMode={true}
          components={components}
          bodyClassName="text-base sm:text-lg"
          className={"pt-12 "}
        />
      </div>
    </div>
  );
};
export default NotionRenderer;
