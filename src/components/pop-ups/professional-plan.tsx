import React from "react";
import { ABeeZee } from "next/font/google";
import Image from "next/image";
import ProfressionalPlancard from "./components/profressional-plan-card";

const abbezee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: ["400"],
});

function ProfessionalPlan({ onClose }: { onClose: () => void }) {
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
            You&apos;re{" "}
            <span className="text-gradient">already doing great</span> with
            <br /> the Starter plan!
          </p>
          <p className="text-[#CBD5E1]">
            Unlock more power, more automation, and more
            <br /> results with the Professional package. Upgrade to
            <br /> the next level — the remaining days of your
            <br /> current plan will be credited.
          </p>

          <div className="w-full flex flex-1 absolute bottom-4 left-0 items-end md:px-[2.5rem] px-[1.5rem]">
            <div className="md:w-[13.5rem] w-full h-[2.75rem] btn-gradient rounded-[0.5rem] flex justify-center items-center gap-x-[0.5rem] cursor-pointer ">
              <p className="font-semibold text-sm">
                Upgrade to the Professional plan
              </p>
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
            <ProfressionalPlancard
              mainIcon="/icons/star.svg"
              likeIcon="/icons/like-default.svg"
              likes="6k"
              followersIcon="/icons/followers-default.svg"
              followers="2k"
              sendIcon="/icons/send-default.svg"
              sent="11k"
              messageicon="/icons/message-default.svg"
              messages="5k"
              type="Starter"
              checkIcon="/icons/purple-check.svg"
              features={[
                "5000 interactions/month",
                "100% automatic growth",
                "Weekly optimizations",
                "Dashboard to track your growth",
                "Personalized assistance 7 days a week by email",
                "Instagram training provided by our experts",
              ]}
              mainColor="#6875F5"
            />
          </div>

          <div className="absolute top-[17rem] right-[10rem]">
            <ProfressionalPlancard
              mainIcon="/icons/brief-case.svg"
              likeIcon="/icons/like-gradient.svg"
              likes="18k"
              followersIcon="/icons/followers-gradient.svg"
              followers="8k"
              sendIcon="/icons/send-gradient.svg"
              sent="27k"
              messageicon="/icons/message-gradient.svg"
              messages="11k"
              type="Professional"
              checkIcon="/icons/gradient-check.svg"
              features={[
                "10,000 interactions/month.",
                "Targeting carried out by our experts",
                "Daily optimizations",
                "100% automatic growth",
                "Dashboard to track your growth",
                "Personalized assistance 7 days/week",
                "Instagram training by our experts",
              ]}
              mainColor={{
                type: "gradient",
                colors: ["#B36AE9", "#EC4899", "#FCA74B"],
                direction: "45deg",
              }}
            />
          </div>

          <Image
            src="/icons/wubble-right-arrow.svg"
            alt="monthly"
            width={49.66}
            height={38.56}
            className="absolute top-[25rem] right-[5.2rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfessionalPlan;
