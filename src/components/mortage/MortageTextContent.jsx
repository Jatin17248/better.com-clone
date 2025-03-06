import React from 'react'
import MortageDialog from "./MortageDialog";
import { useState } from "react";
const MortageTextContent = () => {

     const [isOpen, setIsOpen] = useState(false);
     const updateMessage = () => {
        setIsOpen(false);
    };
  return (
    <>
    


    <div className="bg-accentBorderInverseSecondary">
                <section
                    id="seo-section-wrapper"
                    className="gap-x-lg [&amp;>p]:text-textSecondary py-16 md:flex-row [&amp;>h2]:mb-xl [&amp;>h3]:my-lg [&amp;>p]:my-sm m-auto max-w-screen-2xl justify-between px-6 md:px-14"
                >
                    <hr className="my-12 border-t border-strokeDivider" />
                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                        How does a mortgage calculator help me?
                    </h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        When deciding how much house you can afford, one of the most
                        important pieces to determine is whether a home will fit into your
                        monthly budget. A mortgage calculator helps you understand the
                        monthly cost of a home. And ours will allow you to enter different
                        down payments and interest rates to help determine what is
                        affordable for you.
                    </p>
                    <hr className="my-12 border-t border-strokeDivider" />
                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                        How much monthly mortgage payment can I afford?
                    </h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Lenders determine how much you can afford on a monthly housing
                        payment by calculating your{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/content/what-is-a-good-debt-to-income-ratio/"
                        >
                            debt-to-income ratio (DTI)
                        </a>
                        . The maximum DTI you can have in order to qualify for most mortgage
                        loans is often between 45-50%, with your anticipated housing costs
                        included.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Your DTI is the balance between your income and your debt. It helps
                        lenders understand how safe or risky it is for them to approve your
                        loan. A DTI ratio represents how much of your gross monthly income
                        is spoken for by creditors, and how much of it is left over to you
                        as disposable income. It’s most commonly written as a percentage.
                        For example, if you pay half your monthly income in debt payments,
                        you would have a DTI of 50%.
                    </p>
                    <div className="flex flex-col items-center">
                        <div>
                            <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                Formula for calculating your debt-to-income (DTI) ratio:
                            </p>
                            <img
                                alt="Mortgage calculator | Debt to income ratio (DTI) formula"
                                loading="lazy"
                                width="780"
                                height="153"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: "transparent" }}
                                src="https://media.better.com/better-com/mortgage-calculator/dti-formula.jpg"
                            />
                            <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                Here’s an example of what calculating your DTI might look like:
                            </p>
                            <img
                                alt="Mortgage calculator | Debt to income ratio (DTI) formula example"
                                loading="lazy"
                                width="780"
                                height="525"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: "transparent" }}
                                src="https://media.better.com/better-com/mortgage-calculator/dti-example.jpg"
                            />
                        </div>
                    </div>
                    <hr className="my-12 border-t border-strokeDivider" />
                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                        How to calculate monthly mortgage payments ?
                    </h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Your monthly mortgage payment includes loan principal and interest,
                        property taxes, homeowners insurance, and mortgage insurance (PMI),
                        if applicable. While not typically included in your mortgage
                        payment, homeowners also pay monthly utilities and sometimes pay
                        homeowners association (HOA) fees, so it’s a good idea to factor
                        these into your monthly budget. This mortgage calculator factors in
                        all these typical monthly costs so you can really crunch the
                        numbers.
                    </p>
                    <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                        Formula for calculating monthly mortgage payments
                    </h3>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        The easiest way to calculate your mortgage payment is to use a
                        calculator, but for the curious or mathematically inclined, here’s
                        the formula for calculating principal and interest yourself:
                    </p>
                    <div className="flex flex-col items-center">
                        <div>
                            <img
                                alt="Mortgage calculator | Monthly mortgage payment formula"
                                loading="lazy"
                                width="780"
                                height="126"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: "transparent" }}
                                src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-formula.jpg"
                            />
                            <div>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                    Where:
                                </p>
                                <ul className="ml-xl list-disc">
                                    <li>
                                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                            <b>M</b> is monthly mortgage payments
                                        </p>
                                    </li>
                                    <li>
                                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                            <b>P</b> is the principal loan amount (the amount you
                                            borrow)
                                        </p>
                                    </li>
                                    <li>
                                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                            <b>r</b> is the monthly interest rate
                                            <br />
                                            (annual interest rate divided by 12 and expressed as a
                                            decimal)
                                            <br />
                                            <small>
                                                For example:
                                                <br />
                                                if the annual interest rate is <b>5%</b>,<br /> the
                                                monthly rate would be <b>0.05/12</b> = .00417, or{" "}
                                                <b>.417%</b>
                                            </small>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                            <b>n</b> is the total number of payments in months
                                            <br />
                                            <small>
                                                For example:
                                                <br />
                                                for a 30-year loan, n = 30×12 =<b>360</b> months
                                            </small>
                                        </p>
                                    </li>
                                </ul>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                    Here’s a simple example:
                                </p>
                                <img
                                    alt="Mortgage calculator | Monthly mortgage payment formula example"
                                    loading="lazy"
                                    width="780"
                                    height="221"
                                    decoding="async"
                                    data-nimg="1"
                                    style={{ color: "transparent" }}
                                    src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-example.jpg"
                                />
                            </div>
                        </div>
                    </div>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        This formula assumes a fixed-rate mortgage, where the interest rate
                        remains constant throughout the loan term. And remember, you’ll
                        still need to add on taxes, insurance, utilities, and HOA fees if
                        applicable.
                    </p>
                    <hr className="my-12 border-t border-strokeDivider" />
                    <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                        How to use this mortgage calculator?
                    </h3>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Play around with different home prices, locations,{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/faq/loan-process/down-payment-definition/"
                        >
                            down payments
                        </a>
                        , interest rates, and mortgage lengths to see how they impact your
                        monthly mortgage payments.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Increasing your down payment and decreasing your interest rate and
                        mortgage term length will make your monthly payment go down. Taxes,
                        insurance, and HOA fees will vary by location. If you enter a down
                        payment amount that’s less than 20% of the home price,{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/content/what-is-pmi-or-private-mortgage-insurance/"
                        >
                            private mortgage insurance (PMI)
                        </a>{" "}
                        costs will be added to your monthly mortgage payment. As the costs
                        of utilities can vary from county to county, we’ve included a
                        utilities estimate that you can break down by service. If you’re
                        thinking about buying a condo or into a community with a Homeowners
                        Association (HOA), you can add HOA fees.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        The only amounts we haven’t included are the money you’ll need to
                        save for annual home maintenance/repairs or the costs of home
                        improvements. To see how much home you can afford including these
                        costs, take a look at the{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/how-much-house-can-I-afford/"
                        >
                            Better home affordability calculator
                        </a>
                        .
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Fun fact:{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/content/how-to-calculate-property-tax-on-a-house/"
                        >
                            Property tax rates
                        </a>{" "}
                        are extremely localized, so two homes of roughly the same size and
                        quality on either side of a municipal border could have very
                        different tax rates. Buying in an area with a lower property tax
                        rate may make it easier for you to afford a higher-priced home.
                    </p>
                    <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                        Do you know your property tax rate?
                    </h3>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        While exact property tax rates vary by county, it can be helpful to
                        look at taxes on the state level to get an idea for taxes in your
                        state. Here’s a helpful chart from{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="https://www.forbes.com/sites/andrewdepietro/2023/09/01/property-taxes-by-state-a-breakdown-of-the-highest-and-lowest-property-taxes-by-state"
                        >
                            Forbes
                        </a>
                        breaking down the Census Bureau’s 2021 American Community Survey
                        5-year estimate:
                    </p>
                    <div className="my-3xl">
                        <div
                            className="relative pointer group w-full h-full overflow-scroll"
                            tabIndex="0"
                            onClick={() => {
                                setIsOpen(true);
                            }}
                        >
                            <table className="min-w-full border border-successAccent table-auto clip-inset-round">
                                <thead className="">
                                    <tr>
                                        <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                                            <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                                                State
                                            </p>
                                        </th>
                                        <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                                            <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                                                Median Effective Property Tax Rate
                                            </p>
                                        </th>
                                        <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                                            <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                                                Mean Effective Property Tax Rate
                                            </p>
                                        </th>
                                        <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                                            <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                                                Median Home Value
                                            </p>
                                        </th>
                                        <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                                            <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                                                Median Property Taxes Paid
                                            </p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="even:bg-successBackground">
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                AL
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                0.41%
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                0.40%
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                $157,100
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                $646
                                            </p>
                                        </td>
                                    </tr>
                                    <tr className="even:bg-successBackground">
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                AK
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                1.23%
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                1.04%
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                $282,800
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                $3,464
                                            </p>
                                        </td>
                                    </tr>
                                    <tr className="even:bg-successBackground">
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                AZ
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                0.62%
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                0.63%
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                $265,600
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                $1,648
                                            </p>
                                        </td>
                                    </tr>
                                    <tr className="even:bg-successBackground">
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                AR
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                0.62%
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                0.64%
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                $142,100
                                            </p>
                                        </td>
                                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                            <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                $878
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="hidden md:group-hover:block absolute w-full h-full bg-black opacity-25 top-0 left-0"></div>
                            <button
                                onClick={() => {
                                    setIsOpen(true);
                                }}
                                className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary focus:shadow-accentBorderSecondary active:bg-accentSecondary px-xl h-3xl w-auto hidden md:group-hover:block left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 absolute"
                            >
                                See all states
                            </button>
                        </div>
                        <button
                            onClick={() => {
                                setIsOpen(true);
                            }}
                            className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent border border-solid border-strokeBorder hover:text-interactivePrimary hover:border-transparent hover:shadow-[0_0_0_4px_inset] hover:shadow-accentBorderSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:text-interactivePrimary px-xl h-3xl block md:hidden mt-base w-full"
                        >
                            See all states
                        </button>
                    </div>
                    <hr className="my-12 border-t border-strokeDivider" />
                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                        How is Better’s mortgage calculator different?
                    </h2>
                    <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                        This mortgage calculator shows your payments with taxes and
                        insurance
                    </h3>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        The property taxes you contribute are used to finance the services
                        provided by your local government to the community. These services
                        encompass schools, libraries, roads, parks, water treatment, police,
                        and fire departments. Even after your mortgage has been fully paid,
                        you will still need to pay property taxes. If you neglect your
                        property taxes, you run the risk of losing your home to your local
                        tax authority.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Your lender will usually require you to have homeowners insurance
                        while you're settling your mortgage. This is a common practice among
                        lenders because they understand that nobody wants to continue paying
                        a mortgage on a home that's been damaged or destroyed.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Here's an interesting fact: Once you fully own your home, the choice
                        to maintain homeowners insurance is entirely up to you. However, to
                        ensure your home is protected against damages caused by fires,
                        lightning strikes, and natural disasters that are common in your
                        area , it is highly recommended to keep it. Therefore, always factor
                        in these costs when using a Mortgage Calculator .
                    </p>
                    <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                        This mortgage calculator shows your mortgage costs with PMI
                    </h3>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        PMI, an abbreviation for private mortgage insurance, aids potential
                        homeowners in qualifying for a mortgage without the necessity of a
                        20% down payment. By opting for a lower down payment and choosing a
                        mortgage with PMI, you can purchase a home sooner, begin accruing
                        equity, and keep cash available for future needs. This can all be
                        calculated using this Mortgage Calculator.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Choosing a mortgage with PMI is a popular option:{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="https://cdn.nar.realtor/sites/default/files/documents/2021-07-realtors-confidence-index-08-23-2021.pdf"
                        >
                            71% of first-time homebuyers
                        </a>{" "}
                        had a down payment of less than 20% in July 2021.{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="https://fortune.com/2021/08/31/down-payment-on-a-house-how-much-money-to-put-down"
                        >
                            In 2020, the median down payment for first-time homebuyers was
                            just 7%, and it hasn’t risen above 10% since 1989.
                        </a>
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        PMI is automatically removed from conventional mortgages once your
                        home equity reaches 22%. Alternatively, you can request the removal
                        of PMI once you've accumulated at least 20% home equity.
                    </p>
                    <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                        This mortgage calculator includes HOA fees
                    </h3>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Homeowners association (“HOA”) fees are typically charged directly
                        by a homeowners association, but as HOA fees come part and parcel
                        with condos, townhomes, and planned housing developments, they’re an
                        essential factor to consider when calculating your mortgage costs.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Homes that share structural elements, such as roofs and walls, or
                        community amenities like landscaping, pools, or BBQ areas, often
                        require homeowners to pay HOA fees for the maintenance of these
                        shared features. It's important to factor in these costs during your
                        budget planning stage, especially considering that HOA fees
                        typically increase annually. HOAs may also charge additional fees
                        known as ‘special assessments’ to cover unexpected expenses from
                        time to time.
                    </p>
                    <hr className="my-12 border-t border-strokeDivider" />
                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                        How to reduce your monthly mortgage payments?
                    </h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        The lower the purchase price of the home, the lower your loan amount
                        will be. But if the seller is less than willing to cut you a deal,
                        you have other options.
                    </p>
                    <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                        Extend the length of your mortgage
                    </h3>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        The more time you have to pay off the mortgage, the less each
                        monthly mortgage payment will be. (In lender-speak, ‘extending the
                        length of your mortgage’ is known as ‘increasing your loan term’.)
                        This is why people often choose a 30-year fixed rate mortgage over
                        one with a 15- or 20-year term.
                    </p>
                    <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                        Increase your down payment
                    </h3>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        The smaller the amount of your mortgage, the smaller your monthly
                        mortgage payments will be. If you’re able to put at least 20% of the
                        home price towards your{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/content/how-much-should-you-put-down-on-a-house/"
                        >
                            down payment
                        </a>
                        , you’ll be able to avoid PMI (private mortgage insurance). Even if
                        you can’t afford a complete 20% down payment, boosting your down
                        payment will help you get PMI removed sooner. In fact, boosting your
                        down payment by 5% can lower your monthly PMI fees.
                    </p>
                    <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                        Get a lower interest rate
                    </h3>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Increasing your down payment can be one way to help you qualify for
                        a lower interest rate. The amount of your down payment compared to
                        the total amount of the loan is called your{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/content/3-most-important-numbers-mortgage-application/"
                        >
                            loan-to-value ratio (LTV)
                        </a>
                        .
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Depending on your loan amount, a lower LTV may increase the
                        likelihood of you being offered a low interest rate. If you intend
                        on keeping your home for a while, you could consider buying{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/content/points-credits-and-how-to-decide-if-theyre-right-for-you/"
                        >
                            points
                        </a>{" "}
                        to reduce your interest rate. Buying points essentially means you
                        agree to pay more upfront costs in exchange for a lower monthly
                        payment.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        If you think you may sell or refinance the home in the first 5-10
                        years of the mortgage, you could consider an{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/content/so-youre-considering-an-adjustable-rate-mortgage/"
                        >
                            adjustable-rate mortgage (ARM)
                        </a>
                        . An ARM offers a lower fixed interest rate for a set introductory
                        period—typically 5, 7, or 10 years. Once the set introductory period
                        ends, the interest rate adjusts (interest rate may increase after
                        consummation). The introductory interest rate for ARMs is typically
                        lower than the interest rate for a conventional fixed-rate mortgage
                        which could make it a great way to save on interest if you know you
                        won’t keep the mortgage for long.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        If you’re not planning on buying a home for a while, improving your
                        credit score is a tried and true way of increasing your chances of
                        qualifying for a lower interest rate. By reducing your{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/content/3-most-important-numbers-mortgage-application/"
                        >
                            debt-to-income ratio (DTI)
                        </a>
                        , lenders will see that you comfortably afford your mortgage and may
                        be more willing to offer a lower interest rate.
                    </p>
                    <hr className="my-12 border-t border-strokeDivider" />
                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                        How much home can I afford?
                    </h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        Once again, the easiest way to do this is with a calculator! To know
                        if a home is in your budget, try out our{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/how-much-house-can-I-afford/"
                        >
                            home affordability calculator
                        </a>
                        . This calculator will take a few inputs from you, like income and
                        savings, and let you know the maximum amount of home you can afford.
                    </p>
                    <hr className="my-12 border-t border-strokeDivider" />
                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                        Next steps to buying a house
                    </h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        There are{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/content/steps-to-buying-a-house/"
                        >
                            8 steps to buying a house
                        </a>{" "}
                        and by using this calculator you’ve completed step 2 (calculating
                        your home affordability) and maybe even step 1 (getting your
                        finances in order).
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        The next step is getting pre-approved. A mortgage pre-approval with
                        Better Mortgage takes as little as 3-minutes and doesn’t impact your
                        credit score. It’s a free, no-commitment way to see how much home
                        you can buy, the mortgages you qualify for, and the range of
                        interest rates you’ll be offered.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                        If you’re ready to buy a home now, our{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/content/the-definitive-home-buying-checklist/"
                        >
                            definitive home buying checklist
                        </a>{" "}
                        can walk you through everything you need to know to get the home you
                        want. With your Better Mortgage pre-approval letter in hand, you’ll
                        be able to show sellers and real estate agents that you mean
                        business—giving you an edge over homebuyers that don’t have this
                        kind of proof that they’re financially ready to purchase. And by
                        working with an agent from Better Real Estate and funding with
                        Better Mortgage, you’ll save $2,000 on closing costs, and save up to
                        $8,200 on average over the life of your loan.**
                    </p>
                    <hr className="my-12 border-t border-strokeDivider" />
                    <section>
                        <div>
                            <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                                More resources
                            </h2>
                            <div className="flex flex-col justify-between gap-2xl pt-[36px] md:flex-row">
                                <div className="rounded-base px-xl py-lg border border-strokeDivider flex-1">
                                    <img
                                        alt="Get pre-approved to see how much you can borrow"
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        style={{ color: "transparent" }}
                                        src="https://media.better.com/better-com/mortgage-calculator/doc-correct.svg"
                                    />
                                    <p className="font-normal leading-body m-0 p-0 text-left mt-base text-[20px] text-interactiveForegroundSecondary">
                                        <span>Get pre-approved to see how much you can borrow</span>
                                    </p>
                                    <a
                                        className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-xs mt-base font-bold no-underline hover:underline"
                                        href="/preapproval/nxt-purchase?utm_source=website&amp;utm_medium=webpage&amp;utm_campaign=calculator&amp;utm_content=mortgage-calculator"
                                    >
                                        Get started →
                                    </a>
                                    <p className="font-normal leading-body m-0 p-0 text-left text-xs text-textSecondary">
                                        Won’t impact your credit
                                    </p>
                                </div>
                                <div className="rounded-base px-xl py-lg border border-strokeDivider flex-1">
                                    <img
                                        alt="See today’s rates in your area"
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        style={{ color: "transparent" }}
                                        src="https://media.better.com/better-com/mortgage-calculator/downtrend.svg"
                                    />
                                    <p className="font-normal leading-body m-0 p-0 text-left mt-base text-[20px] text-interactiveForegroundSecondary">
                                        <span>See today’s rates in your area</span>
                                    </p>
                                    <a
                                        className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-xs mt-base font-bold no-underline hover:underline"
                                        href="/mortgage-rates"
                                    >
                                        See rates →
                                    </a>
                                </div>
                                <div className="rounded-base px-xl py-lg border border-strokeDivider flex-1">
                                    <img
                                        alt="Find out your max homebuying budget"
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        style={{ color: "transparent" }}
                                        src="https://media.better.com/better-com/mortgage-calculator/calculator.svg"
                                    />
                                    <p className="font-normal leading-body m-0 p-0 text-left mt-base text-[20px] text-interactiveForegroundSecondary">
                                        <span>Find out your max homebuying budget</span>
                                    </p>
                                    <a
                                        className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-xs mt-base font-bold no-underline hover:underline"
                                        href="/how-much-house-can-i-afford"
                                    >
                                        Try our mortgage calculator →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="pb-lg m-auto max-w-screen-2xl justify-between px-6 md:px-14">
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
                        *See{" "}
                        <a
                            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                            href="/faq/rates/whats-the-fine-print-better-real-estate/"
                        >
                            Better Real Estate discount terms and conditions
                        </a>
                        .
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
                        **The average lifetime savings estimate is based on a comparison of
                        the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year
                        fixed-rate mortgage product with Better Mortgage’s own offered rate
                        for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is
                        based on conventional, conforming fully-amortizing home purchase
                        loans for borrowers with a loan-to-value of 80 percent and with
                        excellent credit. Better Mortgage’s offered rate is based on pricing
                        output for a 30-year fixed-rate mortgage product with a 30-day lock
                        period for a single-family, owner-occupied residential property and
                        a borrower with excellent (760 FICO) credit and a loan-to-value
                        ratio of 80 percent. Individual savings could vary based on current
                        market rates, property type, loan amount, loan-to-value, credit
                        score, debt-to-income ratio and other variables.
                    </p>
                </section>
            </div>
    
                            {isOpen && <MortageDialog updateMessage={updateMessage} />}
    </>
  )
}

export default MortageTextContent
