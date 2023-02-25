import React from "react";

import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Home from "./Components/Home";
import SearchResultVideos from "./Components/SearchResultVideos";
import SingleVideo from "./Components/SingleVideo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "watch",
                element: <SingleVideo />,
            },
            {
                path:"results",
                element: <SearchResultVideos/>
            }
        ],
    },
]);
