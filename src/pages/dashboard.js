import React from "react"
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import DefaultHeader from "../components/headers/defaultHeader"
import { UserAuthProvider, UserAuthConsumer } from "../contexts/userDataObject"
import Spinner1 from "../components/spinners/spinner1"
import CreateGame from "../components/games/createGame"
import CurrentGames from "../components/games/currentGames"
import GlobalGame from "../components/globalGames/globalGame"
import Footer from "../components/footer"
import Notification1 from "../components/notifications/notification1"
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  PuzzleIcon,
  ReceiptRefundIcon,
  UsersIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline"

const actions = [
  {
    title: "Daily Global Game",
    description:
      "Play the global daily game. The word changes every day. Keep your streak going!",
    href: "/dailyGlobalGame",
    icon: PuzzleIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "FAQ",
    description: "Theres no such thing as a 'dumb' question",
    href: "/faq",
    icon: QuestionMarkCircleIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  // {
  //   title: "Schedule a one-on-one",
  //   href: "#",
  //   icon: UsersIcon,
  //   iconForeground: "text-sky-700",
  //   iconBackground: "bg-sky-50",
  // },
  // {
  //   title: "Payroll",
  //   href: "#",
  //   icon: CashIcon,
  //   iconForeground: "text-yellow-700",
  //   iconBackground: "bg-yellow-50",
  // },
  // {
  //   title: "Submit an expense",
  //   href: "#",
  //   icon: ReceiptRefundIcon,
  //   iconForeground: "text-rose-700",
  //   iconBackground: "bg-rose-50",
  // },
  // {
  //   title: "Training",
  //   href: "#",
  //   icon: AcademicCapIcon,
  //   iconForeground: "text-indigo-700",
  //   iconBackground: "bg-indigo-50",
  // },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Dashboard() {
  return (
    <UserAuthProvider>
      <UserAuthConsumer>
        {({ userID, loggedIn, logout, loading }) => (
          <>
            <Notification1 />
            {loggedIn ? (
              <div className="min-h-full">
                <DefaultHeader />

                <header className="bg-white shadow">
                  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                      Dashboard
                    </h1>
                  </div>
                </header>
                <main>
                  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                      <div className="border-4 border-dashed border-gray-200 rounded-lg">
                        <div className="p-10">
                          {/* <div className=" ">Your games</div> */}
                          <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                            {actions.map((action, actionIdx) => (
                              <div
                                key={action.title}
                                className={classNames(
                                  actionIdx === 0
                                    ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                                    : "",
                                  actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                                  actionIdx === actions.length - 2
                                    ? "sm:rounded-bl-lg"
                                    : "",
                                  actionIdx === actions.length - 1
                                    ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                                    : "",
                                  "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                                )}
                              >
                                <div>
                                  <span
                                    className={classNames(
                                      action.iconBackground,
                                      action.iconForeground,
                                      "rounded-lg inline-flex p-3 ring-4 ring-white"
                                    )}
                                  >
                                    <action.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="mt-8">
                                  <h3 className="text-lg font-medium">
                                    <a
                                      href={action.href}
                                      className="focus:outline-none"
                                    >
                                      {/* Extend touch target to entire panel */}
                                      <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                      />
                                      {action.title}
                                    </a>
                                  </h3>
                                  <p className="mt-2 text-sm text-gray-500">
                                    {action.description}
                                  </p>
                                </div>
                                <span
                                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                                  aria-hidden="true"
                                >
                                  <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                  </svg>
                                </span>
                              </div>
                            ))}
                          </div>
                          {/* <GlobalGame /> */}
                          {/* <CurrentGames />
                          <div className=" ">
                            <CreateGame />
                          </div> */}
                          {/* <div>private game section</div> */}
                        </div>
                      </div>
                    </div>

                    {/* /End replace */}
                  </div>
                </main>
                <Footer />
              </div>
            ) : // <Spinner1 />
            null}
          </>
        )}
      </UserAuthConsumer>
    </UserAuthProvider>
  )
}
