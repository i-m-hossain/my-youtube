import React from "react";

function Sidebar() {
    return (
        <>
            <ul className="py-2">
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <hr />
            <ul className="py-2">
                <li>Library</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
            </ul>
            <h2 className="py-2 font-bold ">Subscriptions</h2>
            <ul>
                <li>Free code camp</li>
                <li>Akshay saini</li>
                <li>Github</li>
            </ul>
        </>
    );
}

export default Sidebar;
