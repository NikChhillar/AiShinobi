import { Heading } from '@/components/Heading'
import { Code } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Heading
        title="About this Project"
        description="created by Nikhil..."
        icon={Code}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <div className="container mx-auto mt-8 px-4 md:px-16 lg:px-32">
        <div className="rounded-lg shadow-lg bg-white p-8">
          <p className="text-gray-700 text-lg mb-4">
            Welcome to <span className="font-bold text-purple-500">AniHub</span> – Your Ultimate Anime Experience!
          </p>
          <p className="text-gray-600 mb-4">
            At AniHub, we&apos;re dedicated to bringing your love for anime to a whole new level. Our platform is designed to be your personal haven for all things anime. Whether you&apos;re an avid otaku or a casual watcher, AniHub is here to empower you to celebrate and cherish your favorite anime series, characters, and quotes.
          </p>
          <p className="text-gray-600 mb-4">
            With AniHub, you have the power to curate and organize your anime universe effortlessly. From creating your top 15 anime collection to showcasing iconic characters and preserving unforgettable quotes, we&apos;ve got it all covered. Seamlessly manage your watchlist, watch later list, and completed list with intuitive drag-and-drop functionality.
          </p>
          <p className="text-gray-600 mb-4">
            Our community is a place where anime lovers can come together to share their passion, exchange recommendations, and build connections. We believe that anime is not just a form of entertainment, but a journey that brings people closer and fosters creativity and imagination.
          </p>
          <p className="text-gray-600">
            Join us on this exciting adventure, where your anime journey is enriched, celebrated, and shared. Let&apos;s explore the vast anime universe together with AniHub!
          </p>
        </div>
      </div>
    </div>
  )
}

export default page

