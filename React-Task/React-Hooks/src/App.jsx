import { useState } from "react";
import "./App.css";

function App() {
    let [count, setCount] = useState(0);

    let handleClick = () => {
        count = count + 1;
        setCount(count);
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click</button>
        </>
    );
}

export default App;
