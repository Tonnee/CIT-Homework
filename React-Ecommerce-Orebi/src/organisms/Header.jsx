import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";

const Header = () => {
    return (
        <>
            <header className="bg-grayF5 py-25px">
                <Container>
                    <Flex className="justify-between">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </Flex>
                </Container>
            </header>
        </>
    );
};

export default Header;