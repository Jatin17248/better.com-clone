import React from 'react'
import { useState } from 'react'
import OurProducts from './QansComponents/OurProducts'
import Calculators from './QansComponents/Calculators'
import GuidesFacts from './QansComponents/GuidesFacts'

const Qans = () => {
    const activeBtnCls = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary"; 
    const inActiveBtnCls = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto";
    const a = 0;
    const b = 1;
    const c = 2;
    const[activeSec, setActiveSec] = useState(a);
    return (
   <>
    <section className="section w-full pb-base lg:pb-12">
            <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
              <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
                <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 text-xl md:text-2xl md:tracking-tight w-full max-w-lg !text-3xl tracking-tight">
                  Got questions?
                  <br />
                  We've got answers
                </h2>
                <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&amp;::-webkit-scrollbar]:w-0 [&amp;::-webkit-scrollbar]:h-0">
                  <button 
                  onClick={()=> setActiveSec(a)}
                  className={activeSec===a?activeBtnCls:inActiveBtnCls}
                  >
                    Our products
                  </button>
                  <button 
                  onClick={()=> setActiveSec(b)}
                  className={activeSec===b?activeBtnCls:inActiveBtnCls}
                  >
                    Calculators
                  </button>
                  <button 
                  onClick={()=> setActiveSec(c)}
                  className={activeSec===c?activeBtnCls:inActiveBtnCls}
                  >
                    Guides &amp; FAQs
                  </button>
                </div>
              </div>

                {(activeSec === a) ? <OurProducts /> : (activeSec === b) ? <Calculators /> : (activeSec === c) ? <GuidesFacts/> : <OurProducts/>}
            
             
            </div>
          </section>
   </>
  )
}

export default Qans