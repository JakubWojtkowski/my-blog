"use client";

import { convertDate } from "@/lib/convertDate";
import { useEffect, useState } from "react";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  const updateClock = () => {
    const time = convertDate();
    setLocalTime(time);
  }

  useEffect(() => {
    updateClock();
    setInterval(updateClock, 60000);
  }, []);


  return (
    <div className="flex flex-col w-full px-8 py-4 mx-auto bg-dark text-lightBackground rounded-t-3xl z-30">
      <h1 className="text-center text-[82px] tracking-[-7px] sm:text-[140px] sm:tracking-[-14px] md:text-[180px] md:tracking-[-20px] lg:text-[240px] lg:tracking-[-26px] xl:text-[320px] xl:tracking-[-32px] 2xl:text-[360px] 2xl:tracking-[-38px] font-bold">
        improveu
      </h1>
      <div className="flex flex-col">
        <span className="text-right text-xs lg:text-base tracking-tight underline cursor-pointer  opacity-[0.7]">
          <a href="mailto:jvkub.wojtkowski@gmail.com" className="hover:opacity-[0.5] hover:transition-[500ms]">connect</a>
        </span>

        <div className="flex flex-row justify-between items-end text-xs lg:text-base tracking-tight gap-6 opacity-[0.7]">
          <span>
            local time <br /> {localTime}
          </span>
          <span className="text-right">
            created by{" "}
            <a href="https://github.com/JakubWojtkowski" target="_blank">
              Jakub Wojtkowski {"'"}24 ©
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
