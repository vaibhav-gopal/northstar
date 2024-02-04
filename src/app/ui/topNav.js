"use client";

import { useState } from "react";

function DropDown() {
    return (
        <div>
            <h1>
                HELLO THERE
            </h1>
        </div>
    );
}

export default function TopNav() {
    const [openMenu, setOpenMenu] = useState(false);

    const openMenuHandler = (e) => {
        setOpenMenu(true);
    }

    return (
        <>
            <div className="bg-[#16161E] rounded-full h-fit w-fit py-6 px-12 mt-12 flex flex-row items-center justify-center gap-12 mx-auto">
                <img src="/icon.webp" className="h-14 w-14 rounded-full"/>
                <h1 className="font-bold text-3xl text-[#F1F1F1]">NorthStar</h1>
                <svg onMouseDown={openMenuHandler} className="h-14 w-14 fill-[#F1F1F1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"/> </g> </svg>
            </div>
            {openMenu ? DropDown : null}
        </>
    )
}