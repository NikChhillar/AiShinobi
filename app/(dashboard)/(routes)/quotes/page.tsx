import { Heading } from '@/components/Heading'
import { QuoteIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Heading
        title="Unforgettable Anime Quotes"
        description="Capture Moments with Memorable Anime Lines..."
        icon={QuoteIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  )
}

export default page

