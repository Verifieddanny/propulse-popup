import React from "react";
import { ABeeZee } from "next/font/google";

const abbezee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: ["400"],
});

function PlanCard({
  plan,
  amount,
  discount,
  className,
}: {
  plan: string;
  amount: number;
  discount?: number;
  className: string;
}) {
  return (
    <div
      className={`w-[11.7rem] h-[9.4rem] rounded-[1.23rem] pt-[1.8rem] px-[0.49rem] pb-[0.5rem] relative ${className}`}
    >
      <p
        className={`${abbezee.variable} text-[1.5rem] text-center pb-[1.2rem]`}
      >
        {plan}
      </p>
      <div className="w-[10.7rem] h-[3.7rem] rounded-[0.86rem] bg-[#ffffff26] flex justify-center items-center text-[1.4rem]">
        €{amount} <span className="text-[0.86rem] h-fit">/month</span>
      </div>
      {discount && (
        <div className="absolute left-0 -bottom-[1rem] w-[11.7rem] h-fit flex justify-center" >
          <div className={`w-[5.3rem] h-[1.85rem] bg-white text-black flex items-center justify-center rounded-full ${abbezee.variable} text-[0.86rem]`}>-{discount}% OFF</div>
        </div>
      )}
    </div>
  );
}

export default PlanCard;
