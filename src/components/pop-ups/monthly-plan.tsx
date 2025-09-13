import Image from "next/image";
import React from "react";
import { ABeeZee } from "next/font/google";
import PlanCard from "./components/plan-card";

const abbezee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: ["400"],
});

function MonthlyPlan({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#000000c0] backdrop-blur-[14px] flex justify-center items-center">
      <div className="md:w-[57.5rem] w-full md:h-[38.75rem] h-full md:rounded-[1.25rem] bg-secondary flex relative overflow-hidden">
        <Image
          src="/icons/close.svg"
          alt="close"
          width={12}
          height={12}
          className="absolute top-[1.8rem] right-[2rem] z-50 cursor-pointer"
          onClick={onClose}
        />
        <div className="md:w-1/2 w-full h-full p-[1.5rem] md:p-[2.5rem] relative">
          <div className="w-[3.75rem] h-[3.75rem] rounded-[0.875rem] bg-[#FFFFFF1F] flex items-center justify-center">
            <div className="w-[3.25rem] h-[3.25rem] rounded-[0.6875rem] border border-border-two flex justify-center items-center">
              <Image
                src="/icons/rocket.svg"
                alt="rocket"
                width={24.96}
                height={24.96}
              />
            </div>
          </div>

          <p
            className={`${abbezee.variable} mt-[2.4rem] mb-[1rem] text-[1.5rem]`}
          >
            You&apos;ve been using Propulse for a<br /> month.{" "}
            <span className="text-gradient">Ready to save up</span>
            <br />
            <span className="text-gradient-2">to 30%</span> by switching to a
            <br /> quarterly or annual plan?
          </p>
          <p className="text-[#CBD5E1]">
            Boost your growth — commit for longer, pay less.
          </p>

          <div className="w-full flex flex-1 absolute bottom-[4rem] left-0 items-end md:px-[2.5rem] px-[1.5rem]">
            <div className="md:w-[13.5rem] w-full h-[2.75rem] btn-gradient rounded-[0.5rem] flex justify-center items-center gap-x-[0.5rem] cursor-pointer ">
              <p className="font-semibold text-sm">Discover the offers</p>
              <Image
                src="/icons/next.svg"
                alt="let-experts-assist"
                width={13.5}
                height={10.5}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full relative md:block hidden">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/grain-gradients/left-gradient-modal.svg"
              alt="grainy-gradient"
              fill
              className="object-contain scale-170 -translate-y-[55%] -translate-x-[70%]"
            />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/grain-gradients/right-gradient-modal.svg"
              alt="grainy-gradient"
              fill
              className="object-contain scale-200 translate-y-[20%] translate-x-[55%]"
            />
          </div>

          <div className="absolute top-[4rem] right-[4rem]">
            <PlanCard
              plan="Monthly"
              amount={197}
              className="bg-[#E5E7EB1A] backdrop-blur-[49.52px]"
            />
          </div>

          <div className="absolute top-[10rem] right-[14rem]">
            <PlanCard
              plan="Quarterly"
              amount={177}
              discount={10}
              className="bg-accent backdrop-blur-[49.52px]"
            />
          </div>

          <Image
            src="/icons/wubble-right-arrow.svg"
            alt="monthly"
            width={49.66}
            height={38.56}
            className="absolute top-[14rem] right-[6rem]"
          />

          <div className="absolute top-[18rem] right-[4rem]">
            <PlanCard
              plan="Half-yearly"
              amount={157}
              discount={20}
              className="background-gradient-two backdrop-blur-[49.52px]"
            />
          </div>

          <Image
            src="/icons/wubble-left-arrow.svg"
            alt="quarterly"
            width={47}
            height={72.01}
            className="absolute top-[17.6rem] left-[1rem]"
          />

          <div className="absolute top-[24rem] right-[14rem]">
            <PlanCard
              plan="Yearly"
              amount={138}
              discount={30}
              className="background-gradient backdrop-blur-[49.52px]"
            />
          </div>
          <Image
            src="/icons/wubble-right-arrow.svg"
            alt="monthly"
            width={49.66}
            height={38.56}
            className="absolute top-[30rem] right-[8rem]"
          />

          <div className="flex items-baseline absolute top-[35rem] right-[10rem]">
            <Image
              src="/icons/bottom-arrow.svg"
              alt="get-4-months-free"
              width={24.12}
              height={9.65}
            />
            <p className={`${abbezee.variable} text-[0.9rem]`}>
              Get 4 Months Free!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyPlan;
