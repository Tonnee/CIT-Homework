import Banner from "./components/molecules/banner/Banner";
import AboutMe from "./components/organisms/aboutme/AboutMe";
import Nav from "./components/organisms/nav/Nav";
import WhatIDo from "./components/organisms/whatido/WhatIDo";

function App() {
    return (
        <>
            <Nav />
            <Banner />
            <AboutMe />
            <WhatIDo />
        </>
    );
}

export default App;
