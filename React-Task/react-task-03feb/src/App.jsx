import Card from "./components/molecules/card/Card";
import "./App.css";

function App() {
    return (
        <>
            <div className="container">
                <div className="flex justify-between">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default App;
