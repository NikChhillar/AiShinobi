import { Heading } from '@/components/Heading'
import { Code } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Heading
        title="About this Project"
        description="Created by Nikhil..."
        icon={Code}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <h1 className="text-3xl font-semibold mb-4 px-8 mt-8">About AniHub</h1>

      <div className="flex-1 px-32">
        <p className="text-lg mb-4">
          AniHub is your ultimate destination to celebrate your passion for anime. With a mission to empower anime enthusiasts, AniHub offers a platform to curate and organize your anime universe effortlessly.
        </p>
        <p className="text-lg mb-4">
          From crafting your top 15 anime collection to showcasing iconic characters and preserving unforgettable quotes, AniHub brings together the essential elements that define your anime experience.
        </p>
        <p className="text-lg mb-4">
          Seamlessly manage your watchlist, watch later list, and completed list with intuitive drag-and-drop functionality. Dive into the world of anime with AniHub and make your mark on the anime realm.
        </p>
        <p className="text-lg">
          Join us in building a community that celebrates the art, storytelling, and emotions of anime. AniHub is where your anime journey begins!
        </p>
      </div>
    </div>
  )
}

export default page

