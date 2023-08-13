import { Heading } from '@/components/Heading'
import { ClockIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Heading
        title="Effortless Watchlist Management"
        description="Stay Organized with Seamless Anime Tracking..."
        icon={ClockIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      
    </div>
  )
}

export default page

