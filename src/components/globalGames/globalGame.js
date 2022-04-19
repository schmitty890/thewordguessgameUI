import React from "react"

export default function GlobalGame() {
  return (
    <div className=" ">
      <p>play a global game</p>
      <a href="/dailyGlobalGame">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          play global game
        </button>
      </a>
    </div>
  )
}
