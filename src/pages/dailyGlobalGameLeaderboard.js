import React from "react"

import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid"

import { dailyGlobalUserGuess } from "../api/dailyGlobalGame"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Formik } from "formik"
import {
  GlobalGameProvider,
  GlobalGameConsumer,
} from "../contexts/globalGameContext"
import { UserAuthProvider, UserAuthConsumer } from "../contexts/userDataObject"
import Spinner1 from "../components/spinners/spinner1"
import DefaultHeader from "../components/headers/defaultHeader"
import Footer from "../components/footer"
const timeline = [
  {
    id: 1,
    content: "Applied to",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Completed interview with",
    target: "Katherine Snyder",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const DailyGlobalGameLeaderboard = () => (
  <UserAuthProvider>
    <UserAuthConsumer>
      {({ userID, loggedIn, logout, loading }) => (
        <>
          {loggedIn ? (
            <div className="min-h-full">
              <DefaultHeader />

              <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Global Game Leaderboard
                  </h1>
                </div>
              </header>
              <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  {/* Replace with your content */}
                  <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg">
                      <div className="p-10">leaderboard</div>
                    </div>
                  </div>

                  {/* /End replace */}
                </div>
              </main>
              <Footer />
            </div>
          ) : (
            <Spinner1 />
          )}
        </>
      )}
    </UserAuthConsumer>
  </UserAuthProvider>
)

export default DailyGlobalGameLeaderboard
