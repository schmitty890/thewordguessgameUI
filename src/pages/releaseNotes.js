import React from "react"
import DefaultHeader from "../components/headers/defaultHeader"
import { UserAuthProvider, UserAuthConsumer } from "../contexts/userDataObject"
import {
  NotificationProvider,
  NotificationConsumer,
} from "../contexts/notificationContext"
import ReleaseNotesData from "../data/releaseNotes.json"
import Notification1 from "../components/notifications/notification1"

const ReleaseNotes = () => (
  <UserAuthProvider>
    <UserAuthConsumer>
      {({ userID, loggedIn, logout, loading }) => (
        <div className="min-h-full">
          <DefaultHeader />
          <Notification1 />

          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Release Notes
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg">
                  <div className="p-10 ">
                    {ReleaseNotesData.releases.map((release, i) => (
                      <div
                        key={release.id}
                        className="pb-1 border-b-2 border-gray-700"
                      >
                        <div className="text-3xl">{release.title}</div>
                        <div className="text-sm">{release.date}</div>
                        <div className="text-sm">{release.description}</div>

                        {release.newFeatures ? (
                          <div className=" ">
                            <div className="border-b border-gray-200 flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-yellow-600 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                />
                              </svg>
                              <div className="text-3xl mt-2 capitalize">
                                new features
                              </div>
                            </div>
                            <ul className="pl-10">
                              {release.newFeatures.map((newFeature, j) => (
                                <li key={j} className="list-disc">
                                  {newFeature.feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        {release.bugFixes ? (
                          <div className=" ">
                            <div className="border-b border-gray-200 flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-green-700 inline-block"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <div className="text-3xl mt-2 capitalize">
                                fixed issues
                              </div>
                            </div>
                            <ul className="pl-10">
                              {release.bugFixes.map((bug, j) => (
                                <li key={j} className="list-disc">
                                  {bug.bug}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        {release.improvements ? (
                          <div>
                            <div className="border-b border-gray-200 flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-green-500 inline-block"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                              </svg>
                              <div className="text-3xl mt-2 capitalize">
                                improvements
                              </div>
                            </div>
                            <ul className="pl-10">
                              {release.improvements.map((improvement, j) => (
                                <li key={j} className="list-disc">
                                  {improvement.improvement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        {release.additionalResources ? (
                          <div>
                            <div className="border-b border-gray-200 flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-slate-800 inline-block"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                />
                              </svg>
                              <div className="text-3xl mt-2 capitalize">
                                additional resources
                              </div>
                            </div>
                            <ul className="pl-10">
                              {release.additionalResources.map(
                                (additionalResource, j) => (
                                  <li key={j} className="list-disc">
                                    {additionalResource.additionalResource}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </UserAuthConsumer>
  </UserAuthProvider>
)

export default ReleaseNotes
