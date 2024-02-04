"use client";

import { useState } from "react";
import Button from "./button";

function DropDown() {
    //ik i said don't use absolute but this is an exception :3
    return (
        <div className='flex flex-col bg-[#16161E99] rounded-3xl absolute top-[120%] items-center justify-start w-full h-fit py-6 gap-4 z-50 border-4 border-[#16161E]'>
            <Button link='/api/auth/logout' text='Logout'/>
        </div>
    );
}

export default function TopNav() {
    const [openMenu, setOpenMenu] = useState(false);

    const openMenuHandler = (e) => {
        setOpenMenu(true);
    }

    const closeMenuHandler = (e) => {
        setOpenMenu(false);
    }

    const MenuIcon = () => {
        return (
            <svg onMouseDown={openMenuHandler} className="h-14 w-14 fill-[#F1F1F1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"/> </g> </svg>
        );
    }

    const CloseMenuIcon = () => {
        return (
            <svg onMouseDown={closeMenuHandler} className="h-14 w-14 fill-[#F1F1F1]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
        );
    }

    return (
        <div className="sticky top-12 bg-[#16161E99] rounded-full h-fit w-fit py-6 px-24 mt-12 flex flex-row items-center justify-center gap-12 mx-auto z-10 border-4 border-[#16161E]"
            style={{backdropFilter: 'blur(20px)'}}>
            <img src="/icon.webp" className="h-14 w-14 rounded-full"/>
            <a className="font-bold text-3xl text-[#F1F1F1]" href='/'>NorthStar</a>
            {openMenu ? CloseMenuIcon() : MenuIcon()}
            {openMenu ? DropDown() : null}
        </div>
    )
}