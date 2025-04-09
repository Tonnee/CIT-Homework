import React from "react";
import Plus from "./components/Plus";
import Result from "./components/Result";
import Minus from "./components/Minus";

function App() {
    return (
        <>
            <div className="text-center w-full mt-20">
                <Plus />
                <Result />
                <Minus />
            </div>
        </>
    );
}

export default App;
