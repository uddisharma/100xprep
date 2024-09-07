import NotionRenderer from '@/components/others/NotionRenderer'
import { notFound } from 'next/navigation'
import { NotionAPI } from 'notion-client'
import React from 'react'

const page1 = async () => {

  const notion = new NotionAPI()

  const recordMap = await notion.getPage('c81958a9184244feac0499a7d3fec79b')

  if (!recordMap) return notFound()

  return (
    <NotionRenderer recordMap={recordMap} />
  )
}

export default page1