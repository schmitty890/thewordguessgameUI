import React from "react"

export default function GlobalGame() {
  return (
    <div className=" ">
      {/* <p>play a global game</p> */}
      <a href="/dailyGlobalGame">
        <button className="w-full bg-transparent hover:bg-green-900 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-900 hover:border-transparent rounded">
          play global game
        </button>
      </a>
    </div>
  )
}
