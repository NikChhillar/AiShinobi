import { Heading } from '@/components/Heading'
import { UserIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Heading
        title="Iconic Character Showcase"
        description="Explore Beloved Characters that Leave a Marks..."
        icon={UserIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  )
}

export default page

