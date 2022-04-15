import React from "react"

export default function CurrentGames() {
  return (
    <div className="w-1/3 bg-white rounded-lg shadow">
      <ul className="divide-y-2 divide-gray-100">
        <li className="p-3">
          <div className="flex ">
            <p>game 1</p>
            <a href="/" className="">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                view game
              </button>
            </a>
          </div>
        </li>
        <li className="p-3">Game 2</li>
        <li className="p-3">Game 3</li>
        <li className="p-3">Game 4</li>
      </ul>
    </div>
  )
}
