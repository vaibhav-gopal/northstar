"use client";

import { useUser } from '@auth0/nextjs-auth0/client'; // used to save state of current user, accessed using the useUser() hook to access user details
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation'

const ChecklistItem = ({ id, text, isChecked, toggleCheck }) => {
    return (
        <div>
            <input
                type="checkbox"
                id={id}
                checked={isChecked}
                onChange={() => toggleCheck(id)}
            />
            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default function Dashboard() {
    const { user, error, isLoading } = useUser();
    const [items, setItems] = useState([
        {  id: 1, text: 'Item 1', isChecked: false },
        {  id: 2, text: 'Item 2', isChecked: false },
        { id: 3, text: 'Item 3', isChecked: false }
    ]);

    const toggleCheck = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    };

    return (
        user && (
            <div className="flex mx-auto min-h-screen flex-col items-center justify-start px-14 max-w-6xl">
                <h2 className="text-4xl font-bold py-14 text-[#F1F1F1]">Welcome back, {user.name}!</h2>
                {
                    items.map((item) => (
                        <ChecklistItem
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            isChecked={item.isChecked}
                            toggleCheck={toggleCheck}
                        />
                    ))
                }
            </div>
        )
    );
}