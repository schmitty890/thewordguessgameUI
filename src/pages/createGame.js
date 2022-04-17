import React from "react"
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import DefaultHeader from "../components/headers/defaultHeader"
import { UserAuthProvider, UserAuthConsumer } from "../contexts/userDataObject"
import {
  CreateGameProvider,
  CreateGameConsumer,
} from "../contexts/createGameContext"
import Spinner1 from "../components/spinners/spinner1"
import Footer from "../components/footer"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Formik } from "formik"
import { getUserByEmail } from "../api/createGame"

export default function CreateGame() {
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
                      Create game for {user.firstName}
                    </h1>
                  </div>
                </header>
                <main>
                  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                      <div className="border-4 border-dashed border-gray-200 rounded-lg">
                        <div className="p-10">
                          <CreateGameProvider>
                            <CreateGameConsumer>
                              {({
                                users,
                                addUserToUsersArray,
                                addToGame,
                                removeFromGame,
                                usersAddedToGame,
                                startGame,
                              }) => (
                                <Formik
                                  initialValues={{ email: "" }}
                                  validate={values => {
                                    const errors = {}
                                    if (!values.email) {
                                      errors.email = "Required"
                                    } else if (
                                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        values.email
                                      )
                                    ) {
                                      errors.email = "Invalid email address"
                                    }
                                    return errors
                                  }}
                                  onSubmit={async (
                                    values,
                                    { setSubmitting }
                                  ) => {
                                    var testToast =
                                      toast.info("Finding user...")
                                    console.log("submitting searching for user")

                                    console.log(values)
                                    const response = await getUserByEmail(
                                      values
                                    )
                                    console.log(response)

                                    if (
                                      response.data === undefined ||
                                      response.data.length == 0
                                    ) {
                                      console.log("NO USER FOUND")
                                      toast.update(testToast, {
                                        render: `User not found with that email address`,
                                        type: toast.TYPE.ERROR,
                                        autoClose: 5000,
                                        delay: 1000,
                                      })
                                    } else if (response.data.length > 0) {
                                      console.log(" USER FOUND")
                                      toast.update(testToast, {
                                        render: `Found user`,
                                        type: toast.TYPE.SUCCESS,
                                        autoClose: 5000,
                                        delay: 1000,
                                      })
                                      console.log(addUserToUsersArray)
                                      addUserToUsersArray(response.data).then(
                                        res => {
                                          console.log(res)
                                          document.getElementById(
                                            "email"
                                          ).value = ""
                                          // onClose()
                                          // toast({
                                          //   title: `${res.msg}`,
                                          //   status: res.status,
                                          //   isClosable: true,
                                          //   duration: 3000,
                                          // })
                                        }
                                      )
                                    }
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
                                    <>
                                      <form
                                        className="mt-8 space-y-6"
                                        onSubmit={handleSubmit}
                                      >
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                          <div className="flex justify-center">
                                            <div className="mb-3 xl:w-96">
                                              <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                                                <input
                                                  id="email"
                                                  type="email"
                                                  name="email"
                                                  // value={values.email}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  className="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                  placeholder="Search"
                                                  aria-label="Search"
                                                  aria-describedby="button-addon3"
                                                />
                                                {errors.email &&
                                                  touched.email &&
                                                  errors.email}
                                                <button
                                                  className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                  type="submit"
                                                  disabled={isSubmitting}
                                                  id="button-addon3"
                                                >
                                                  Search
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                      <div>
                                        users
                                        <ul>
                                          {users.map((user, i) => (
                                            // <li key={i}>test</li>
                                            <li key={i}>
                                              <div>
                                                <div className="inline-block">
                                                  {user[0].email}
                                                  {user[0].firstName}
                                                  {user[0]._id}
                                                  {usersAddedToGame.find(
                                                    function (ele) {
                                                      return (
                                                        ele._id === user[0]._id
                                                      )
                                                    }
                                                  )
                                                    ? "disabled"
                                                    : "not disabled"}
                                                  {/* {usersAddedToGame.includes(
                                                    user[0]._id
                                                  )
                                                    ? "disabled"
                                                    : "not disabled"} */}
                                                </div>
                                                <button
                                                  className={
                                                    "" +
                                                    (usersAddedToGame.find(
                                                      function (ele) {
                                                        return (
                                                          ele._id ===
                                                          user[0]._id
                                                        )
                                                      }
                                                    )
                                                      ? "btn inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                      : "btn inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out")
                                                  }
                                                  onClick={e =>
                                                    usersAddedToGame.find(
                                                      function (ele) {
                                                        return (
                                                          ele._id ===
                                                          user[0]._id
                                                        )
                                                      }
                                                    )
                                                      ? removeFromGame(
                                                          user
                                                        ).then(res => {
                                                          console.log(res)
                                                          toast({
                                                            title: `user added to game`,
                                                            type: toast.TYPE
                                                              .SUCCESS,
                                                            isClosable: true,
                                                            duration: 3000,
                                                          })
                                                        })
                                                      : addToGame(user).then(
                                                          res => {
                                                            console.log(res)
                                                            toast({
                                                              title: `user added to game`,
                                                              type: toast.TYPE
                                                                .SUCCESS,
                                                              isClosable: true,
                                                              duration: 3000,
                                                            })
                                                          }
                                                        )
                                                  }
                                                >
                                                  {usersAddedToGame.find(
                                                    function (ele) {
                                                      return (
                                                        ele._id === user[0]._id
                                                      )
                                                    }
                                                  )
                                                    ? "remove"
                                                    : "add"}
                                                </button>
                                              </div>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <button
                                          className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                          onClick={startGame}
                                        >
                                          start game
                                        </button>
                                      </div>
                                    </>
                                  )}
                                </Formik>
                              )}
                            </CreateGameConsumer>
                          </CreateGameProvider>
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
                      </div>
                    </div>
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
