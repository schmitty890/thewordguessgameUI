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

const DailyGlobalGame = () => (
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
                    Global Game
                  </h1>
                </div>
              </header>
              <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  {/* Replace with your content */}
                  <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg">
                      <div className="p-10">
                        <GlobalGameProvider>
                          <GlobalGameConsumer>
                            {({
                              userGlobalGameStats,
                              makeGuess,
                              todaysWordLength,
                            }) => (
                              <div>
                                <div className="min-h-full flex items-center justify-center">
                                  <div className="w-full">
                                    <form
                                      className="mt-8 space-y-6"
                                      action="#"
                                      method="POST"
                                    ></form>

                                    <div>
                                      <img
                                        className="mx-auto h-12 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                      />
                                      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                        Daily Global Game!
                                      </h2>
                                    </div>
                                    <Formik
                                      initialValues={{
                                        wordGuess: "",
                                      }}
                                      validate={values => {
                                        console.log("VALIDATE VALUES")
                                        console.log(values)
                                        console.log("VALIDATE VALUES")

                                        // document.getElementById(
                                        //   "wordGuess"
                                        // ).value = ""
                                        var valuesByClassName =
                                          document.getElementsByClassName(
                                            "wordGuess"
                                          )
                                        let valuesArr = []
                                        for (
                                          let i = 0;
                                          i < valuesByClassName.length;
                                          i++
                                        ) {
                                          valuesArr.push(
                                            valuesByClassName[i].value
                                          )
                                        }

                                        console.log("the values")
                                        console.log(valuesArr)
                                        valuesArr = valuesArr.join("")
                                        console.log({ wordGuess: valuesArr })
                                        console.log(typeof valuesArr)
                                        console.log(values)
                                        console.log(typeof values)
                                        console.log("the values")

                                        let inputSection =
                                          document.querySelector(
                                            "#input-section"
                                          )

                                        for (let input of inputSection.children) {
                                          input.onkeyup = function () {
                                            if (input.nextElementSibling) {
                                              console.log(
                                                "see if we have to reset the focus"
                                              )
                                              console.log(valuesArr)
                                              if (valuesArr) {
                                                input.nextElementSibling.focus()
                                              }
                                            }
                                          }
                                        }
                                        // const errors = {}
                                        // if (!values.firstGuess) {
                                        //   errors.firstGuess = "Required"
                                        // } else if ((values.firstGuess = "a")) {
                                        //   errors.firstGuess = "go to next"
                                        // }
                                        // return errors
                                      }}
                                      onSubmit={async (
                                        values,
                                        { setSubmitting }
                                      ) => {
                                        var testToast = toast.info(
                                          "Submitting guess and checking..."
                                        )

                                        // const response = await dailyGlobalUserGuess(values)

                                        // document.getElementById(
                                        //   "wordGuess"
                                        // ).value = ""
                                        var valuesByClassName =
                                          document.getElementsByClassName(
                                            "wordGuess"
                                          )
                                        let valuesArr = []
                                        for (
                                          let i = 0;
                                          i < valuesByClassName.length;
                                          i++
                                        ) {
                                          valuesArr.push(
                                            valuesByClassName[i].value
                                          )
                                        }

                                        console.log("the values")
                                        console.log(valuesArr)
                                        valuesArr = valuesArr.join("")
                                        console.log(valuesArr)
                                        console.log(typeof valuesArr)
                                        console.log(values)
                                        console.log(typeof values)
                                        console.log("the values")
                                        const response = await makeGuess({
                                          wordGuess: valuesArr,
                                        })

                                        // reset the form fields now that we have a response
                                        for (
                                          let i = 0;
                                          i < valuesByClassName.length;
                                          i++
                                        ) {
                                          valuesByClassName[i].value = ""
                                        }
                                        console.log(
                                          "reset focus to first input"
                                        )
                                        console.log(valuesByClassName)
                                        valuesByClassName[0].focus()

                                        // const response = await makeGuess(values)

                                        console.log("CHECK MESSAGE HERE")
                                        console.log(response)
                                        console.log("CHECK MESSAGE HERE")
                                        if (
                                          response.data.message ===
                                          "you reached 5 guesses"
                                        ) {
                                          setTimeout(() => {
                                            toast.update(testToast, {
                                              render: `${response.data.message} 🤯`,
                                              type: toast.TYPE.ERROR,
                                              autoClose: 5000,
                                            })
                                          }, 1000)
                                        } else if (
                                          response.data.message ===
                                          "you already guessed the correct word today. come back tomorrow!"
                                        ) {
                                          setTimeout(() => {
                                            toast.update(testToast, {
                                              render: `${response.data.message} `,
                                              type: toast.TYPE.SUCCESS,
                                              autoClose: 5000,
                                            })
                                          }, 1000)
                                        } else if (
                                          response.data.message ===
                                          "correct guess"
                                        ) {
                                          setTimeout(() => {
                                            toast.update(testToast, {
                                              render: `${response.data.message} `,
                                              type: toast.TYPE.SUCCESS,
                                              autoClose: 5000,
                                            })
                                          }, 1000)
                                        } else if (
                                          response.data.message ===
                                          "keep guessing"
                                        ) {
                                          setTimeout(() => {
                                            toast.update(testToast, {
                                              render: `${response.data.message} `,
                                              type: toast.TYPE.WARNING,
                                              autoClose: 5000,
                                            })
                                          }, 1000)
                                        }
                                        // if (response.status === 401) {
                                        //   toast.update(testToast, {
                                        //     render: `${response.data.message} 🤯`,
                                        //     type: toast.TYPE.ERROR,
                                        //     autoClose: 5000,
                                        //   })
                                        // } else if (response.status === 200) {
                                        //   toast.update(testToast, {
                                        //     render: `Login successful 👌  Redirecting to your dashboard page`,
                                        //     type: toast.TYPE.SUCCESS,
                                        //     autoClose: 5000,
                                        //   })
                                        //   setTimeout(() => {
                                        //     window.location.href = "/dashboard"
                                        //   }, 5000)
                                        // }
                                      }}
                                    >
                                      {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        /* and other goodies */
                                      }) => (
                                        <form
                                          className="mt-8 space-y-6"
                                          onSubmit={handleSubmit}
                                        >
                                          <input
                                            type="hidden"
                                            name="remember"
                                            defaultValue="true"
                                          />
                                          <div className="rounded-md shadow-sm -space-y-px">
                                            <div id="input-section">
                                              <label className="sr-only">
                                                word guess
                                              </label>
                                              <div>
                                                word length:{" "}
                                                {todaysWordLength ? (
                                                  <div>
                                                    {todaysWordLength.length}
                                                  </div>
                                                ) : (
                                                  <div>no word length</div>
                                                )}
                                              </div>
                                              {todaysWordLength
                                                ? todaysWordLength.map(
                                                    (letter, i) => (
                                                      <input
                                                        // id="wordGuess"
                                                        type="text"
                                                        key={i}
                                                        name="wordGuess"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.word}
                                                        required
                                                        placeholder="Letter"
                                                        className={
                                                          "wordGuess inline-flex text-center appearance-none rounded-none relative px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm " +
                                                          (todaysWordLength.length ===
                                                          1
                                                            ? "w-1/1"
                                                            : todaysWordLength.length ===
                                                              2
                                                            ? "w-1/2"
                                                            : todaysWordLength.length ===
                                                              3
                                                            ? "w-1/3"
                                                            : todaysWordLength.length ===
                                                              4
                                                            ? "w-1/4"
                                                            : todaysWordLength.length ===
                                                              5
                                                            ? "w-1/5"
                                                            : todaysWordLength.length ===
                                                              6
                                                            ? "w-1/6"
                                                            : todaysWordLength.length ===
                                                              7
                                                            ? "w-1/7"
                                                            : todaysWordLength.length ===
                                                              8
                                                            ? "w-1/8"
                                                            : todaysWordLength.length ===
                                                              9
                                                            ? "w-1/9"
                                                            : todaysWordLength.length ===
                                                              10
                                                            ? "w-1/10"
                                                            : todaysWordLength.length ===
                                                              11
                                                            ? "w-1/11"
                                                            : todaysWordLength.length ===
                                                              12
                                                            ? "w-1/12"
                                                            : "")
                                                        }
                                                      />
                                                    )
                                                  )
                                                : null}
                                              {/* <input
                                                id="wordGuess"
                                                type="text"
                                                name="wordGuess"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.word}
                                                required
                                                placeholder="Guess the word"
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                              /> */}
                                              {/* {errors.email && touched.email && errors.email} */}
                                            </div>
                                          </div>

                                          <div>
                                            <button
                                              type="submit"
                                              disabled={isSubmitting}
                                              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                              Guess
                                            </button>
                                          </div>
                                        </form>
                                      )}
                                    </Formik>
                                  </div>
                                </div>

                                <div className=" w-full ">
                                  {userGlobalGameStats ? (
                                    <div>
                                      streak: {userGlobalGameStats.streak}
                                    </div>
                                  ) : (
                                    <div>user has no streak</div>
                                  )}
                                </div>

                                <div className="flow-root">
                                  guesses
                                  <ul
                                    role="list"
                                    className="divide-y divide-gray-200"
                                  >
                                    {/* {userGlobalGameStats ? (
                                      userGlobalGameStats.guesses ? (
                                        userGlobalGameStats.guesses.map(
                                          (guess, i) => (
                                            <li key={i} className="py-4">
                                              {guess.word}
                                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                Badge
                                              </span>
                                            </li>
                                          )
                                        )
                                      ) : (
                                        <li>no guesses have been made yet</li>
                                      )
                                    ) : (
                                      <div>no user has played yet</div>
                                    )} */}

                                    {/* <div>
                                      {
                                        userGlobalGameStats.guesses[0]
                                          .correctSpots[0].spot
                                      }
                                    </div> */}
                                  </ul>
                                  <div>
                                    {userGlobalGameStats ? (
                                      userGlobalGameStats.guesses ? (
                                        userGlobalGameStats.guesses.map(
                                          (guess, i) => (
                                            <div className=" " key={i}>
                                              {guess.correctSpots.map(
                                                (spot, j) => (
                                                  // <span
                                                  //   className={
                                                  //     "w-1/6 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " +
                                                  //     (spot.spot === "correct"
                                                  //       ? "bg-green-100 text-green-800"
                                                  //       : spot.spot ===
                                                  //         "in the word"
                                                  //       ? "bg-yellow-100 text-yellow-800"
                                                  //       : spot.spot ===
                                                  //         "not there"
                                                  //       ? "bg-red-100 text-red-800"
                                                  //       : "")
                                                  //   }
                                                  // >
                                                  //   {spot.letter}
                                                  // </span>

                                                  <div
                                                    key={j}
                                                    className={
                                                      "mb-2 inline-flex items-center justify-center p-2 border border-slate-900 " +
                                                      (spot.spot === "correct"
                                                        ? "bg-green-100 text-green-800 "
                                                        : spot.spot ===
                                                          "in the word"
                                                        ? "bg-yellow-100 text-yellow-800 "
                                                        : spot.spot ===
                                                          "not there"
                                                        ? "bg-red-100 text-red-800 "
                                                        : "") +
                                                      (todaysWordLength.length ===
                                                      1
                                                        ? "w-1/1"
                                                        : todaysWordLength.length ===
                                                          2
                                                        ? "w-1/2"
                                                        : todaysWordLength.length ===
                                                          3
                                                        ? "w-1/3"
                                                        : todaysWordLength.length ===
                                                          4
                                                        ? "w-1/4"
                                                        : todaysWordLength.length ===
                                                          5
                                                        ? "w-1/5"
                                                        : todaysWordLength.length ===
                                                          6
                                                        ? "w-1/6"
                                                        : todaysWordLength.length ===
                                                          7
                                                        ? "w-1/7"
                                                        : todaysWordLength.length ===
                                                          8
                                                        ? "w-1/8"
                                                        : todaysWordLength.length ===
                                                          9
                                                        ? "w-1/9"
                                                        : todaysWordLength.length ===
                                                          10
                                                        ? "w-1/10"
                                                        : todaysWordLength.length ===
                                                          11
                                                        ? "w-1/11"
                                                        : todaysWordLength.length ===
                                                          12
                                                        ? "w-1/12"
                                                        : "")
                                                    }
                                                  >
                                                    {spot.letter}
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          )
                                          // <li key={i} className="py-4">
                                          //   {guess.word}
                                          //   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                          //     Badge
                                          //   </span>
                                          // </li>
                                        )
                                      ) : (
                                        <li>no guesses have been made yet</li>
                                      )
                                    ) : (
                                      <div>no user has played yet</div>
                                    )}
                                  </div>
                                </div>
                                <ToastContainer
                                  position="top-right"
                                  autoClose={5000}
                                  hideProgressBar={false}
                                  newestOnTop={false}
                                  closeOnClick
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                />
                                {/* Same as */}
                                <ToastContainer />
                              </div>
                            )}
                          </GlobalGameConsumer>
                        </GlobalGameProvider>
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

export default DailyGlobalGame