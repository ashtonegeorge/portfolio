"use client"
import { useState, useEffect, useRef } from "react";
import Aurora from '../Aurora.js'

export default function DigitalTwin() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [exceededRateLimit, setExceededRateLimit] = useState(false);
    const bottomRef = useRef(null);

    const handleSubmitMessage = async () => {
        setIsLoading(true);
        const userMessage = { role: "user", content: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");

        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: newMessages }),
        });

        let data;
        if(res.status === 429 || res.status === 402) {
            data = {
                role: "assistant",
                content: "I'm sorry, you've reached the limit for my digital twin. If you'd like to continue the conversation, feel free to connect with me on LinkedIn — just use the link in the navigation bar or the footer icon. I'd love to hear from you!"
            }
            setExceededRateLimit(true);
        } else {
            data = await res.json();
        }

        setIsLoading(false);
        setMessages([...newMessages, data]);
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

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    return (
        <main className="h-screen">
            <div className="absolute w-screen h-1/2">
                <Aurora
                    colorStops={["#3a80b8", "#449275", "#2c6ca8"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>
            <div className="relative flex justify-center w-full max-h-screen pb-24">
                <div className="md:w-1/2 flex flex-col gap-6 md:gap-12 overflow-y-auto scrollbar-hide py-24 px-2 md:text-lg">
                    {messages.map((msg, i) => (
                        <p className={`${msg.role === 'user' ? 'place-self-end bg-linear-to-tl to-sky-900' : 'place-self-start bg-linear-to-br to-teal-900'} max-w-11/12 md:max-w-5/6 px-6 md:px-8 py-4 bg-zinc-800  from-stone-900 via-stone-800 rounded-4xl border-2 border-stone-900`} key={i}>
                            {msg.content}
                        </p>
                    ))}
                    { isLoading && 
                        <div className='place-self-start bg-linear-to-br to-teal-900 max-w-5/6 px-8 py-4 bg-zinc-800  from-stone-900 via-stone-800 rounded-4xl border-2 border-stone-900'>
                            <div className='flex space-x-2 justify-center items-center'>
                                <span className='sr-only'>Loading...</span>
                                <div className='h-4 w-4 bg-teal-600 rounded-full animate-bounce [animation-delay:-0.3s]' />
                                <div className='h-4 w-4 bg-sky-600 rounded-full animate-bounce [animation-delay:-0.15s]' />
                                <div className='h-4 w-4 bg-cyan-600 rounded-full animate-bounce' />
                            </div>
                        </div>
                    }
                    <div ref={bottomRef} />
                </div>
                <div className="fixed bottom-0 w-full flex flex-col items-center md:pb-10">
                    <div className="fixed bottom-0 cursor-text flex w-full md:w-1/2 mx-auto justify-evenly items-center playfair-display-600 p-2 py-3 my-6 md:my-16 md:p-5 bg-linear-to-tr from-teal-800 via-sky-900 to-green-800 rounded-2xl md:rounded-full z-20">
                        <div className="absolute acmbg bg-zinc-800 md:shadow-md md:shadow-black border-1 border-stone-950 -inset-1 md:rounded-full -z-1 blur-md" />
                        <input value={input} onChange={(e) => setInput(e.target.value)} onSubmit={handleSubmitMessage} onKeyDown={ (e) => { if (e.key === "Enter" && input.length > 0 && exceededRateLimit === false) handleSubmitMessage() } } type="text" className="md:block hidden w-full h-full outline-0 font-light text-md md:text-xl text-stone-200 px-2" placeholder="Ask me anything about work, goals, or background 💬" />
                        <input value={input} onChange={(e) => setInput(e.target.value)} onSubmit={handleSubmitMessage} onKeyDown={ (e) => { if (e.key === "Enter" && input.length > 0 && exceededRateLimit === false) handleSubmitMessage() } } type="text" className="md:hidden w-full h-full outline-0 font-light text-md md:text-xl text-stone-200 px-2" placeholder="Ask me anything 💬" />
                        <button onClick={ () => { if( input.length > 0 && exceededRateLimit === false ) handleSubmitMessage() } }>
                            <svg className="stroke-2 stroke-stone-200 cursor-pointer w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path className="" d='M12 16.5v-9M8.5 11 12 7.5l3.5 3.5'/><path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'/>
                            </svg>
                        </button>
                    </div>
                    <p className="hidden md:block text-xs text-stone-400">Please note, my digital twin can make mistakes. Reach out via LinkedIn if necessary.</p>
                </div>
            </div>
        </main>
    )
}