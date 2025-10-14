"use client"

import { useState } from "react";
// import TargettingSection from "@/components/components/landing/targeting-section";
import AutoComment from "@/components/pop-ups/auto-comment";
import AutoDm from "@/components/pop-ups/auto-dm";
import MonthlyPlan from "@/components/pop-ups/monthly-plan";
import ProfessionalPlan from "@/components/pop-ups/professional-plan";
import ConnectIGFrench from "@/components/pop-ups/connect-ig-french";
import ConnectIGEnglish from "@/components/pop-ups/connect-ig-english";
import PendingConnectFrench from "@/components/pop-ups/pending-connect-french";
import PendingConnectEnglish from "@/components/pop-ups/pending-connect-english";

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
      {activePopup === null && <div className="z-50 flex md:flex-row flex-col gap-2 mt-[4rem]">
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
        <br />
        <button 
          onClick={() => showPopup('connectIgFrench')}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Show Connect IG French
        </button>
        <button 
          onClick={() => showPopup('pendingConnectFrench')}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Show Pending Connect Flow French
        </button>
        <button 
          onClick={() => showPopup('connectIgEnglish')}
          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
        >
          Show Connect IG English
        </button>
        <button 
          onClick={() => showPopup('pendingConnectEnglish')}
          className="px-4 py-2 bg-amber-500 text-black rounded hover:bg-amber-600"
        >
          Show Pending Connect Flow English
        </button>
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
      {activePopup === 'pendingConnectFrench' && <PendingConnectFrench onClose={hidePopup} />}
      {activePopup === 'connectIgEnglish' && <ConnectIGEnglish onClose={hidePopup} />}
      {activePopup === 'pendingConnectEnglish' && <PendingConnectEnglish onClose={hidePopup} />}
    </div>
  );
}
