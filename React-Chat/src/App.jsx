import React from "react";
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
} from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Messages from "./components/pages/Messages";
import Notifications from "./components/pages/Notifications";
import Registration from "./components/pages/Registration";
import Settings from "./components/pages/Settings";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
        )
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
