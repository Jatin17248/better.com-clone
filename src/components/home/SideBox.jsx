import React from 'react'
import { useState } from 'react'
const SideBox = () => {
    const[isHovered, setIsHovered] = useState(false);
    const[isPresent, setIsPresent] = useState(true);
    return (
        isPresent && (<>
            {(!isHovered) ?
                (<><div onMouseEnter={() => setIsHovered(true)} className="fixed bottom-base right-base cursor-pointer rounded-base border-none z-50 hidden md:block transition-all duration-300 duration-[3000ms] ease-in-out max-w-xs">
            <div className="transition-all duration-300 ease-in-out">
              <div className="flex items-center cursor-pointer md:w-72 md:shadow-md rounded-lg p-4 md:p-none md:rounded-base">
                <div className="w-[30%] relative max-w-24">
                  <img alt="Better Forever" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="w-full h-full rounded-base md:rounded-l-base object-cover mr-3" src="https://media.better.com/better2/better-forever/floating-image.webp" style={{ color: "transparent" }} />
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <p className="leading-body m-0 p-0 text-left text-base text-white font-bold">
                      Better Forever</p>
                  </div>
                </div>
                <div className="flex-1 p-3 md:bg-successBackground rounded-r-base">
                  <p className="font-normal leading-body m-0 p-0 text-left text-sm text-backgroundInversePrimary">
                    Save on future home loans with $0 origination fees.</p>
                  <p className="leading-body m-0 p-0 text-left text-sm font-bold text-backgroundInversePrimary flex items-center">
                    See details<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 w-4 h-4">
                      <path d="M5 12h14">
                      </path>
                      <path d="m12 5 7 7-7 7">
                      </path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="fixed bottom-0 flex justify-center items-end w-full shadow-lg  z-[9999]">
              <div className="bg-white rounded-t-base w-full rounded-t-2xl p-2 inset-shadow-sm shadow-top" draggable="false" style={{ opacity: 1, transform: "none", userSelect: "none", touchAction: "pan-x" }}
              >
                <div className="w-12 h-1 bg-disabled  rounded-full mx-auto mb-3">
                </div>
                <div className="flex items-center cursor-pointer md:w-72 md:shadow-md rounded-lg p-4 md:p-none md:rounded-base">
                  <div className="w-[30%] relative max-w-24">
                    <img alt="Better Forever" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="w-full h-full rounded-base md:rounded-l-base object-cover mr-3" src="https://media.better.com/better2/better-forever/floating-image.webp" style={{ color: "transparent" }} />
                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                      <p className="leading-body m-0 p-0 text-left text-base text-white font-bold">
                        Better Forever</p>
                    </div>
                  </div>
                  <div className="flex-1 p-3 md:bg-successBackground rounded-r-base">
                    <p className="font-normal leading-body m-0 p-0 text-left text-sm text-backgroundInversePrimary">
                      Save on future home loans with $0 origination fees.</p>
                    <p className="leading-body m-0 p-0 text-left text-sm font-bold text-backgroundInversePrimary flex items-center">
                      See details<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 w-4 h-4">
                        <path d="M5 12h14">
                        </path>
                        <path d="m12 5 7 7-7 7">
                        </path>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div></>):(<div onMouseLeave={() => setIsHovered(false)}
                    className="fixed bottom-base right-base cursor-pointer rounded-base border-none z-50 hidden md:block transition-all duration-300 ease-in-out max-w-2xl">
                    <div className="transition-all duration-300 ease-in-out opacity-100">
                        <div className="md:bg-successBackground md:p-2 w-full md:max-w-2xl rounded-lg md:rounded-base">
                            <div className="flex justify-end"><button
                            onClick={()=>{setIsPresent(false)}}
                                className="inline-block rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary focus:shadow-accentBorderSecondary active:bg-accentSecondary px-base h-2xl w-auto">
                                <div className="align-center flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-6 h-6">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg> </div>
                            </button></div>
                            <div className="px-4 md:px-6 pb-6 pt-2">
                                <div className="flex-col md:flex-row flex justify-between md:items-center">
                                    <h3
                                        className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-[20px] md:text-xl">
                                        The Better Forever&nbsp;Program</h3><a
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-backgroundInverseSecondary text-interactiveForegroundPrimary hover:bg-accentPrimary px-12 py-5 mt-lg h-9 md:h-auto w-full md:mt-none md:w-fit"
                                            href="/start">Start preapproval</a>
                                </div>
                                <hr className="border-t border-strokeDivider my-6" />
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">Introducing a loyalty
                                    program designed to reward your homeownership journey – again and again.</p>
                                <div className="flex gap-base flex-col mt-base">
                                    <div className="flex gap-base"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-check w-6 h-6 text-backgroundInverseSecondary">
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                        <p className="font-normal leading-body m-0 p-0 text-left text-base text-textSecondary"><span
                                            className="leading-body m-0 p-0 text-left text-base font-bold text-textSecondary">Refinance
                                            whenever rates drop:</span> Enjoy unlimited refinances with no origination fees.</p>
                                    </div>
                                    <div className="flex gap-base"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-check w-6 h-6 text-backgroundInverseSecondary">
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                        <p className="font-normal leading-body m-0 p-0 text-left text-base text-textSecondary"><span
                                            className="leading-body m-0 p-0 text-left text-base font-bold text-textSecondary">Buy your
                                            next home, for less.</span> No fees on future home purchases.</p>
                                    </div>
                                    <div className="flex gap-base"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-check w-6 h-6 text-backgroundInverseSecondary">
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                        <p className="font-normal leading-body m-0 p-0 text-left text-base text-textSecondary"><span
                                            className="leading-body m-0 p-0 text-left text-base font-bold text-textSecondary">You’re
                                            already in.</span> Funded a loan with Better since 2019? You’re automatically enrolled.
                                        </p>
                                    </div>
                                </div><a
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-transparent h-12 py-3 w-auto px-0"
                                    href="/b/better-forever/">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>)
    )
}

export default SideBox