import Image from "next/image";
import Link from "next/link";
import React from "react";
import IgStatus from "./ig-status";

function Navbar() {
  return (
    <>
      <header className="w-full bg-secondary h-[5rem] border-b border-b-border">
        <nav className=" w-full h-full max-w-[1300px] mx-auto flex items-center justify-between">
          <Image
            src="/icons/logo.svg"
            alt="propulse"
            width={184}
            height={48}
          />

          <div className="flex gap-3">
            <Link href="/">
              <div className="py-[0.5rem] px-[0.75rem] flex items-center justify-center gap-x-1 rounded-[0.5rem] bg-primary">
                <Image
                  src="/icons/ic-home.svg"
                  alt="home"
                  width={16.67}
                  height={16.67}
                />
                <p className="font-semibold text-sm">Home</p>
              </div>
            </Link>

            <Link href="/">
              <div className="py-[0.5rem] px-[0.75rem] flex items-center justify-center gap-x-1 rounded-[0.5rem] bg-primary">
                <Image
                  src="/icons/ic-settings.svg"
                  alt="setting"
                  width={17.5}
                  height={17.5}
                />
                <p className="font-semibold text-sm">Settings</p>
                <Image
                  src="/icons/ic-chevron-down.svg"
                  alt="view"
                  width={8}
                  height={4}
                />
              </div>
            </Link>

            <Link href="/">
              <div className="py-[0.5rem] px-[0.75rem] flex items-center justify-center gap-x-1 rounded-[0.5rem] bg-primary">
                <Image
                  src="/icons/menu.svg"
                  alt="menu"
                  width={15}
                  height={10}
                />
                <p className="font-semibold text-sm">Menu</p>
              </div>
            </Link>
          </div>
        </nav>
      </header>
      <div className="w-full bg-secondary h-[7.3rem]">
        <div className=" w-full h-full max-w-[1300px] mx-auto flex items-center gap-x-[7.5rem]">
          <div className="px-[1rem] py-[0.75rem] rounded-[1rem] border border-border flex items-center gap-x-[1rem] ">
            <IgStatus
              avatar="/images/avatar/nike-avatar.png"
              username="@nike"
            />

            <div className="flex flex-col">
              <div className="flex items-center gap-x-[0.25rem]">
                <Image
                  src="/icons/ic-instagram.svg"
                  alt="instagram"
                  width={16.67}
                  height={16.67}
                />
                <p className="font-bold text-[21px]">nike</p>
              </div>

              <div className="flex items-center gap-x-[0.375rem]">
                <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-[#EF4444]"></div>
                <p className="font-medium text-sm">Connect Your Account</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-y-[0.375rem] pl-[1rem] cursor-pointer">
              <Image
                src="/icons/ic-chevron-down.svg"
                alt="view"
                width={8}
                height={4}
                className="rotate-180"
              />
              <Image
                src="/icons/ic-chevron-down.svg"
                alt="view"
                width={8}
                height={4}
              />
            </div>
          </div>

          <div className="py-[0.625rem] px-[0.375rem] flex items-center gap-x-[1rem] bg-fore rounded-[0.75rem]">
            <Link href="/">
              <div className="py-[0.5rem] px-[0.75rem] flex items-center justify-center gap-x-1 rounded-[0.75rem] bg-primary">
                <Image
                  src="/icons/ic-overview.svg"
                  alt="overview"
                  width={16.67}
                  height={16.67}
                />
                <p className="font-medium text-sm">Overview</p>
              </div>
            </Link>

            <Link href="/">
              <div className="py-[0.5rem] px-[0.75rem] flex items-center justify-center gap-x-1 rounded-[0.75rem] bg-primary">
                <Image
                  src="/icons/ic-growth-settings.svg"
                  alt="overview"
                  width={16.67}
                  height={16.67}
                />
                <p className="font-medium text-sm text-accent">Growth Settings</p>
              </div>
            </Link>

            <Link href="/">
              <div className="py-[0.5rem] px-[0.75rem] flex items-center justify-center gap-x-1 rounded-[0.75rem] bg-primary">
                <Image
                  src="/icons/ic-connect-id.svg"
                  alt="overview"
                  width={16.67}
                  height={16.67}
                />
                <p className="font-medium text-sm">Connect Your ID</p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
