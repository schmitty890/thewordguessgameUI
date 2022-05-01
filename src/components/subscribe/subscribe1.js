import React from "react"

const Subscribe1 = () => (
  <div className="mt-8 xl:mt-0">
    <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
      Subscribe to our newsletter
    </h3>
    <p className=" text-base text-gray-500">
      The latest news, articles, and resources, sent to your inbox monthly.
    </p>
    <p className="text-xs	text-gray-500">Don't worry, we won't spam you.</p>
    <form className="mt-4 sm:flex sm:max-w-md">
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        name="email-address"
        id="email-address"
        autoComplete="email"
        required
        className="appearance-none min-w-0 w-full bg-white border border-gray-300 py-2 px-4 text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-900 focus:border-green-900 focus:placeholder-gray-400 sm:max-w-xs"
        placeholder="Enter your email"
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-green-900 bg-transparent hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:text-white border-green-900"
        >
          Subscribe
        </button>
      </div>
    </form>
  </div>
)

export default Subscribe1
