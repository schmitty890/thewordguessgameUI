import React from "react"
import { Fragment } from "react"
import { Disclosure, Menu, Transition, Popover } from "@headlessui/react"
import {
  BellIcon,
  MenuIcon,
  XIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import {
  UserAuthProvider,
  UserAuthConsumer,
} from "../../contexts/userDataObject"
// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// }
const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "How to play", href: "#", current: false },
  { name: "FAQ", href: "/faq", current: false },
  // { name: "Calendar", href: "#", current: false },
  // { name: "Reports", href: "#", current: false },
]
const userNavigation = [
  { name: "Your Profile", href: "#", logout: false },
  { name: "Settings", href: "#", logout: false },
  { name: "Sign out", href: "#", logout: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function DefaultHeader() {
  return (
    // <UserAuthProvider>
    <UserAuthConsumer>
      {({ userID, user, loggedIn, logout, loading }) => (
        <>
          {loggedIn ? (
            <Disclosure as="nav" className="bg-gray-800">
              {({ open }) => (
                <>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                      <div className="flex items-center">
                        <div className="flex">
                          <div className="text-gray-300 mt-1">The&nbsp;</div>
                          <img
                            className="h-8 w-8"
                            src="../../images/logo.png"
                            alt="The Word Guess Game Logo"
                          />
                          <div className="text-gray-300 mt-1">
                            ord Guess Game
                          </div>
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map(item => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                  "px-3 py-2 rounded-md text-sm font-medium"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <button
                            type="button"
                            className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>

                          {/* Profile dropdown */}
                          <Menu as="div" className="ml-3 relative">
                            <div>
                              <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  <a
                                    href="/profile"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                  >
                                    Your Profile
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                  >
                                    Settings
                                  </a>
                                </Menu.Item>

                                <Menu.Item>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    onClick={logout}
                                  >
                                    Logout
                                  </a>
                                </Menu.Item>
                                {/* {userNavigation.map(item => (
                                    <Menu.Item key={item.name}>
                                      {({ active }) => (
                                        <a
                                          href={item.href}
                                          onClick={() =>
                                            item.logout ? logout : ""
                                          }
                                          className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                          )}
                                        >
                                          {item.name}
                                        </a>
                                      )}
                                    </Menu.Item>
                                  ))} */}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <MenuIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      {navigation.map(item => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block px-3 py-2 rounded-md text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white">
                            {user.name} {user.firstName}
                          </div>
                          <div className="text-sm font-medium leading-none text-gray-400">
                            {user.email} {userID}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 px-2 space-y-1">
                        <Disclosure.Button
                          href="#"
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          Your Profile
                        </Disclosure.Button>
                        <Disclosure.Button
                          href="#"
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          Settings
                        </Disclosure.Button>
                        <Disclosure.Button
                          href="#"
                          onClickCapture={logout}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          Logout
                        </Disclosure.Button>
                        {/* {userNavigation.map(item => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              onClick={() => (item.logout ? logout : "")}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))} */}
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ) : (
            <Disclosure as="nav" className="bg-gray-800">
              {({ open }) => (
                <>
                  {/* FOR STICKY BOTTOM */}
                  {/* <div className="bg-yellow-600 fixed inset-x-0 bottom-0 p-4"> */}
                  <div className="bg-yellow-600 ">
                    <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                      <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                          <span className="flex p-2 rounded-lg bg-red-700">
                            <SpeakerphoneIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                          <p className="ml-3 font-medium text-white  ">
                            <span className="md:hidden">
                              BIG NEWS! We're launching our word guessing game
                              site at the end of May!
                            </span>
                            <span className="hidden md:inline">
                              BIG NEWS! We're launching our word guessing game
                              site at the end of May!
                            </span>
                          </p>
                        </div>
                        {/* <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                      >
                        Learn more
                      </a>
                    </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                          />
                        </div>
                      </div>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        {/* <div>
                          <Menu.Button className="uppercase inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            Site Language
                            <ChevronDownIcon
                              className="-mr-1 ml-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div> */}

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <img
                                      className="h-8 w-8 rounded inline mr-4"
                                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                                      alt="Workflow"
                                    />
                                    English
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </>
              )}
            </Disclosure>
          )}
        </>
      )}
    </UserAuthConsumer>
    // </UserAuthProvider>
  )
}
