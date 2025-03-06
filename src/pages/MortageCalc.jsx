import React, { useEffect, useLayoutEffect  } from "react";
import Header from "../components/mortage/header";

import { useState } from "react";
import MortageTextContent from "../components/mortage/MortageTextContent";

const MortageCalc = () => {
    const [rectActive, setRectActive] = useState(null);
    const [homePrice, setHomePrice] = useState(300000);
    const [pinCode, setPinCode] = useState(164001);
    const [downPayment, setDownPayment] = useState(60000);
    const [downPayRatio, setDownPayRatio] = useState(0);
    const [interest, setInterest] = useState("6.5");
    const [yearOfLoan, setYearOfLoan] = useState("30");
    const [monthlyPay, setMonthlyPay] = useState("1516");
    const [masterMonthlyPay, setMasterMonthlyPay] = useState("2256");
    const [utilityActive, setUtilityActive] = useState(false);
    const [utilityInclude, setUtilityInclude] = useState(true);
    const [propertyTaxes, setPropertyTaxes] = useState("265");
    const [insurance, setInsurance] = useState("132");
    const [hoa, setHoa] = useState("132");
    const [pmi, setPmi] = useState("30");
    const [elemWidth, setElemWidth] = useState(400);
    const [internet, setinternet] = useState("30");
    const [gas, setGas] = useState("100");
    const [water, setWater] = useState("50");
    const [utilityTotal, setUtilityTotal] = useState("180");
    
    const [rectWidths, setRectWidths] = useState({
        principalPill: Number((monthlyPay/masterMonthlyPay)*elemWidth),
        taxesPill: Number((propertyTaxes/masterMonthlyPay)*elemWidth),
        insurancePill: Number((insurance/masterMonthlyPay)*elemWidth),
        hoaPill: Number((hoa/masterMonthlyPay)*elemWidth),
        utilitiesPill: Number((utilityTotal/masterMonthlyPay)*elemWidth),
      });


    const toggleCheckbox = () => {
      setUtilityInclude((prev) => !prev);
    };
  
    const updateWidth = () => {
        const elem = document.getElementById("svgelem");
        if (elem) {
          setElemWidth(elem.getBoundingClientRect().width - 10); // Adjusted width
        }
      };
        
      
    const calcRatio = () => {
        let a = downPayment / homePrice;
        let b = a * 100;
        setDownPayRatio(b);
    };
    const calcDownPayment = () => {
        let a = (homePrice * downPayRatio) / 100;
        setDownPayment(a);
    };
    const calcMonthlyPay = () => {
        let loanAmt = homePrice - downPayment;
        let monthlyInterest = parseFloat(interest) / 100 / 12; // Convert annual interest to monthly decimal
        let totalMonths = parseInt(yearOfLoan) * 12; // Convert years to months

        if (monthlyInterest === 0) {
            // If interest rate is 0, simple division
            setMonthlyPay((loanAmt / totalMonths).toFixed(2));
            return;
        }

        let monthlyPayment =
            (loanAmt * monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
            (Math.pow(1 + monthlyInterest, totalMonths) - 1);

        setMonthlyPay(monthlyPayment.toFixed(2)); // Round to 2 decimal places
    };

    useEffect(() => {
        calcRatio();
        calcMonthlyPay();
    }, [homePrice, downPayRatio, interest, yearOfLoan]);


    useEffect(() => {
        if(utilityInclude){
        let a = Number(water) + Number(gas) + Number(internet);
        setUtilityTotal(a);
        }
        else{
            setUtilityTotal(Number(0));
        }
    }, [water, gas, internet, utilityInclude]);


    useEffect(() => {
        let a = Number(monthlyPay) + Number(propertyTaxes) + Number(insurance) + Number(hoa) + Number(pmi) + Number(utilityTotal);
        setMasterMonthlyPay(a.toFixed(1));
        updateWidth();
        setRectWidths({
            principalPill: Number(((monthlyPay ?? 0) / (masterMonthlyPay ?? 1)) * elemWidth),
            taxesPill: Number(((propertyTaxes ?? 0) / (masterMonthlyPay ?? 1)) * elemWidth),
            insurancePill: Number(((insurance ?? 0) / (masterMonthlyPay ?? 1)) * elemWidth),
            hoaPill: Number(((hoa ?? 0) / (masterMonthlyPay ?? 1)) * elemWidth),
            utilitiesPill: Number(((utilityTotal ?? 0) / (masterMonthlyPay ?? 1)) * elemWidth),
          });
    }, [monthlyPay, propertyTaxes, insurance, hoa, pmi, utilityTotal]);

    const rectTextContent = {
        null: {
            heading: "",
            text: "",
        },
        1: {
            heading: "Principal & interest",
            text: "Principal is the amount originally borrowed. Interest is the cost of borrowing that principal.",
        },
        2: {
            heading: "Property taxes",
            text: "These are taxes paid to the local government, not your mortgage lender. This estimate uses the national average for property taxes, which is 1.06%.",
        },
        3: {
            heading: "Homeowners insurance",
            text: "This is an estimate of your monthly premium.",
        },
        4: {
            heading: "HOA fees",
            text: "These are payments made to a homeowners association (HOA) that oversees day-to-day operations, rules, and regulations.",
        },
        5: {
            heading: "Utilities",
            text: "These include things like water, gas, electricity, and internet.",
        },
    };


  
    const inActiveCls = "duration-300 ease-in-out fill-accentBackground";
    return (
        <>
            <Header />

            <section className="bg-successBackground py-16">
                <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
                    <div className="flex·flex-col·justify-between·gap-x-lg">
                        <div className="flex-1">
                            <h1 className="font-bold text-textPrimary leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter">
                                Mortgage calculator
                            </h1>
                            <p className="font-normal leading-body m-0 p-0 text-left text-base my-lg pb-base text-textSecondary lg:max-w-3xl">
                                Our mortgage calculator includes key factors like homeowners
                                association fees, property taxes, and private mortgage insurance
                                (PMI). Get the whole picture and calculate your total monthly
                                payment.
                            </p>
                            <div className="mb-lg flex w-full items-end gap-base">
                                <div className="grow">
                                    <div className="w-full max-w-[300px]">
                                        <label
                                            className="leading-body m-0 p-0 text-left text-textPrimary font-bold mb-base block text-sm md:text-base"
                                            htmlFor="home-price"
                                        >
                                            Home price
                                        </label>
                                        <div className="z-0 relative w-full text-lg md:text-[40px]">
                                            <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl lg:h-4xl">
                                                <div
                                                    aria-hidden="true"
                                                    data-testid="input-icon-box"
                                                    className="top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 text-xl lg:text-3xl w-lg h-lg flex items-center justify-center lg:top-[30px] left-xs"
                                                >
                                                    $
                                                </div>
                                                <input
                                                    data-qa="home-price"
                                                    name="home-price"
                                                    type="tel"
                                                    data-labelalign="top"
                                                    id="input-home-price"
                                                    autoCapitalize="off"
                                                    autoCorrect="off"
                                                    aria-invalid="false"
                                                    className="text-left relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border pl-[32px] text-xl lg:text-3xl"
                                                    value={homePrice}
                                                    onChange={(e) => setHomePrice(e.target.value)}
                                                    fdprocessedid="xn3ljp"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grow">
                                    <div className="w-full max-w-[300px]">
                                        <p className="leading-body m-0 p-0 text-left text-textPrimary font-bold mb-base block text-sm md:text-base">
                                            Monthly payment
                                        </p>
                                        <p
                                            className="leading-body m-0 p-0 text-left my-lg flex h-[30px] items-baseline overflow-hidden text-xl font-bold text-textPrimary md:my-none md:h-2xl lg:h-4xl lg:text-3xl"
                                            data-qa="monthly-payment"
                                        >
                                            {`$ ${masterMonthlyPay} /mo`}
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <a
                                        className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-3xl w-auto inline-flex items-center justify-center min-w-[220px]"
                                        href="/preapproval/nxt-purchase"
                                    >
                                        Get pre-approved
                                    </a>
                                </div>
                            </div>
                            <div className="relative mt-8 mb-lg mx-lg">
                                <input
                                    type="range"
                                    min="50000"
                                    max="3000000"
                                    step="100"
                                    className="bg-textPrimary [&amp;::-webkit-slider-thumb]:bg-textPrimary rounded-base w-full cursor-pointer appearance-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&amp;::-moz-range-thumb]:h-2.5 [&amp;::-moz-range-thumb]:w-2.5 [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:rounded-full [&amp;::-moz-range-thumb]:border-4 [&amp;::-moz-range-thumb]:transition-all [&amp;::-moz-range-thumb]:duration-150 [&amp;::-moz-range-thumb]:ease-in-out [&amp;::-moz-range-track]:h-2 [&amp;::-moz-range-track]:w-full [&amp;::-moz-range-track]:rounded-full [&amp;::-moz-range-track]:bg-gray-100 [&amp;::-webkit-slider-runnable-track]:h-1 [&amp;::-webkit-slider-runnable-track]:w-full [&amp;::-webkit-slider-runnable-track]:rounded-full [&amp;::-webkit-slider-runnable-track]:bg-gray-100 [&amp;::-webkit-slider-runnable-track]:dark:bg-neutral-700 [&amp;::-webkit-slider-thumb]:-mt-1.5 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:transition-all [&amp;::-webkit-slider-thumb]:duration-150 [&amp;::-webkit-slider-thumb]:ease-in-out [&amp;::-webkit-slider-thumb]:dark:bg-neutral-700"
                                    id="min-and-max-range-slider-usage"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, rgb(41, 43, 41) ${((homePrice - 50000) / 2950000) * 100
                                            }%, #c8c9c6 ${((homePrice - 50000) / 2950000) * 100
                                            }% 100%)`,
                                    }}
                                    value={homePrice}
                                    onChange={(e) => setHomePrice(Number(e.target.value))}
                                />
                            </div>
                            <div className="mt-xl md:block">
                                <div className="gap-x-5xl gap-y-px lg:flex">
                                    <div className="flex flex-col md:flex-row flex-1 mb-base gap-base">
                                        <div className="flex-1">
                                            <div className="z-0 relative">
                                                <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                    <label
                                                        htmlFor="input-1"
                                                        id="1-label"
                                                        className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                                                    >
                                                        ZIP code
                                                    </label>
                                                    <input
                                                        maxLength="6"
                                                        type="tel"
                                                        data-labelalign="top"
                                                        id="input-1"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        className="text-left px-sm pb-none pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                        value={pinCode}
                                                        fdprocessedid="avrigj"
                                                        onChange={(e) => setPinCode(Number(e.target.value))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-1">
                                            <div className="w-9/12 ">
                                                <div className="z-0 relative [&amp;>div:first-of-type]:rounded-r-none">
                                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                        <label
                                                            htmlFor="input-downpayment"
                                                            id="downpayment-label"
                                                            className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                                                        >
                                                            Down payment
                                                        </label>
                                                        <div
                                                            aria-hidden="true"
                                                            data-testid="input-icon-box"
                                                            className="mr-xs absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center top-[24px] left-xs"
                                                        >
                                                            $
                                                        </div>
                                                        <input
                                                            data-qa="downpayment"
                                                            name="downpayment"
                                                            type="tel"
                                                            data-labelalign="top"
                                                            id="input-downpayment"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            aria-invalid="false"
                                                            className="text-left px-sm pb-none pl-[32px] pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                            value={downPayment}
                                                            onChange={(e) => {
                                                                let inputValue = e.target.value.replace(
                                                                    /\D/g,
                                                                    ""
                                                                ); // Remove non-numeric characters
                                                                let max = homePrice; // Set max value
                                                                if (
                                                                    inputValue !== "" &&
                                                                    parseInt(inputValue, 10) > max
                                                                ) {
                                                                    inputValue = max.toString();
                                                                }

                                                                setDownPayment(Number(inputValue));
                                                                let a = (Number(inputValue) / homePrice) * 100;
                                                                setDownPayRatio(a);
                                                            }}
                                                            fdprocessedid="kora5p"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-3/12 min-w-3xl">
                                                <div className="z-0 relative flex [&amp;>div:first-of-type]:rounded-l-none [&amp;>div:first-of-type]:border-l-0">
                                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                        <div
                                                            aria-hidden="true"
                                                            data-testid="input-icon-box"
                                                            className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center right-xs"
                                                        >
                                                            %
                                                        </div>
                                                        <input
                                                            data-qa="down-payment-ratio"
                                                            data-labelalign="top"
                                                            id="input-2"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            maxLength="3"
                                                            className="text-left px-sm pb-none relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                            value={downPayRatio}
                                                            onChange={(e) => {
                                                                let inputValue = e.target.value.replace(
                                                                    /\D/g,
                                                                    ""
                                                                ); // Remove non-numeric characters
                                                                let max = 100; // Set max value
                                                                if (
                                                                    inputValue !== "" &&
                                                                    parseInt(inputValue, 10) > max
                                                                ) {
                                                                    inputValue = max.toString();
                                                                }

                                                                setDownPayRatio(Number(inputValue));
                                                                let a = (homePrice * Number(inputValue)) / 100;
                                                                setDownPayment(a);
                                                            }}
                                                            fdprocessedid="02i8sh"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row flex-1 mb-base gap-base">
                                        <div className="flex-1">
                                            <div className="z-0 relative">
                                                <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                    <label
                                                        htmlFor="input-3"
                                                        id="3-label"
                                                        className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                                                    >
                                                        Interest rate
                                                    </label>
                                                    <div
                                                        aria-hidden="true"
                                                        data-testid="input-icon-box"
                                                        className="mr-xs absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center top-[24px] right-xs"
                                                    >
                                                        %
                                                    </div>
                                                    <input
                                                        data-labelalign="top"
                                                        id="input-3"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        className="text-left px-sm pb-none pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                        value={interest}
                                                        onChange={(e) => {
                                                            setInterest(Number(e.target.value));
                                                        }}
                                                        fdprocessedid="xv231d"
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="relative w-full">
                                                <label
                                                    className="leading-body m-0 p-0 text-left text-interactiveForegroundMuted absolute left-base origin-top-left transition-all duration-300 ease-in-out z-1 top-[7px] text-xs font-normal"
                                                    htmlFor="4"
                                                >
                                                    Length of loan
                                                </label>
                                                <select
                                                    id="4"
                                                    value={yearOfLoan}
                                                    onChange={(e) => setYearOfLoan(e.target.value)}
                                                    className="truncate font-bold text-interactiveForegroundTertiary appearance-none bg-backgroundTertiary outline-none rounded-base border border-solid border-strokeBorder px-base w-full h-3xl p-2xs pb-none pt-base duration-300 ease-in-out z-0 focus:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] focus:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_3px_inset] hover:shadow-accentBorderSecondary flex-1"
                                                    fdprocessedid="yrcbcq"
                                                >
                                                    <option value="30" label="30 years">
                                                        30 years
                                                    </option>
                                                    <option value="20" label="20 years">
                                                        20 years
                                                    </option>
                                                    <option value="15" label="15 years">
                                                        15 years
                                                    </option>
                                                </select>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-xs"
                                                >
                                                    <path d="M7 9.5L12 14.5L17 9.5H7Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block md:hidden">
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "spacing.xsmall",
                                        rowGap: "spacing.xsmall",
                                    }}
                                >
                                    <a
                                        className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-3xl w-auto inline-flex items-center justify-center min-w-[220px]"
                                        href="/preapproval/nxt-purchase"
                                    >
                                        Get pre-approved
                                    </a>
                                </div>
                                <button className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent border border-solid border-strokeBorder hover:text-interactivePrimary hover:border-transparent hover:shadow-[0_0_0_4px_inset] hover:shadow-accentBorderSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:text-interactivePrimary px-xl h-3xl mt-lg flex w-full items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-plus "
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>{" "}
                                    Add details
                                </button>
                                <div
                                    className="p-base bg-backgroundPrimary px-lg shadow-lg fixed left-0 top-[70px] w-full z-[10000] invisible opacity-0"
                                    data-qa="mobile-header"
                                    style={{
                                        transition:
                                            "opacity $$motion.easing.universal $$motion.timing.T3 0s, visibility 0s $$motion.timing.T4",
                                    }}
                                >
                                    <div className="grid grid-cols-2 gap-xl">
                                        <div>
                                            <p className="leading-body m-0 p-0 text-left text-textSecondary text-sm mb-xs font-bold">
                                                Home price
                                            </p>
                                            <p
                                                className="leading-body m-0 p-0 text-base rounded-base bg-interactiveForegroundSecondary py-xs text-center font-bold text-textInversePrimary"
                                                data-qa="mobile-header-home-price"
                                            >
                                                $300,000
                                            </p>
                                        </div>
                                        <div>
                                            <p className="leading-body m-0 p-0 text-left text-textSecondary text-sm mb-xs font-bold">
                                                Monthly payment
                                            </p>
                                            <p
                                                className="leading-body m-0 p-0 text-left text-textSecondary text-base pt-xs font-bold"
                                                data-qa="mobile-header-monthly-payment"
                                            >
                                                {`$ ${masterMonthlyPay} /mo`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-accentBorderInverseSecondary pt-4xl">
                <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
                    <div className="grid md:grid-cols-2">
                        <div>
                            <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
                                Monthly payment breakdown
                            </h4>
                            <p
                                className="leading-body m-0 p-0 text-left mt-lg overflow-hidden text-3xl font-bold text-textPrimary"
                                data-testid="sum"
                            >
                                {`$ ${masterMonthlyPay} /mo`}
                            </p>
                            <div className="mt-2xl">
                                <svg
                                    height="100"
                                    id="svgelem"
                                    width="100%"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                   
                                    <rect
                                        data-testid="principalPill"
                                        height="80"
                                        rx="40"
                                        ry="40"
                                        onMouseEnter={() => setRectActive("1")}
                                        onMouseLeave={() => setRectActive(null)}
                                        className={
                                            rectActive === null || rectActive === "1"
                                                ? "duration-300 ease-in-out fill-backgroundInverseSecondary"
                                                : inActiveCls
                                        }
                                        width={rectWidths.principalPill}
                                        x="0"
                                        y="0"
                                    ></rect>
                                    <rect
                                     width={rectWidths.taxesPill}
                                        data-testid="taxesPill"
                                        height="80"
                                        rx="40"
                                        ry="40"
                                        onMouseEnter={() => setRectActive("2")}
                                        onMouseLeave={() => setRectActive(null)}
                                        className={
                                            rectActive === null || rectActive === "2"
                                                ? "duration-300 ease-in-out fill-infoSecondary"
                                                : inActiveCls
                                        }
                                       
                                        x={rectWidths.principalPill}
                                        y="0"
                                    ></rect>

                                     
   
                                    <rect  width={rectWidths.insurancePill}
                                        data-testid="insurancePill"
                                        height="80"
                                        rx="20.528275862068963"
                                        ry="20.528275862068963"
                                        onMouseEnter={() => setRectActive("3")}
                                        onMouseLeave={() => setRectActive(null)}
                                        className={
                                            rectActive === null || rectActive === "3"
                                                ? "duration-300 ease-in-out fill-graph2Tertiary"
                                                : inActiveCls
                                        }
                                       
                                        x={rectWidths.principalPill + rectWidths.taxesPill}
                                        y="0"
                                    ></rect>
                                    <rect  width={rectWidths.hoaPill}
                                        data-testid="hoaPill"
                                        height="80"
                                        rx="20.528275862068963"
                                        ry="20.528275862068963"
                                        onMouseEnter={() => setRectActive("4")}
                                        onMouseLeave={() => setRectActive(null)}
                                        className={
                                            rectActive === null || rectActive === "4"
                                                ? "duration-300 ease-in-out fill-graph4Tertiary"
                                                : inActiveCls
                                        }
                                      
                                        x={rectWidths.principalPill + rectWidths.taxesPill + rectWidths.insurancePill}
                                        y="0"
                                    ></rect>
                                    <rect  width={rectWidths.utilitiesPill}
                                        data-testid="utilitiesPill"
                                        height="80"
                                        rx="15.551724137931032"
                                        ry="15.551724137931032"
                                        onMouseEnter={() => setRectActive("5")}
                                        onMouseLeave={() => setRectActive(null)}
                                        className={
                                            rectActive === null || rectActive === "5"
                                                ? "duration-300 ease-in-out fill-graph3Tertiary"
                                                : inActiveCls
                                        }
                                       
                                        x={rectWidths.principalPill + rectWidths.taxesPill + rectWidths.insurancePill + rectWidths.hoaPill}
                                        y="0"
                                    ></rect>
                                </svg>
                                <div
                                    className={
                                        rectActive === null
                                            ? "md: block p-lg mt-2xl rounded-base shadow-[0_0_12px_rgba(41,43,41,0.12)] opacity-0 duration-300 ease-in-out"
                                            : "md: block p-lg mt-2xl rounded-base shadow-[0_0_12px_rgba(41,43,41,0.12)] opacity-[1] duration-300 ease-in-out"
                                    }
                                >
                                    <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg mb-lg">
                                        {rectTextContent[rectActive].heading}
                                    </h4>
                                    <p
                                        className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                        data-testid="description"
                                    >
                                        {rectTextContent[rectActive].text}
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="flex justify-between h-3xl mb-base">
                                <div className="flex items-center text-textPrimary w-1/2">
                                    <div className="rounded-sm h-base w-[5px] mr-xs bg-backgroundInverseSecondary"></div>
                                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                                        Principal &amp; interest
                                    </p>
                                </div>
                                <p
                                    className="leading-body m-0 p-0 text-base pt-0 items-center text-left w-1/2 sm:w-[160px] flex font-bold text-interactiveForegroundSecondary"
                                    data-testid="principal-&amp;-interest"
                                >
                                    ${monthlyPay}
                                </p>
                            </div>
                            <div className="flex justify-between h-3xl mb-base">
                                <div className="flex items-center text-textPrimary w-1/2">
                                    <div className="rounded-sm h-base w-[5px] mr-xs bg-infoSecondary"></div>
                                    <label
                                        className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                        htmlFor="input-taxes"
                                        id="taxes-label"
                                    >
                                        Property taxes
                                    </label>
                                </div>
                                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                        <div
                                            aria-hidden="true"
                                            data-testid="input-icon-box"
                                            className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                                        >
                                            $
                                        </div>
                                        
   
                                        <input
                                            aria-describedby="taxes-help-text"
                                            name="taxes"
                                            role="textbox"
                                            type="number"
                                            data-labelalign="top"
                                            id="input-taxes"
                                            autoCapitalize="off"
                                            autoCorrect="off"
                                            aria-errormessage="taxes-help-text"
                                            className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                            value={propertyTaxes}
                                            fdprocessedid="of3p8e"
                                            onChange={(e) => {
                                                setPropertyTaxes(Number(e.target.value));
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                                        id="taxes-help-text"
                                    >
                                        {" "}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between h-3xl mb-base">
                                <div className="flex items-center text-textPrimary w-1/2">
                                    <div className="rounded-sm h-base w-[5px] mr-xs bg-graph2Tertiary"></div>
                                    <label
                                        className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                        htmlFor="input-insurance"
                                        id="insurance-label"
                                    >
                                        Homeowners insurance
                                    </label>
                                </div>
                                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                        <div
                                            aria-hidden="true"
                                            data-testid="input-icon-box"
                                            className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                                        >
                                            $
                                        </div>
                                        <input
                                            aria-describedby="insurance-help-text"
                                            name="insurance"
                                            role="textbox"
                                            type="number"
                                            data-labelalign="top"
                                            id="input-insurance"
                                            autoCapitalize="off"
                                            autoCorrect="off"
                                            aria-errormessage="insurance-help-text"
                                            className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                            value={insurance}
                                            fdprocessedid="7bzzjd"
                                            autoComplete="off"
                                            onChange={(e) => {
                                                setInsurance(Number(e.target.value));
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                                        id="insurance-help-text"
                                    >
                                        {" "}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between h-3xl mb-base">
                                <div className="flex items-center text-textPrimary w-1/2">
                                    <div className="rounded-sm h-base w-[5px] mr-xs bg-graph4Tertiary"></div>
                                    <label
                                        className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                        htmlFor="input-hoa"
                                        id="hoa-label"
                                    >
                                        HOA fees
                                    </label>
                                </div>
                                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                        <div
                                            aria-hidden="true"
                                            data-testid="input-icon-box"
                                            className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                                        >
                                            $
                                        </div>
                                                               

                                        <input
                                            aria-describedby="hoa-help-text"
                                            name="hoa"
                                            role="textbox"
                                            type="number"
                                            data-labelalign="top"
                                            id="input-hoa"
                                            autoCapitalize="off"
                                            autoCorrect="off"
                                            aria-errormessage="hoa-help-text"
                                            className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                            value={hoa}
                                            fdprocessedid="50uleu"
                                            onChange={(e) => {
                                                setHoa(Number(e.target.value));
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                                        id="hoa-help-text"
                                    >
                                        {" "}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-lg" data-orientation="vertical">
                                <div data-state="open" data-orientation="vertical" className="">
                                    <h3
                                        data-orientation="vertical"
                                        data-state="open"
                                        className="flex"
                                    >
                                        <button
                                            type="button"
                                            aria-controls="radix-:Rlkr6:"
                                            aria-expanded="true"
                                            data-state="open"
                                            data-orientation="vertical"
                                            id="radix-:R5kr6:"
                                            className="flex flex-1 items-center justify-between py-4 font-bold transition-all [&amp;[data-state=open]>svg]:rotate-180"
                                            data-radix-collection-item=""
                                            fdprocessedid="15ck7"
                                            onClick={() => {
                                                if (utilityActive) { setUtilityActive(false) } else { setUtilityActive(true); }
                                            }}
                                        >
                                            <div
                                                className="flex justify-between h-3xl h-auto mb-0 w-full"
                                                data-testid="open-utilities"
                                            >
                                                <div className="flex items-center text-textPrimary w-auto">
                                                    <div className="rounded-sm h-base w-[5px] mr-xs bg-graph3Tertiary"></div>
                                                    <p
                                                        className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                                        id="utilities-label"
                                                    >
                                                        Utilities
                                                    </p>
                                                </div>
                                                <span className="leading-body m-0 p-0 text-textPrimary text-base w-[144px] text-left font-bold">
                                                    ${utilityTotal}
                                                </span>
                                            </div>
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
                                                // className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                                                className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${
                                                    !utilityActive ? "rotate-180" : ""
                                                  }`}
                                            >
                                                <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                        </button>
                                    </h3>
                                    <div
                                        data-state="open"
                                        id="radix-:Rlkr6:"
                                        role="region"
                                        aria-labelledby="radix-:R5kr6:"
                                        data-orientation="vertical"
                                        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                        style={{
                                            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-collapsible-content-height": "320px", "--radix-collapsible-content-width": "664px;"
                                        }}>
                                        {(utilityActive) && (<div className="pb-4 pt-base">
                                            <div className="flex justify-between h-3xl mb-base">
                                                <div className="flex items-center text-textPrimary w-1/2">
                                                    <label
                                                        className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                                        htmlFor="input-water"
                                                        id="water-label"
                                                    >
                                                        Water/Sewer
                                                    </label>
                                                </div>
                                                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                        <div
                                                            aria-hidden="true"
                                                            data-testid="input-icon-box"
                                                            className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                                                        >
                                                            $
                                                        </div>


                                                        <input
                                                            aria-describedby="water-help-text"
                                                            data-testid="water-input"
                                                            name="water"
                                                            role="textbox"
                                                            type="number"
                                                            data-labelalign="top"
                                                            id="input-water"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            aria-errormessage="water-help-text"
                                                            className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                            value={water}
                                                            onChange={(e) => setWater(Number(e.target.value))}
                                                            fdprocessedid="lapa4"
                                                        />
                                                    </div>
                                                    <div
                                                        className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                                                        id="water-help-text"
                                                    >
                                                        {" "}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between h-3xl mb-base">
                                                <div className="flex items-center text-textPrimary w-1/2">
                                                    <label
                                                        className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                                        htmlFor="input-gas"
                                                        id="hoa-label"
                                                    >
                                                        Gas
                                                    </label>
                                                </div>
                                                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                        <div
                                                            aria-hidden="true"
                                                            data-testid="input-icon-box"
                                                            className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                                                        >
                                                            $
                                                        </div>

                                                        <input
                                                            aria-describedby="gas-help-text"
                                                            data-testid="gas-input"
                                                            name="gas"
                                                            role="textbox"
                                                            type="number"
                                                            data-labelalign="top"
                                                            id="input-gas"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            aria-errormessage="gas-help-text"
                                                            className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                            value={gas}
                                                            fdprocessedid="815tid"
                                                            onChange={(e) => setGas(Number(e.target.value))}
                                                        />
                                                    </div>
                                                    <div
                                                        className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                                                        id="gas-help-text"
                                                    >
                                                        {" "}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between h-3xl mb-base">
                                                <div className="flex items-center text-textPrimary w-1/2">
                                                    <label
                                                        className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                                        htmlFor="input-internet"
                                                        id="internet-label"
                                                    >
                                                        Internet
                                                    </label>
                                                </div>
                                                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                        <div
                                                            aria-hidden="true"
                                                            data-testid="input-icon-box"
                                                            className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                                                        >
                                                            $
                                                        </div>

                                                        <input
                                                            aria-describedby="internet-help-text"
                                                            data-testid="internet-input"
                                                            name="internet"
                                                            role="textbox"
                                                            type="number"
                                                            data-labelalign="top"
                                                            id="input-internet"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            aria-errormessage="internet-help-text"
                                                            className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                            value={internet}
                                                            fdprocessedid="zkr8zr"
                                                            onChange={(e) => setinternet(Number(e.target.value))}
                                                        />
                                                    </div>
                                                    <div
                                                        className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                                                        id="internet-help-text"
                                                    >
                                                        {" "}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex items-center">
                                           < button
      type="button"
      className={`flex flex-row items-center justify-center p-sm w-2xl h-2xl rounded-base cursor-pointer 
                 appearance-none border-none transition-all ease-in-out duration-300 bg-transparent 
                 ${utilityInclude ? "bg-interactiveSecondary" : "hover:bg-interactiveSecondary"} 
                 disabled:bg-transparent disabled:cursor-default`}
      role="checkbox"
      aria-checked={utilityInclude}
      onClick={toggleCheckbox}
    >
      <div
        aria-hidden="true"
        className={`flex items-center justify-center border-[1px] h-lg w-lg p-2xs rounded-sm pointer-events-none 
                    transition-[border] ease-in-out duration-300 
                    ${utilityInclude ? "border-interactivePrimary bg-interactivePrimary" : "border-gray-400 bg-transparent"}`}
      >
        {utilityInclude && (
          <svg
            aria-hidden="true"
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            className="transition-all duration-300 ease-in-out stroke-interactiveForegroundPrimary"
          >
            <path d="M11.8 1L4.6 8.2L1 4.6" strokeWidth="2" strokeMiterlimit="10"></path>
          </svg>
        )}
      </div>
    </button>

                                             
                                                <label
                                                    id="6-label"
                                                    className="font-body line-height-body m-none p-none text-base text-left text-interactiveForegroundTertiary pl-xs cursor-pointer"
                                                >
                                                    Include utilities in payment
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    className="z-[-1] hidden"
                                                    checked={utilityInclude} 
                                                    onChange={(e) => setUtilityInclude(e.target.checked)}
                                                    
                                                />
                                            </div>
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between h-3xl mb-base mt-[20px]">
                                <div className="flex items-center text-textPrimary w-1/2">
                                    <div className="rounded-sm h-base w-[5px] mr-xs bg-graph4Primary">
                                        {" "}
                                    </div>
                                    <label
                                        className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                        htmlFor="input-pmi"
                                        id="pmi-label"
                                    >
                                        PMI
                                    </label>
                                </div>    
                                
                                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                        <div
                                            aria-hidden="true"
                                            data-testid="input-icon-box"
                                            className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                                        >
                                            $
                                        </div>
                                        <input
                                            aria-describedby="pmi-help-text"
                                            name="pmi"
                                            role="textbox"
                                            type="number"
                                            data-labelalign="top"
                                            id="input-pmi"
                                            autoCapitalize="off"
                                            autoCorrect="off"
                                            aria-errormessage="pmi-help-text"
                                            className="text-left px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                            value={pmi}
                                            fdprocessedid="ywvk4s"
                                            onChange={(e) => {
                                                setPmi(Number(e.target.value));
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted pr-auto flex-row pl-sm"
                                        id="pmi-help-text"
                                    >
                                        {" "}
                                    </div>
                                </div>
                            </div>
                            <button
                                className="inline-block rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary focus:shadow-accentBorderSecondary active:bg-accentSecondary px-xl h-3xl w-auto mb-xs"
                                data-testid="copyLink"
                                fdprocessedid="kunk6"
                            >
                                Copy estimate link
                            </button>
                        </div>
                    </div>
                  
                </div>
            </section>

            <MortageTextContent />
        </>
    );
};

export default MortageCalc;
