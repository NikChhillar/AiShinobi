import { Heading } from '@/components/Heading'
import WatchLists from '@/components/WatchList'
import { ClockIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Heading
        title="Effortless Watchlist Management"
        description="Stay Organized with Seamless Anime Tracking using drag and drop..."
        icon={ClockIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <WatchLists />
    </div>
  )
}

export default page

