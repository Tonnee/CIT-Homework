import { useState } from "react";
import Button from "./components/buttons/Button";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Hello World!</h1>
            <Button text="Click me" />
            <br/>
            <Button text="Click me again" />
        </>
    );
}

export default App;
