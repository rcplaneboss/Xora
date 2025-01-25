import clsx from "clsx";
import { Element } from "react-scroll";
import { useState } from "react";
import { plans } from "../../constants";
import CountUp from "react-countup";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm ">
              Flexible pricing for teams of all sizes.
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/15 p-2 backdrop-blur-[6px] max-md:w-[310px] ">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => {
                  setMonthly(true);
                }}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => {
                  setMonthly(false);
                }}
              >
                Annual
              </button>

              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute h-[calc(100%-16px)] w-[calc(50%-8px)] left-2 top-2 overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div>

            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                alt="outlines"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outlines"
                width={960}
                height={380}
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          {/* {pricing section} */}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, ind) => (
              <div
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
                key={plan.id}
              >
                {ind == 1 && (
                  <div className="g4 absolute h-330 left-0 right-0 top-0  z-1 rounded-tl-3xl rounded-tr-3xl" />
                )}

                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    ind === 1 ? "-top-6" : "-top-6 xl:-top-11"
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl ",
                      ind === 1 ? "size-[120px]" : "size-[80px]"
                    )}
                  />
                </div>
                <div
                  className={clsx(
                    "relative flex flex-col items-center ",
                    ind === 1 ? "pt-24" : "pt-12"
                  )}
                    >
                        
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      ind == 1 ? "border-p3 text-p3" : "border-p1 text-p1"
                    )}
                  >
                    {plan.title}
                        </div>
                        <div className="relative z-2 flex items-center justify-center">
                            <div className={clsx('h-num flex items-start', ind === 1 ? 'text-p3' : 'text-p4')}>$ <CountUp start={plan.priceMonthly} end={ monthly ? plan.priceMonthly : plan.priceYearly} duration={0.4} useEasing={false} preserveValue />  </div>
                        </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
