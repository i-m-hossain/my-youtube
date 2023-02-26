import React from "react";
import {
    MdHistory,
    MdHomeFilled,
    MdOutlineOndemandVideo,
    MdOutlineWatchLater,
    MdSubscriptions,
    MdSwitchVideo,
    MdVideoLibrary,
} from "react-icons/md";
import { FaFreeCodeCamp, FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <>
            <ul className="py-2">
                <Link to="/">
                    <li className="cursor-pointer flex items-center space-x-4 hover:bg-gray-100 px-2 py-1 mr-2 rounded">
                        <MdHomeFilled size={20} /> <span>Home</span>
                    </li>
                </Link>
                <li className="cursor-pointer flex items-center space-x-4 hover:bg-gray-100 px-2 mr-2 py-1 rounded">
                    <MdSwitchVideo size={20} /> <span>Shorts</span>
                </li>
                <li className="cursor-pointer flex items-center space-x-4 hover:bg-gray-100 px-2 mr-2 py-1 rounded">
                    <MdSubscriptions size={20} /> <span>Subscriptions</span>
                </li>
            </ul>
            <hr />
            <ul className="py-2">
                <li className="cursor-pointer flex items-center space-x-4 hover:bg-gray-100 px-2 py-1 mr-2 rounded">
                    <MdVideoLibrary size={20} /> <span>Library</span>
                </li>

                <li className="cursor-pointer flex items-center space-x-4 hover:bg-gray-100 px-2 py-1 mr-2 rounded">
                    <MdHistory size={20} /> <span>Library</span>
                </li>
                <li className="cursor-pointer flex items-center space-x-4 hover:bg-gray-100 px-2 py-1 mr-2 rounded">
                    <MdOutlineOndemandVideo size={20} />{" "}
                    <span>Your videos</span>
                </li>
                <li className="cursor-pointer flex items-center space-x-4 hover:bg-gray-100 px-2 py-1 mr-2 rounded">
                    <MdOutlineWatchLater size={20} /> <span>Watch later</span>
                </li>
            </ul>
            <h2 className="py-2 font-bold ">Subscriptions</h2>
            <ul>
                <li className="cursor-pointer flex items-center space-x-4 hover:bg-gray-100 px-2 mr-2 py-1 rounded">
                    <div className="border p-1 rounded-full">
                        <FaFreeCodeCamp />
                    </div>
                    <span>Free code camp</span>
                </li>
                <li className="cursor-pointer flex items-center space-x-4 hover:bg-gray-100 px-2 mr-2 py-1 rounded">
                    <div className="border p-1 rounded-full">
                        <FaGithubAlt />
                    </div>
                    <span>Github</span>
                </li>
            </ul>
        </>
    );
}

export default Sidebar;
