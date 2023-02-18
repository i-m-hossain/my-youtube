import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AppLayout from "./Components/AppLayout";
import SingleVideo from "./Components/SingleVideo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "watch",
                element: <SingleVideo />,
            },
        ],
    },
]);
