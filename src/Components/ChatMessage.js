import React from "react";
import { BiUser } from "react-icons/bi";

function ChatMessage({ name, message }) {
    return (
        <div className="flex items-start shadow-sm p-2">
            <div className="flex items-center">
                <BiUser />
                <span className="font-bold px-2">{name}</span>
            </div>
            <p>{message}</p>
        </div>
    );
}

export default ChatMessage;
