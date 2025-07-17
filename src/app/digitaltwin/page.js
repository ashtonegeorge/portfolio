"use client"

import { useState, useEffect } from "react";

export default function DigitalTwin() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmitMessage = async () => {
        const userMessage = { role: "user", content: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);

        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: newMessages }),
        });

        const data = await res.json();
        setMessages([...newMessages, data.assistantMessage]);
        setInput("");
    }

    useEffect(() => {
        setMessages(
            [
                {
                    role: "assistant",
                    content: "Hey there, what would you like to know about me?",
                },
            ]
        )
    }, [])

    return (
        <main className="h-screen">
            <div className="flex justify-center w-full max-h-screen pb-24">
                <div className="md:w-1/2 flex flex-col gap-12 overflow-y-auto scrollbar-hide py-24 text-lg">
                    {messages.map((msg, i) => (
                        <p className={`${msg.role === 'user' ? 'place-self-end bg-linear-to-tl to-sky-900' : 'place-self-start bg-linear-to-br to-teal-900'} max-w-5/6 px-6 py-4 bg-zinc-800  from-stone-900 via-stone-800  rounded-full border-2 border-stone-900`} key={i}>
                            {msg.content}
                        </p>
                    ))}
                </div>
                <div className="fixed bottom-0 cursor-text md:flex w-1/2 justify-evenly items-center playfair-display-600 p-2 my-12 md:p-5 bg-linear-to-tr from-teal-800 via-sky-900 to-green-800 rounded-full z-20">
                    <div className="absolute acmbg bg-zinc-800 md:shadow-md md:shadow-black border-1 border-stone-950 -inset-1 rounded-full -z-1 blur-md" />
                    <input value={input} onChange={(e) => setInput(e.target.value)} onSubmit={handleSubmitMessage} onKeyDown={ (e) => { if (e.key === "Enter") handleSubmitMessage() } } type="text" className="w-full h-full outline-0 font-light text-xl text-stone-200 px-2" placeholder="Ask me anything about work, goals, or background 💬" />
                    <button onClick={handleSubmitMessage}>
                        <svg className="stroke-2 stroke-stone-200 cursor-pointer w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path className="" d='M12 16.5v-9M8.5 11 12 7.5l3.5 3.5'/><path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'/>
                        </svg>
                    </button>
                </div>
            </div>
        </main>
    )
}