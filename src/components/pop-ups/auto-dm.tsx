import Image from "next/image";
import React from "react";
import { ABeeZee } from "next/font/google";

const abbezee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: ["400"],
});
function AutoDm({ onClose }: { onClose: () => void }) {
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
                src="/icons/auto-dm.svg"
                alt="rocket"
                width={24.96}
                height={24.96}
              />
            </div>
          </div>

          <p
            className={`${abbezee.variable} mt-[2.4rem] mb-[1rem] text-[1.5rem]`}
          >
            You gained <span className="text-gradient">+2K new followers</span>
            <br /> this week. Let’s turn them into <br />
            revenue{" "}
          </p>
          <p className="text-[#CBD5E1]">
            Enable automatic DMs and send a personalized
            <br /> welcome message to each new follower.
          </p>
          <div className="w-full flex flex-1 absolute bottom-[6rem] left-0 items-end md:px-[2.5rem] px-[1.5rem]">
            <div className="md:w-[13.5rem] w-full h-[2.75rem] btn-gradient rounded-[0.5rem] flex justify-center items-center gap-x-[0.5rem] cursor-pointer ">
              <p className="font-semibold text-sm">Activate Auto DM</p>
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

          <div className="w-fit h-fit rounded-[1rem] absolute top-[4rem] left-[2rem] overflow-hidden bg-[#FBFBFB26] backdrop-blur-lg">
            <Image
              src="/images/pop-images/ig-post.png"
              alt="ig-post"
              width={278.78}
              height={349.03}
              className=" drop-shadow-2xl"
            />
          </div>

          <div className="w-fit h-fit rounded-[1rem] absolute top-[22rem] left-[10rem] overflow-hidden bg-[#FBFBFB26] backdrop-blur-lg">
            <Image
              src="/images/pop-images/ig-comments.png"
              alt="ig-post"
              width={239.77}
              height={226.71}
              className=" drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoDm;
