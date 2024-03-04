"use client";

import { useState } from "react";

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="flex-1 flex flex-col justify-center items-center gap-1.5 text-base sm:hidden cursor-pointer" onClick={() => {
                setIsOpen(!isOpen);
            }}>

                <div className="w-[32px] h-[2px] bg-white" />
                <div className="w-[32px] h-[2px] bg-white" />

            </div>
            {isOpen && <>
                <ul className="mt-4 flex flex-1 flex-col justify-center items-center gap-4 text-base">
                    <li className="after:content-[''] after:absolute after:bg-light after:h-[3px] after:rounded-lg after:w-0 left-0 after:bottom-[-10px] hover:after:w-full after:transition-[500ms] cursor-pointer relative">
                        all
                    </li>
                    <li className="after:content-[''] after:absolute after:bg-light after:h-[3px] after:rounded-lg after:w-0 left-0 after:bottom-[-10px] hover:after:w-full after:transition-[500ms] cursor-pointer relative">
                        nutrition
                    </li>
                    <li className="after:content-[''] after:absolute after:bg-light after:h-[3px] after:rounded-lg after:w-0 left-0 after:bottom-[-10px] hover:after:w-full after:transition-[500ms] cursor-pointer relative">
                        self-development
                    </li>
                    <li className="after:content-[''] after:absolute after:bg-light after:h-[3px] after:rounded-lg after:w-0 left-0 after:bottom-[-10px] hover:after:w-full after:transition-[500ms] cursor-pointer relative">
                        mental health
                    </li>
                </ul>
            </>}
        </div>
    )
}
