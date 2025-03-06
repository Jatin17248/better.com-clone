import React from 'react';
import { useState, useEffect } from 'react'

const Header = () => {
     const[headerActive, setHeaderActive] = useState(false);
       

  return (
    <header
    className="sticky top-0 z-20 transition-all ease-in-out duration-300 bg-white"
  >
    <nav
      className="m-auto flex max-w-screen-2xl justify-between p-5 md:py-5 md:px-10 xl:p-5"
    >
      <div className="flex flex-row">
      <div className={!headerActive ? ("invisible -translate-x-full bg-interactiveForegroundInverseTertiary inset-0 overflow-auto overscroll-contain fixed z-10 p-6 shadow-md flex flex-col transition-translate duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]"):("bg-interactiveForegroundInverseTertiary inset-0 overflow-auto overscroll-contain fixed z-10 p-6 shadow-md flex flex-col transition-translate duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]")}>
          <div className="flex justify-between items-center">
            <a className="inline-block px-2 flex-none" href="/"
              ><svg
                role="img"
                className="icon icon-LogoBetter2021"
                width="85px"
                height="35px"
                viewBox="0 0 495 133"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Better</title>
                <path
                  d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z"
                  fill="currentColor"
                ></path></svg></a
            ><button onClick={ ()=>{ setHeaderActive(false);}}
              className="inline-block rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent hover:bg-interactiveSecondary focus:bg-interactiveSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:bg-interactiveSecondary px-base h-2xl w-auto"
            >
              <div className="align-center flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </div>
            </button>
          </div>
          <details className="group flex-none">
            <summary
              className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&amp;::-webkit-details-marker]:hidden"
            >
              Buy<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <ul className="m-0 list-none">
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/preapproval/nxt-purchase"
                  >Apply now</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/mortgage-rates"
                  >Purchase rates</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/how-much-house-can-i-afford"
                  >Affordability calculator</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/mortgage-calculator/"
                  >Mortgage calculator</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/rent-vs-buy-calculator/"
                  >Rent vs buy calculator</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/find-an-agent"
                  >Find an agent</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/va-loan/"
                  >VA loans</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/content/"
                  >Learning center</a
                >
              </li>
            </ul>
          </details>
          <details className="group flex-none">
            <summary
              className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&amp;::-webkit-details-marker]:hidden"
            >
              Refinance<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <ul className="m-0 list-none">
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/preapproval/nxt-refinance"
                  >Apply Now</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/refinance-rates"
                  >Refinance rates</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/content/refinance-calculator/"
                  >Cash-out refinance calculator</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/content/"
                  >Learning Center</a
                >
              </li>
            </ul>
          </details>
          <details className="group flex-none">
            <summary
              className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&amp;::-webkit-details-marker]:hidden"
            >
              HELOC<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <ul className="m-0 list-none">
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/preapproval/nxt-heloc"
                  >Apply Now</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/heloc-calculator"
                  >Calculate your Cash 💵</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/heloc-vs-cashout-refi-calculator/"
                  >HELOC vs. Cash-out Refinance</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/content/"
                  >Learning Center</a
                >
              </li>
            </ul>
          </details>
          <details className="group flex-none">
            <summary
              className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&amp;::-webkit-details-marker]:hidden"
            >
              Rates<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <ul className="m-0 list-none">
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/mortgage-rates"
                  >Purchase mortgage rates</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/refinance-rates"
                  >Refinance rates</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/cash-out-refinance-rates"
                  >Refinance cash-out rates</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/heloc-rates"
                  >HELOC rates</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/va-loan-rates/"
                  >Purchase VA rates</a
                >
              </li>
            </ul>
          </details>
          <details className="group flex-none">
            <summary
              className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&amp;::-webkit-details-marker]:hidden"
            >
              Better+<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <ul className="m-0 list-none">
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="https://www.bettercover.com/"
                  >Get Insurance</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/title/"
                  >Title and Closing</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/b/attorney-match/"
                  >Better Attorney Match</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/content/"
                  >Learning Center</a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/b/better-real-estate-partner-agents/"
                  >Better Agent Match<span
                    className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary"
                    >For Agents</span
                  ></a
                >
              </li>
              <li>
                <a
                  className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                  href="/b/duo/"
                  >Better Duo<span
                    className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary"
                    >For Agents</span
                  ></a
                >
              </li>
            </ul>
          </details>
          <div
            className="bg-successBackground px-6 py-2 rounded-full flex items-center justify-center"
          >
            <div className="mr-3">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                  fill="#292B29"
                ></path>
              </svg>
            </div>
            Call us anytime at<a
              className="ml-1 underline underline-offset-[3px] hover:text-textHighlight"
              href="tel:4155238837"
              >(415) 523 88371</a
            >
          </div>
          <div className="flex flex-col gap-4 mt-auto">
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-backgroundInverseSecondary text-interactiveForegroundPrimary hover:bg-accentPrimary h-16 px-12 py-5 w-auto"
              href="/start"
            >
              <p
                className="leading-body m-0 p-0 text-left text-base flex flex-col items-center text-current font-bold"
              >
                <span>Get started</span
                ><span className="text-xs font-normal text-interactiveSecondary"
                  >3 min | No credit impact</span
                >
              </p> </a
            ><a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-16 px-12 py-5 w-auto font-normal"
              href="/account/sign-in"
              >Sign in<span className="ml-xs"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle></svg></span
            ></a>
          </div>
        </div>
        <button
          aria-label="close navigation bar"
          className="bg-interactiveForegroundInversePrimary fixed inset-0 h-screen w-screen opacity-80 z-1 invisible focus:border transition-translate duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]"
        ></button>
        <ul className="flex items-center">
          <li className="mr-2">
            <a
              className="font-normal transition-all ease-in-out duration-300 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary"
              href="/"
              ><svg
                role="img"
                className="icon icon-LogoBetter2021"
                width="65px"
                height="20px"
                viewBox="0 0 495 133"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Better</title>
                <path
                  d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z"
                  fill="currentColor"
                ></path></svg
            ></a>
          </li>
          <li className="mx-5 hidden xl:block">
            <div className="group relative">
              <span className=""
                ><button
                  className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary"
                >
                  Buy
                </button></span
              >
              <div
                className="absolute invisible left-0 right-0 pt-2 group-hover:visible"
              >
                <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                  <div>
                    <a
                      href="/preapproval/nxt-purchase"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Apply now<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/mortgage-rates"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Purchase rates<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/how-much-house-can-i-afford"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Affordability calculator<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/mortgage-calculator/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Mortgage calculator<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/rent-vs-buy-calculator/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Rent vs buy calculator<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/find-an-agent"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Find an agent<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/va-loan/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >VA loans<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/content/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Learning center<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mx-5 hidden xl:block">
            <div className="group relative">
              <span className=""
                ><button
                  className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary"
                >
                  Refinance
                </button></span
              >
              <div
                className="absolute invisible left-0 right-0 pt-2 group-hover:visible"
              >
                <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                  <div>
                    <a
                      href="/preapproval/nxt-refinance"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Apply Now<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/refinance-rates"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Refinance rates<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/content/refinance-calculator/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Cash-out refinance calculator<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/content/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Learning Center<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mx-5 hidden xl:block">
            <div className="group relative">
              <span className=""
                ><button
                  className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary"
                >
                  HELOC
                </button></span
              >
              <div
                className="absolute invisible left-0 right-0 pt-2 group-hover:visible"
              >
                <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                  <div>
                    <a
                      href="/preapproval/nxt-heloc"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Apply Now<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/heloc-calculator"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Calculate your Cash 💵<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/heloc-vs-cashout-refi-calculator/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >HELOC vs. Cash-out Refinance<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/content/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Learning Center<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mx-5 hidden xl:block">
            <div className="group relative">
              <span className=""
                ><button
                  className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary"
                >
                  Rates
                </button></span
              >
              <div
                className="absolute invisible left-0 right-0 pt-2 group-hover:visible"
              >
                <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                  <div>
                    <a
                      href="/mortgage-rates"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Purchase mortgage rates<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/refinance-rates"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Refinance rates<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/cash-out-refinance-rates"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Refinance cash-out rates<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/heloc-rates"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >HELOC rates<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/va-loan-rates/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Purchase VA rates<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mx-5 hidden xl:block">
            <div className="group relative">
              <span className=""
                ><button
                  className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary"
                >
                  Better+
                </button></span
              >
              <div
                className="absolute invisible left-0 right-0 pt-2 group-hover:visible"
              >
                <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                  <div>
                    <a
                      href="https://www.bettercover.com/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Get Insurance<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/title/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Title and Closing<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/b/attorney-match/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Better Attorney Match<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/content/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Learning Center<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/b/better-real-estate-partner-agents/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Better Agent Match<span
                        className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary"
                        >For Agents</span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                  <div>
                    <a
                      href="/b/duo/"
                      className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between"
                      >Better Duo<span
                        className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary"
                        >For Agents</span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <ul className="flex items-center gap-3 lg:gap-6">
        <li className="">
          <div className="group min-[520px]:relative">
            <div
              className="transition-all ease-in-out duration-300 border rounded-full p-2 md:p-3.5 border-strokeBorder group-hover:bg-backgroundSecondary group-hover:border-backgroundSecondary"
            >
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                className="transition-all ease-in-out group-hover:[&amp;_path]:fill-interactiveForegroundInversePrimary h-3 w-3 md:h-4 md:w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                  fill="#292B29"
                ></path>
              </svg>
            </div>
            <div
              className="absolute invisible left-1 min-[520px]:left-auto right-0 pt-2 group-hover:visible"
            >
              <div
                className="bg-backgroundTertiary px-10 py-7 rounded-base w-80 shadow-md"
              >
                Call us anytime at
                <a
                  className="underline hover:text-textHighlight"
                  href="tel:4155238837"
                  >415-523-8837</a
                >
              </div>
            </div>
          </div>
        </li>
        <li className="hidden md:block">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base leading-normal disabled:pointer-events-none disabled:opacity-50 bg-transparent py-5 w-auto font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary"
            href="/account/sign-in"
            >Sign in</a
          >
        </li>
        <li className="transition-all duration-500 ease-in hidden">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-backgroundInverseSecondary text-interactiveForegroundPrimary hover:bg-accentPrimary py-3 w-auto h-8 px-4 md:px-6 md:h-12"
            href="/start"
            >Get started</a
          >
        </li>
        <li>
          <button onClick={ ()=>{ setHeaderActive(true);}}
            className="xl:hidden flex items-center font-normal transition-all ease-in-out duration-300 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary"
            aria-label="open mobile nav bar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header