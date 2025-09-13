import IgStatus from "@/components/ui/ig-status";
import RadialChart from "@/components/ui/radial-chart";
import Image from "next/image";
import { ABeeZee } from "next/font/google";

const abbezee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: ["400"],
});

const accounts = [
  {
    account: "@enguerrand_masse",
    avatar: "/images/avatar/1.png",
    followers: "28.2k",
    added: "Lorem ipsum",
    followBackRate: 10,
  },
  {
    account: "@luminous_spark",
    avatar: "/images/avatar/2.png",
    followers: "18.6k",
    added: "Lorem ipsum",
    followBackRate: 10,
  },
  {
    account: "@whimsical_dreamer",
    avatar: "/images/avatar/3.png",
    followers: "14.9k",
    added: "Lorem ipsum",
    followBackRate: 10,
  },
  {
    account: "@vibrant_visionary",
    avatar: "/images/avatar/4.png",
    followers: "32.7k",
    added: "Lorem ipsum",
    followBackRate: 10,
  },
];

function TargettingSection() {
  return (
    <div className="w-full h-[33.375rem] bg-secondary rounded-[1rem] mt-[2rem]">
      <div className="w-full px-[1.5rem] py-[1.25rem] flex items-center gap-x-[1rem] border-b border-b-border">
        <div className="py-[0.375rem] px-[1.125rem] flex items-center gap-x-[0.75rem] bg-primary rounded-[0.5rem]">
          <div className="flex items-center gap-x-[0.5rem]">
            <p>Targeting</p>
            <div className="w-[1.25rem] h-[1.25rem] text-xs bg-accent-stroke border border-stroke rounded-[0.5rem] text-accent flex items-center justify-center">
              0
            </div>
          </div>
          <div className="flex items-center gap-x-[0.5rem]">
            <p>Archive</p>
            <div className="w-[1.25rem] h-[1.25rem] text-xs bg-accent-stroke border border-stroke rounded-[0.5rem] text-accent flex items-center justify-center">
              0
            </div>
          </div>
        </div>
        <Image
          src="/icons/ic-help.svg"
          alt="help"
          width={18}
          height={18}
        />
      </div>

      <div className="flex h-[85%]">
        <div className="h-full relative">
          <div className="px-[0.625rem] h-[2.875rem] bg-primary font-medium text-sm flex">
            <div className="w-[17.5rem] flex items-center gap-x-[0.63rem] px-[1rem]">
              <p className="text-border">Accounts</p>
              <Image
                src="/icons/ic-accounts.svg"
                alt="account"
                width={13.71}
                height={10.38}
              />
            </div>
            <div className="w-[7.5rem] flex items-center gap-x-[0.63rem] px-[1rem]">
              <p className="text-border">Followers</p>
            </div>
            <div className="w-[10rem] flex items-center gap-x-[0.63rem] px-[1rem]">
              <p className="text-border">Added</p>
            </div>
            <div className="w-[11.875rem] flex items-center gap-x-[0.63rem] px-[1rem]">
              <p className="text-border">Follow-Back Rate</p>
              <Image
                src="/icons/ic-help.svg"
                alt="account"
                width={16.13}
                height={16.13}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-[0.7rem] mt-[0.625rem]">
            {accounts.map((account) => (
              <div
                key={account.account}
                className="px-[0.625rem] py-[1rem] h-[2.875rem] font-medium text-sm flex"
              >
                <div className="w-[17.5rem] flex items-center gap-x-[0.63rem] px-[1rem]">
                  <IgStatus
                    avatar={account.avatar}
                    username={account.account}
                  />
                  <p className="font-sm text-[#CBD5E1] font-medium">
                    {account.account}
                  </p>
                </div>
                <div className="w-[7.5rem] flex items-center gap-x-[0.63rem] px-[1rem]">
                  <p className="font-sm text-[#CBD5E1] font-medium">
                    {account.followers}
                  </p>
                </div>
                <div className="w-[10rem] flex items-center gap-x-[0.63rem] px-[1rem]">
                  <p className="font-sm text-[#CBD5E1] font-medium">
                    {account.added}
                  </p>
                </div>
                <div className="w-[11.875rem] flex items-center gap-x-[0.63rem] px-[1rem]">
                  <RadialChart value={account.followBackRate} />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-2.5 right-1.5 flex items-center gap-x-[0.5rem]">
            <div className="px-[1rem] py-[0.5rem] border border-border rounded-[0.75rem] font-medium text-sm cursor-pointer text-border">
              Previous
            </div>
            <div className="px-[1rem] py-[0.5rem] border border-border rounded-[0.75rem] font-medium text-sm cursor-pointer text-border">
              Next
            </div>
          </div>
        </div>

        <form className="py-[2.5rem] px-[4.5rem] w-full h-[85%]">
          <p className={`${abbezee.variable} text-[1.125rem]`}>Add targeting</p>
          <p className="text-[#64748B] text-sm">
            Set up your targeting by adding relevant
            <br /> accounts to the list below.
          </p>

          <div className="flex flex-col w-full mt-[1rem]">
            <label htmlFor="username" className="font-medium text-sm">Username</label>
            <input type="text" id="username" className="w-full h-[2.5rem] bg-primary rounded-[0.5rem] outline-none border border-border placeholder:text-border px-[0.75rem] mt-[0.5rem]" placeholder="mileycyrus" />
          </div>

          <div className="mt-[2rem] w-full h-[2.5rem] bg-primary rounded-[0.5rem] border border-border flex justify-center items-center gap-x-[0.5rem] transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
            <Image src="/icons/ic-add-target.svg" alt="add-new-target" width={16.67} height={16.67} />
            <p className="font-semibold text-sm">Add new targets</p>
          </div>

          <div className="mt-[2rem] w-full h-[2.5rem] btn-gradient rounded-[0.5rem] flex justify-center items-center gap-x-[0.5rem] cursor-pointer">
            <p className="font-semibold text-sm">How to choose my target accounts</p>
            <Image src="/icons/ic-link.svg" alt="how-to-choose-my-target-accounts" width={10} height={10} />
          </div>

          <div className="mt-[2rem] w-full h-[2.5rem] btn-gradient rounded-[0.5rem] flex justify-center items-center gap-x-[0.5rem] cursor-pointer">
            <p className="font-semibold text-sm">Let Experts Assist</p>
            <Image src="/icons/ic-link.svg" alt="let-experts-assist" width={10} height={10} />
          </div>

          <p className="mt-[0.5rem] text-border text-sm text-center">Save time with expert targeting optimization</p>
        </form>
      </div>
    </div>
  );
}

export default TargettingSection;
