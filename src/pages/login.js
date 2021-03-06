import React from "react"
import { LockClosedIcon } from "@heroicons/react/solid"
import { login } from "../api/login"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Formik } from "formik"

const Login = () => (
  <div>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" action="#" method="POST"></form>

        <div>
          <div className="flex items-center	justify-center">
            <div className="text-gray-900 mt-1">The&nbsp;</div>
            <img
              className="h-8 w-8"
              src="../../images/logo.png"
              alt="The Word Guess Game Logo"
            />
            <div className="text-gray-900 mt-1">ord Guess Game</div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
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
          initialValues={{ email: "", password: "" }}
          validate={values => {
            const errors = {}
            if (!values.email) {
              errors.email = "Required"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address"
            }
            return errors
          }}
          onSubmit={async (values, { setSubmitting }) => {
            var testToast = toast.info("Logging in...")

            const response = await login(values)
            if (response.status === 401) {
              toast.update(testToast, {
                render: `${response.data.message} ????`,
                type: toast.TYPE.ERROR,
                autoClose: 5000,
              })
            } else if (response.status === 200) {
              toast.update(testToast, {
                render: `Login successful ????  Redirecting to your dashboard page`,
                type: toast.TYPE.SUCCESS,
                autoClose: 5000,
              })
              setTimeout(() => {
                window.location.href = "/dashboard"
              }, 5000)
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
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    required
                    placeholder="Email address"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-900 focus:border-green-900 focus:z-10 sm:text-sm"
                  />
                  {errors.email && touched.email && errors.email}
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-900 focus:border-green-900 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  {errors.password && touched.password && errors.password}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-900 focus:ring-green-900 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-green-900 hover:text-green-700"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-green-900 bg-transparent hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:text-white border-green-900"
                >
                  Log in
                </button>
              </div>
            </form>
          )}
        </Formik>
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
)

export default Login
