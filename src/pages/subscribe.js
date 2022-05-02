import React from "react"
import Subscribe1 from "../components/subscribe/subscribe1"

const Subscribe = () => (
  <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Subscribe to our email subscription
      </h2>
      <p className="mt-6 text-center text-sm font-normal text-gray-900">
        don't worry, we only send you the latest feature updates to our game
      </p>

      <Subscribe1 />
    </div>
  </div>
)

export default Subscribe
