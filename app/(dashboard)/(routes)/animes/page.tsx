import { Heading } from '@/components/Heading'
import { VideoIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Heading
        title="Top 15 Anime Curation"
        description="Craft Your Definitive List of Anime Favorites..."
        icon={VideoIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  )
}

export default page

