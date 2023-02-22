import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Sidebar from "./Sidebar";

function AppLayout() {
    const isMenuActive = useSelector((state) => state.sidebar.isMenuActive);
    return (
        <>
            <Head />
            <div className="flex pt-20 relative">
                {isMenuActive && (
                    <div className="w-[230px] pb-[600px] shadow-lg hidden md:block pl-6 fixed">
                        <Sidebar />
                    </div>
                )}
                <div className={`flex-1 ${isMenuActive ? "md:absolute md:left-56":""}`}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AppLayout;
