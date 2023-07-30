import { useState } from "react";
import React from "react";
import Button from "../Buttons/Button";

export default function Home() {
    const [text, setText] = useState('');
    let length = text != '' ? text.split(" ").length : 0
    let seconds = (0.008 * length ) * 60
    seconds = Math.round(seconds * 10) / 10
    let minutes = 0.008 * length
    minutes = Math.round(minutes * 10) / 10

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleClearText = () => {
        setText("");
    };
    return (
        <>
            <div className="sm:container sm:mx-auto flex flex-col justify-center py-5">
                <h1 className="text-2xl font-bold mb-1"> Enter Text To Analyse</h1>

                <textarea
                    value={text}
                    placeholder="Write Here "
                    rows="8"
                    autoFocus
                    className="overflow-x-hidden overflow-y-auto text-lg py-5 px-8 font-serif border-solid border-2 border-green-600 rounded-md w-[75%]"
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                <div className="countResult mb-5">
                    <span className="text-xl font-bold ml-2">
                        {text != '' ? text.split(" ").length : 0}
                    </span> Words <span className="text-xl font-bold ml-2">{text.length}</span>{" "}
                    Characters{" "}
                    <span className="text-lg font-bold ml-2">
                        {seconds <= 59 ? seconds : minutes}
                    </span>{" "}
                    {seconds <= 59 ? <span>Seconds to read. </span> : <span>Minutes to read. </span>}

                </div>

                <div className="flex gap-3">
                    <Button tiatle="Convert Uppercase" action={handleUpCase} />
                    <Button tiatle="Convert Lowercase" action={handleLowerCase} />
                    <Button tiatle="Clear Text" action={handleClearText} />
                </div>

                <div className="preview ml-2">
                    <h2 className="text-[25px] font-bold">Preview :-</h2>
                    <p className="font-semibold pr-10 pb-10">{text}</p>
                </div>
            </div>
        </>
    );
}
