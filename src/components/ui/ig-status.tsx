import Image from "next/image";
import React from "react";

function IgStatus({ avatar, username }: { avatar: string; username: string }) {
  return (
    <div className='w-[2.5rem] h-[2.5rem] rounded-full bg-[url("/icons/ig-status.svg")] flex items-center justify-center'>
      <div className="w-[2.2rem] h-[2.2rem] relative">
        <Image
          src={avatar || ""}
          alt={username || "@username"}
          width={100}
          height={100}
          className={`w-full h-full rounded-full object-cover object-center`}
        />
      </div>
    </div>
  );
}

export default IgStatus;
