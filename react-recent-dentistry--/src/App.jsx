import Image from "./components/Image";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Button from "./components/Button";
import Logo from "./assets/logo.png";

import "./App.css";

function App() {
    return (
        <>
            <Image url={Logo} style="h-50px" altText="logo" />
            <Heading as="h2" text="Best care" />
            <Paragraph text="I am a paragraph" style="text-red-600" />
            <Button url="#" text="Call for Appoinment" style="text-blue-700" />
        </>
    );
}

export default App;
