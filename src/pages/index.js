import React from "react"

import DefaultHeader from "../components/headers/defaultHeader"
import Footer from "../components/footer"
import { UserAuthProvider, UserAuthConsumer } from "../contexts/userDataObject"
import { TotalUsersProvider, TotalUsersConsumer } from "../contexts/totalUsers"
import Spinner1 from "../components/spinners/spinner1"
import Images from "../data/testData.json"
import Subscribe1 from "../components/subscribe/subscribe1"

export default function Home() {
  return (
    <TotalUsersProvider>
      <TotalUsersConsumer>
        {({ totalUsers }) => (
          <UserAuthProvider>
            <UserAuthConsumer>
              {({ userID, loggedIn, logout, loading }) => (
                <>
                  {loggedIn ? (
                    <Spinner1 />
                  ) : (
                    <div>
                      <div className="min-h-full">
                        <DefaultHeader />
                        <div className="relative bg-white overflow-hidden">
                          <div className="max-w-7xl mx-auto">
                            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                              {/* <svg
                                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                                fill="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                              >
                                <polygon points="50,0 100,0 50,100 0,100" />
                              </svg> */}

                              <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">
                                      The word guess game
                                    </span>{" "}
                                    <span className="block text-green-600 xl:inline">
                                      Guess that word...
                                    </span>
                                  </h1>
                                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    A fun and competitive way to play a word
                                    guessing game with friends and family!
                                    {/* A fun and competitive way to play a word
                                    guessing game with friends and family with{" "}
                                    <span className="font-extrabold	">
                                      {totalUsers}
                                    </span>{" "}
                                    total users! */}
                                  </p>
                                  <div className="mt-5 mb-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                      <a
                                        href="/register"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-green-900 text-base font-medium rounded-md text-white hover:text-green-900 bg-green-900 hover:bg-transparent md:py-4 md:text-lg md:px-10"
                                      >
                                        Get started
                                      </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                      <a
                                        href="/login"
                                        className="w-full flex items-center justify-center px-8 py-3 border focus:ring-green-900 hover:text-white border-green-900 text-base font-medium rounded-md text-green-900 bg-transparent hover:bg-green-900 md:py-4 md:text-lg md:px-10"
                                      >
                                        I already have an account
                                      </a>
                                    </div>
                                  </div>
                                  <div className="mt-8 xl:mt-0">
                                    <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                                      Subscribe to our newsletter
                                    </h3>
                                    <p className=" text-base text-gray-500">
                                      The latest news, articles, and resources,
                                      sent to your inbox monthly.
                                    </p>
                                    <p className="text-xs	text-gray-500">
                                      Don't worry, we won't spam you.
                                    </p>
                                    <Subscribe1 />
                                  </div>
                                </div>
                              </main>
                            </div>
                          </div>
                          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 p-4">
                            <img
                              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                              src={Images.src}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <Footer />
                    </div>
                  )}
                </>
              )}
            </UserAuthConsumer>
          </UserAuthProvider>
        )}
      </TotalUsersConsumer>
    </TotalUsersProvider>
  )
}
