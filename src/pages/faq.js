import React from "react"
import DefaultHeader from "../components/headers/defaultHeader"
import { UserAuthProvider, UserAuthConsumer } from "../contexts/userDataObject"
import Spinner1 from "../components/spinners/spinner1"
import Footer from "../components/footer"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"

const faqs = [
  {
    question: "How do I play a global game?",
    answer: "Go to your dashboard and click play global game.",
  },
  {
    question: "question 2?",
    answer: "answer 2",
  },
  {
    question: "question 3?",
    answer: "answer 3",
  },
  {
    question: "question 4?",
    answer: "answer 4",
  },
  {
    question: "question 5?",
    answer: "answer 5",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function FAQ() {
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
                      Frequenty Asked Questions
                    </h1>
                  </div>
                </header>
                <main>
                  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                      <div className="border-4 border-dashed border-gray-200 rounded-lg ">
                        <div className="p-10">
                          <div className=" ">
                            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                              <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                                <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                  Frequently asked questions
                                </h2>
                                <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                                  {faqs.map(faq => (
                                    <Disclosure
                                      as="div"
                                      key={faq.question}
                                      className="pt-6"
                                    >
                                      {({ open }) => (
                                        <>
                                          <dt className="text-lg">
                                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                              <span className="font-medium text-gray-900">
                                                {faq.question}
                                              </span>
                                              <span className="ml-6 h-7 flex items-center">
                                                <ChevronDownIcon
                                                  className={classNames(
                                                    open
                                                      ? "-rotate-180"
                                                      : "rotate-0",
                                                    "h-6 w-6 transform"
                                                  )}
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            </Disclosure.Button>
                                          </dt>
                                          <Disclosure.Panel
                                            as="dd"
                                            className="mt-2 pr-12"
                                          >
                                            <p className="text-base text-gray-500">
                                              {faq.answer}
                                            </p>
                                          </Disclosure.Panel>
                                        </>
                                      )}
                                    </Disclosure>
                                  ))}
                                </dl>
                              </div>
                            </div>
                          </div>
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
