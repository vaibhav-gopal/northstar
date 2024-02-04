'use client';

import React from 'react';

export default function Chat() {
    const inputStyles = {
        color: 'black',
        border: '1px solid black',
        padding: '5px',
        fontFamily: 'font-sans',
    };

    const handleButtonClick = () => {
        const textInputFromHTML = document.getElementById('textInput');
        const text = textInputFromHTML.value;
        console.log("button clicked: ", text);
    }

    return (
        <div className="flex mx-auto min-h-screen flex-col items-center justify-start px-14 max-w-6xl">
            <label htmlFor="textInput">Enter Text:</label>
            <input type="text" id="textInput" name="textInput" placeholder="Type here..." style={inputStyles} />
            <button onClick={handleButtonClick}>Improve my schedule!</button>
        </div>
    );
}
