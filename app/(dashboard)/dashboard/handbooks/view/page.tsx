import NotionRenderer from "@/components/others/NotionRenderer";
import { notFound } from "next/navigation";
import { NotionAPI } from "notion-client";
import React from "react";

export default async function ViewHandBook({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage(searchParams["notionId"] as string);

  if (!recordMap) return notFound();

  return <NotionRenderer recordMap={recordMap} />;
}
