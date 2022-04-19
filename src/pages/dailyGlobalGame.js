import React from "react"
import { LockClosedIcon } from "@heroicons/react/solid"
import { dailyGlobalUserGuess } from "../api/dailyGlobalGame"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Formik } from "formik"
import {
  GlobalGameProvider,
  GlobalGameConsumer,
} from "../contexts/globalGameContext"

const DailyGlobalGame = () => (
  <GlobalGameProvider>
    <GlobalGameConsumer>
      {({ userGlobalGameStats, makeGuess }) => (
        <div>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <form className="mt-8 space-y-6" action="#" method="POST"></form>

              <div>
                <img
                  className="mx-auto h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Daily Global Game!
                </h2>
                {/* <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p> */}
              </div>
              <Formik
                initialValues={{
                  wordGuess: "",
                }}
                // validate={values => {
                //   const errors = {}
                //   if (!values.firstGuess) {
                //     errors.firstGuess = "Required"
                //   } else if ((values.firstGuess = "a")) {
                //     errors.firstGuess = "go to next"
                //   }
                //   return errors
                // }}
                onSubmit={async (values, { setSubmitting }) => {
                  var testToast = toast.info("Submitting guess and checking...")

                  // const response = await dailyGlobalUserGuess(values)
                  const response = await makeGuess(values)
                  console.log(response)
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
                  <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label className="sr-only">word guess</label>

                        <input
                          type="text"
                          name="wordGuess"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.word}
                          required
                          placeholder="entire word Guess"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
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
            <div>
              <div>guesses</div>
              <ul>
                {/* {userGlobalGameStats.userID} */}
                {/* {userGlobalGameStats.data.userID} */}
                {/* {userGlobalGameStats.createdAt} */}
                {userGlobalGameStats ? (
                  userGlobalGameStats.guesses ? (
                    userGlobalGameStats.guesses.map((guess, i) => (
                      <li key={i}>{guess.word}</li>
                    ))
                  ) : (
                    <li>no guesses have been made yet</li>
                  )
                ) : (
                  <div>no user has played yet</div>
                )}
              </ul>
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
)

export default DailyGlobalGame
