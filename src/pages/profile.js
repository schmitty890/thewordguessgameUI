import React from "react"
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import DefaultHeader from "../components/headers/defaultHeader"
import { UserAuthProvider, UserAuthConsumer } from "../contexts/userDataObject"
import Spinner1 from "../components/spinners/spinner1"
import Footer from "../components/footer"

export default function Profile() {
  return (
    <UserAuthProvider>
      <UserAuthConsumer>
        {({ userID, user, loggedIn, logout, loading }) => (
          <>
            {loggedIn ? (
              <div className="min-h-full">
                <DefaultHeader />

                <header className="bg-white shadow">
                  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                      Profile for {user.firstName}
                    </h1>
                  </div>
                </header>
                <main>
                  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <div className="p-10">
                          <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                  First Name
                                </label>
                                <input
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id="grid-first-name"
                                  type="text"
                                  // placeholder={userID}
                                  defaultValue={user.firstName}
                                />
                                {/* <p className="text-red-500 text-xs italic">
                                  Please fill out this field.
                                </p> */}
                              </div>
                              {/* <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                  Last Name
                                </label>
                                <input
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-last-name"
                                  type="text"
                                  placeholder="Doe"
                                />
                              </div> */}
                            </div>
                            {/* <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                  Password
                                </label>
                                <input
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-password"
                                  type="password"
                                  placeholder="******************"
                                />
                                <p className="text-gray-600 text-xs italic">
                                  Make it as long and as crazy as you'd like
                                </p>
                              </div>
                            </div> */}
                            {/* <div className="flex flex-wrap -mx-3 mb-2">
                              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                  City
                                </label>
                                <input
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-city"
                                  type="text"
                                  placeholder="Albuquerque"
                                />
                              </div>
                              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                  State
                                </label>
                                <div className="relative">
                                  <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                  >
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                      className="fill-current h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                  Zip
                                </label>
                                <input
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-zip"
                                  type="text"
                                  placeholder="90210"
                                />
                              </div>
                            </div> */}
                          </form>
                        </div>
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
}
