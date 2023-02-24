import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import generateMessage from "../lib/randomMessageGenerator";
import generateName from "../lib/randomNameGenerator";
import { addChat } from "../store/slices/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
    const [liveChat, setLiveChat] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.chat.chats);
    useEffect(() => {
        const chatInterval = setInterval(() => {
            dispatch(
                addChat({
                    name: generateName(),
                    message: generateMessage(),
                })
            );
        }, 2000);
        return () => clearInterval(chatInterval);
    }, [dispatch]);
    return (
        <div>
            <p className="font-bold mb-2">Live chat</p>
            <div className="w-full h-[600px] border bg-slate-100 p-2 rounded-md overflow-y-scroll flex flex-col-reverse">
                {chatMessages.map((item, i) => (
                    <ChatMessage
                        name={item.name}
                        key={i}
                        message={item.message}
                    />
                ))}
            </div>
            {/* add chat */}
            <form
                className="w-full p-2 flex space-x-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addChat({ name: "imran", message: liveChat }));
                    setLiveChat("");
                }}
            >
                <input
                    type="text"
                    className="w-full border rounded outline-red-100 p-2"
                    placeholder="Add message"
                    value={liveChat}
                    onChange={(e) => setLiveChat(e.target.value)}
                />
                <button type="submit" className="p-2 bg-green-200 rounded">
                    Send
                </button>
            </form>
        </div>
    );
};

export default LiveChat;
