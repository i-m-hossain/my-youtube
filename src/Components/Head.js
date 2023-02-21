import React from "react";
import { BsYoutube } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleActive } from "../store/slices/sidebarSlice";
import { Link } from "react-router-dom";
import SearchVideos from "./SearchVideos";
function Head() {
    const dispatch = useDispatch();
    return (
        <div className="grid grid-cols-12 p-4 shadow-lg items-center fixed bg-white w-full z-20">
            <div className="col-span-1 flex space-x-4 justify-center items-center">
                <RxHamburgerMenu
                    size={25}
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

            <SearchVideos />

            <div className="col-span-1 flex justify-center">
                <AiOutlineUser size={30} />
            </div>
        </div>
    );
}

export default Head;
