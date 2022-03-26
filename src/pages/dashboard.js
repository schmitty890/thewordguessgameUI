import React from "react"
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import DefaultHeader from "../components/headers/defaultHeader"
import { UserAuthProvider, UserAuthConsumer } from "../contexts/userDataObject"
import Spinner1 from "../components/spinners/spinner1"
import Footer from "../components/footer"

export default function Dashboard() {
  return (
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
                      Dashboard
                    </h1>
                  </div>
                </header>
                <main>
                  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <div className="p-10">
                          our main components will go here
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
