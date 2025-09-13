import Image from "next/image";
import React from "react";
import { ABeeZee } from "next/font/google";

const abbezee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: ["400"],
});

function ProfressionalPlancard({
  mainIcon,
  likeIcon,
  likes,
  followersIcon,
  followers,
  sendIcon,
  sent,
  messageicon,
  messages,
  type,
  checkIcon,
  features,
  mainColor,
}: {
  mainIcon: string;
  likeIcon: string;
  likes: string;
  followersIcon: string;
  followers: string;
  sendIcon: string;
  sent: string;
  messageicon: string;
  messages: string;
  type: "Starter" | "Professional";
  checkIcon: string;
  features: string[];
  mainColor:
    | string
    | { type: "gradient"; colors: string[]; direction?: string };
}) {
  // Calculate the percentage and circumference
  const percentage = 100;
  const radius = (55.8 - 4) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Generate a unique ID for the gradient to avoid conflicts
  const gradientId = React.useId();

  return (
    <div className="w-[15.1rem] h-[19.33rem] rounded-[1.16rem] bg-[#E5E7EB1A] backdrop-blur-[50.22px]">
      <div className="w-full h-[7rem] overflow-hidden flex items-center justify-center relative">
        <div
          style={{
            background:
              typeof mainColor === "string"
                ? mainColor
                : `linear-gradient(${
                    mainColor.direction || "45deg"
                  }, ${mainColor.colors.join(", ")})`,
          }}
          className="w-[9rem] h-[5rem] absolute -top-[4rem] blur-lg rounded-full"
        />
        <div className="w-[14.2rem] h-[14.2rem] rounded-full border-[0.93px] border-[#E5E7EB33] flex items-center justify-center">
          <div className="w-[9.94rem] h-[9.94rem] rounded-full border-[0.93px] border-[#E5E7EB33] flex items-center justify-center">
            <div className="w-[6.4rem] h-[6.4rem] rounded-full border-[0.93px] border-[#E5E7EB33] flex items-center justify-center">
              <div className="relative inline-flex items-center justify-center w-[3.4875rem] h-[3.4875rem]">
                <svg
                  width={55.8}
                  height={55.8}
                  className="transform -rotate-90"
                  viewBox={`0 0 ${55.8} ${55.8}`}
                >
                  {/* Define gradient if needed */}
                  {typeof mainColor !== "string" &&
                    mainColor.type === "gradient" && (
                      <defs>
                        <linearGradient
                          id={gradientId}
                          gradientTransform={
                            mainColor.direction
                              ? `rotate(${mainColor.direction})`
                              : "rotate(45)"
                          }
                        >
                          {mainColor.colors.map((color, index) => (
                            <stop
                              key={index}
                              offset={`${
                                index * (100 / (mainColor.colors.length - 1))
                              }%`}
                              stopColor={color}
                            />
                          ))}
                        </linearGradient>
                      </defs>
                    )}

                  {/* Background circle */}
                  <circle
                    cx={55.8 / 2}
                    cy={55.8 / 2}
                    r={radius}
                    stroke="#374151"
                    strokeWidth={4}
                    fill="transparent"
                    className="opacity-30"
                  />

                  {/* Progress circle - handle gradient or solid color */}
                  <circle
                    cx={55.8 / 2}
                    cy={55.8 / 2}
                    r={radius}
                    stroke={
                      typeof mainColor === "string"
                        ? mainColor
                        : `url(#${gradientId})`
                    }
                    strokeWidth={4}
                    fill="transparent"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-300 ease-in-out"
                  />
                </svg>

                {/* Center image */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                  <Image
                    src="/images/avatar/professional.png"
                    width={52.91}
                    height={66.15}
                    alt="avatar3"
                    className="rounded-full  w-[2.6rem] h-[2.6rem] "
                  />
                </div>

                <div className="w-[3.4875rem] absolute left-0 -bottom-[0.6rem] flex justify-center">
                  <div
                    className={`border-[2.79px] border-[#1A1D2E] rounded-full w-[1.395rem] h-[1.395rem] bg-[${mainColor}] flex items-center justify-center`}
                    style={{
                      background:
                        typeof mainColor === "string"
                          ? mainColor
                          : `linear-gradient(${
                              mainColor.direction || "45deg"
                            }, ${mainColor.colors.join(", ")})`,
                    }}
                  >
                    <Image
                      src={mainIcon || ""}
                      alt="type"
                      width={10.61}
                      height={10.09}
                      className="w-[1rem] h-[1rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating icons */}
        <div className="p-[0.35rem] rounded-[0.6rem] flex flex-col backdrop-blur-[31.62px] items-center gap-y-[0.24rem] absolute top-[1.51rem] left-[0.93rem] bg-[#E5E7EB33]">
          <Image src={likeIcon || ""} alt="like" width={9.8} height={8.42} />
          <p className="text-[0.465rem] font-semibold">+{likes}</p>
        </div>

        <div className="p-[0.35rem] rounded-[0.6rem] flex flex-col backdrop-blur-[31.62px] items-center gap-y-[0.24rem] absolute top-[4.4175rem] left-[3.371rem] bg-[#E5E7EB33]">
          <Image
            src={followersIcon || ""}
            alt="followers"
            width={7.44}
            height={9.3}
          />
          <p className="text-[0.465rem] font-semibold">+{followers}</p>
        </div>

        <div className="p-[0.35rem] rounded-[0.6rem] flex flex-col backdrop-blur-[31.62px] items-center gap-y-[0.24rem] absolute top-[3.4875rem] right-[3.18rem] bg-[#E5E7EB33]">
          <Image src={sendIcon || ""} alt="send" width={7.44} height={9.3} />
          <p className="text-[0.465rem] font-semibold">+{sent}</p>
        </div>

        <div className="p-[0.35rem] rounded-[0.6rem] flex flex-col backdrop-blur-[31.62px] items-center gap-y-[0.24rem] absolute top-[0.8rem] right-[1.22rem] bg-[#E5E7EB33]">
          <Image
            src={messageicon || ""}
            alt="messages"
            width={7.44}
            height={9.3}
          />
          <p className="text-[0.465rem] font-semibold">+{messages}</p>
        </div>
      </div>
      <div className="w-full h-[12.3rem] p-[1.1625rem]">
        <p className={`${abbezee.variable} font-[1.1625rem] mb-[0.465rem]`}>
          {type}
        </p>
        <div className="w-full flex flex-col ">
          {features.map((feature) => {
            const words = feature.split(" ");
            const firstWord = words[0];
            const remainingText = words.slice(1).join(" ");

            return (
              <div key={feature} className="flex items-start gap-2">
                <Image
                  src={checkIcon || ""}
                  alt="check"
                  width={13}
                  height={13}
                />
                <p className="text-[11px]">
                  <span className="font-bold">{firstWord}</span>
                  {remainingText && ` ${remainingText}`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfressionalPlancard;
