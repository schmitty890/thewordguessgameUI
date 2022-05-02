import React from "react"
import { subscribeUsersEmail } from "../../api/subscribe"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Formik } from "formik"

const Subscribe1 = () => (
  <div className=" ">
    <Formik
      initialValues={{ email: "" }}
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
        var testToast = toast.info("Adding your email as a subscriber...")

        const response = await subscribeUsersEmail(values)

        console.log(response)

        if (response.status === 409) {
          toast.update(testToast, {
            render: `${response.data.message} 🤯`,
            type: toast.TYPE.ERROR,
            autoClose: 5000,
          })
        } else if (response.status === 200) {
          setTimeout(() => {
            document.getElementById("email").value = ""
          }, 100)

          toast.update(testToast, {
            render: `Your email has been subscribed 👌`,
            type: toast.TYPE.SUCCESS,
            autoClose: 5000,
          })
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
        <form className="mt-4 sm:flex sm:max-w-md" onSubmit={handleSubmit}>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            autoComplete="email"
            required
            className="appearance-none min-w-0 w-full bg-white border border-gray-300 py-2 px-4 text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-900 focus:border-green-900 focus:placeholder-gray-400 sm:max-w-xs"
            placeholder="Enter your email"
          />
          <div>{errors.email && touched.email && errors.email}</div>

          <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-green-900 bg-transparent hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:text-white border-green-900"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}
    </Formik>
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

export default Subscribe1
