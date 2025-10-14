"use client"

import { useState } from "react";
// import TargettingSection from "@/components/components/landing/targeting-section";
import AutoComment from "@/components/pop-ups/auto-comment";
import AutoDm from "@/components/pop-ups/auto-dm";
import MonthlyPlan from "@/components/pop-ups/monthly-plan";
import ProfessionalPlan from "@/components/pop-ups/professional-plan";
import ConnectIGFrench from "@/components/pop-ups/french/connect-ig";
import ConnectIGEnglish from "@/components/pop-ups/english/connect-ig";
import PendingConnectFrench from "@/components/pop-ups/pending-connect-french";
import PendingConnectEnglish from "@/components/pop-ups/pending-connect-english";
import TwofactorFrench from "@/components/pop-ups/french/two-factor";
import CheckingFrench from "@/components/pop-ups/french/checking";
import TwofactorEnglish from "@/components/pop-ups/english/two-factor";
import CheckingEnglish from "@/components/pop-ups/english/checking";

export default function Home() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const showPopup = (popupName: string) => {
    setActivePopup(popupName);
  };

  const hidePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="w-full h-full">
      {/* <TargettingSection /> */}
      {/* Demo buttons to trigger popups - remove these in production */}
      {activePopup === null && <div className="z-50 flex flex-col gap-2 my-[4rem]">

        <div className="flex md:flex-row gap-2 flex-col">

          <button
            onClick={() => showPopup('monthly')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Show Monthly Plan
          </button>
          <button
            onClick={() => showPopup('professional')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Show Professional Plan
          </button>
          <button
            onClick={() => showPopup('autoDm')}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Show Auto DM
          </button>
          <button
            onClick={() => showPopup('autoComment')}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Show Auto Comment
          </button>
        </div>

        <div className="flex md:flex-row gap-2 flex-col my-6">
          <button
            onClick={() => showPopup('connectIgFrench')}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Show Connect IG French
          </button>

          <button
            onClick={() => showPopup('twoFactorFrench')}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Show Two factor French
          </button>

          <button
            onClick={() => showPopup('checkingFrench')}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Show Checking French
          </button>


          <button
            onClick={() => showPopup('pendingConnectFrench')}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Show Pending Connect Flow French
          </button>
        </div>

        {/* two factor and checking */}
        <div className="flex md:flex-row gap-2 flex-col">

          <button
            onClick={() => showPopup('connectIgEnglish')}
            className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
          >
            Show Connect IG English
          </button>
          <button
            onClick={() => showPopup('twoFactorEnglish')}
            className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
          >
            Show Two Factor English
          </button>
          <button
            onClick={() => showPopup('checkingEnglish')}
            className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
          >
            Show Checking English
          </button>
          <button
            onClick={() => showPopup('pendingConnectEnglish')}
            className="px-4 py-2 bg-amber-500 text-black rounded hover:bg-amber-600"
          >
            Show Pending Connect Flow English
          </button>
        </div>
        {activePopup && (
          <button
            onClick={hidePopup}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Hide Popup
          </button>
        )}
      </div>}

      {/* Conditional popup rendering */}
      {activePopup === 'monthly' && <MonthlyPlan onClose={hidePopup} />}
      {activePopup === 'professional' && <ProfessionalPlan onClose={hidePopup} />}
      {activePopup === 'autoDm' && <AutoDm onClose={hidePopup} />}
      {activePopup === 'autoComment' && <AutoComment onClose={hidePopup} />}


      {activePopup === 'connectIgFrench' && <ConnectIGFrench onClose={hidePopup} />}
      {activePopup === 'twoFactorFrench' && <TwofactorFrench onClose={hidePopup} />}
      {activePopup === 'checkingFrench' && <CheckingFrench onClose={hidePopup} />}
      {activePopup === 'pendingConnectFrench' && <PendingConnectFrench onClose={hidePopup} />}


      {activePopup === 'connectIgEnglish' && <ConnectIGEnglish onClose={hidePopup} />}
      {activePopup === 'twoFactorEnglish' && <TwofactorEnglish onClose={hidePopup} />}
      {activePopup === 'checkingEnglish' && <CheckingEnglish onClose={hidePopup} />}
      {activePopup === 'pendingConnectEnglish' && <PendingConnectEnglish onClose={hidePopup} />}
    </div>
  );
}
