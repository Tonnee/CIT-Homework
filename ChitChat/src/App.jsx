import React from "react";
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
} from "react-router-dom";
import Registration from "./components/pages/Registration";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Message from "./components/pages/Message";
import Setting from "./components/pages/Setting";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route
                    path="/"
                    element={<Registration />}
                ></Route>
                <Route
                    path="/home"
                    element={<Home />}
                ></Route>
                <Route
                    path="/login"
                    element={<Login />}
                ></Route>
                <Route
                    path="/message"
                    element={<Message />}
                ></Route>
                <Route
                    path="/setting"
                    element={<Setting />}
                ></Route>
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default App;
