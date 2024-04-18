import React from "react";
import { Heading, PageContainer } from "../components/shared";
import Navbar from "../views/header";
import cardImage from "../assets/images/Image2.jpeg";

const DashBoard = () => {
  return (
    <section>
      <Navbar />
      <div className="">
        <PageContainer className={"px-2"}>
          <section className="relative mt-2 lg:mt-5">
            <div className="">
              <Heading>Available projects you can browse</Heading>
            </div>

            <div className="flex flex-col lg:flex-row mt-10">
              {/* <div className="w-[300px]">
                <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
                  <div class="flex justify-end px-4 pt-4">
                    <button
                      id="dropdownButton"
                      data-dropdown-toggle="dropdown"
                      class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
                      type="button"
                    >
                      <span class="sr-only">Open dropdown</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3"
                      >
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                      </svg>
                    </button>
                    <div
                      id="dropdown"
                      class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul class="py-2" aria-labelledby="dropdownButton">
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Export Data
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex flex-col items-center pb-10">
                    <img
                      class="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie image"
                    />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      Bonnie Green
                    </h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      Visual Designer
                    </span>
                    <div class="flex mt-4 md:mt-6">
                    </div>
                  </div>
                </div>
              </div> */}

              <div class="max-w-xl bg-white border border-gray-200 rounded-xl shadow overflow-hidden">
                <img
                  className="max-h-[150px] lg:max-h-[200px] w-full object-cover object-center"
                  class="rounded-t-lg"
                  src={cardImage}
                  alt=""
                />
                <div class="p-5">
                  <h5 class="mb-2 text-lg lg:text-2xl font-bold tracking-tight text-gray-900">
                    Intelligent Traffic Control System using Artificial
                    Intelligence
                  </h5>
                  <div className="bg-gray-100 p-2 rounded-xl">
                    <h3 class="mb-3 font-normal text-gray-700 ">
                      <small>Submitted by.</small>
                    </h3>
                    <div class="flex flex-col lg:flex-row lg:items-center gap-3 justify-between ">
                      <div className="flex gap-2 items-center">
                        <img
                          class="w-10 h-10 rounded-full mr-4"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NSEUHWmQsGxt4SfVM3f8VMW7vN8JsHnL-CnVII5E4A&s"
                          alt="Avatar of Jonathan Reinink"
                        />
                        <div class="text-sm space-y-1">
                          <p class="text-gray-900 leading-none">
                            <strong>Digbijayalaxmi Swain</strong>
                          </p>
                          <p class="text-gray-600">
                            Roll-No- <strong>2270129</strong>
                          </p>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center">
                          <a
                            href="project"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            View Project
                            <svg
                              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </PageContainer>
      </div>
    </section>
  );
};

export default DashBoard;
