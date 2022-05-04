import React from "react"
import DefaultHeader from "../components/headers/defaultHeader"
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
    <>
      <div className="min-h-full">
        <DefaultHeader />

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">How To Play</h1>
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
                          How To Play
                        </h2>
                        <div>Guess the WORD in five tries.</div>
                        <div>
                          Each guess must be have valid letters. Hit the enter
                          button to submit.
                        </div>
                        <div>
                          After each guess, the color of the tiles will change
                          to show how close your guess was to the word.
                        </div>
                        <div>Examples</div>
                        <div>
                          <div class="capitalize mb-2 inline-flex items-center justify-center p-2 border border-slate-900 bg-green-100 text-green-800 w-1/5">
                            e
                          </div>
                          The green blocks signify the letter is in the word AND
                          in the correct spot
                        </div>
                        <div>
                          <div class="capitalize mb-2 inline-flex items-center justify-center p-2 border border-slate-900 bg-yellow-100 text-yellow-800 w-1/5">
                            s
                          </div>
                          The yellow blocks signify the letter is in the word
                          but NOT in the correct spot
                        </div>
                        <div>
                          <div class="capitalize mb-2 inline-flex items-center justify-center p-2 border border-slate-900 bg-red-100 text-red-800 w-1/5">
                            o
                          </div>
                          The red blocks signify the letter is NOT in the word
                          in any spot
                        </div>
                        <div>A new WORD will be available every day</div>
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
    </>
  )
}
