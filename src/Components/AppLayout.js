import React from "react";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Sidebar from "./Sidebar";

function AppLayout() {
    return (
        <>
            <Head />
            <div className="flex pt-20 relative">
                <Sidebar />
                <div className="flex-1 md:absolute md:left-56">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AppLayout;
