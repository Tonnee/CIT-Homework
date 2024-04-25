import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Registration from "./components/pages/Registration";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route
                    path="/"
                    element={<Registration />}
                ></Route>
                <Route
                    path="/login"
                    element={<Login />}
                ></Route>
                <Route
                    path="/home"
                    element={<Home />}
                ></Route>
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
