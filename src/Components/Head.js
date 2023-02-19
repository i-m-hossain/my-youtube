import React from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleActive } from "../store/slices/sidebarSlice";
import { Link } from "react-router-dom";
function Head() {
    const dispatch = useDispatch();
    return (
        <div className="grid grid-cols-12 p-4 shadow-lg items-center">
            <div className="col-span-1 flex space-x-4 justify-center items-center">
                <GiHamburgerMenu
                    size={30}
                    onClick={() => dispatch(toggleActive())}
                    className="cursor-pointer"
                />
                <Link to="/">
                    <div className="flex items-center space-x-1">
                        <BsYoutube color="red" size={30} />
                        <span className="text-lg">Youtube</span>
                    </div>
                </Link>
            </div>
            <div className="col-span-10 flex justify-center ">
                <input
                    type="text"
                    className="border w-1/2 rounded-l-full p-2  border-gray-400 outline-none"
                />

                <div className="border rounded-r-full border-gray-400 px-4 pt-3 bg-gray-100 hover:bg-gray-200 ">
                    <BsSearch />
                </div>
            </div>
            <div className="col-span-1 flex justify-center">
                <AiOutlineUser size={30} />
            </div>
        </div>
    );
}

export default Head;
