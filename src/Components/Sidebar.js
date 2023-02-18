import React from "react";
import { useSelector } from "react-redux";

function Sidebar() {
    const isMenuActive = useSelector((state) => state.sidebar.isMenuActive);
    if (!isMenuActive) {
      console.log({isMenuActive})
      return;
    };
    return (
        <div className="w-[230px] h-screen  shadow-lg hidden md:block pl-6">
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
        </div>
    );
}

export default Sidebar;
