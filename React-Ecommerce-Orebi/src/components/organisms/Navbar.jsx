import React, { useEffect, useState } from "react";
import Image from "../layout/Image";
import Logo from "../../assets/orebi-logo.png";
import Flex from "../layout/Flex";
import List from "../layout/List";
import ItemList from "../layout/ItemList";
import Container from "../layout/Container";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
    let [show, setShow] = useState(true);

    useEffect(() => {
        function changeWidth() {
            if (window.innerWidth < 769) {
                setShow(false);
            } else {
                setShow(true);
            }
        }

        changeWidth();

        window.addEventListener("resize", changeWidth);
    }, []);

    return (
        <>
            <nav>
                <div className="bg-white md:py-8 py-4">
                    <Container>
                        <Flex className="justify-end items-center relative">
                            <div className="absolute left-0">
                                <Image imgSrc={Logo} imgAlt="Orebi Logo" />
                            </div>

                            {show && (
                                <List className="md:flex md:gap-10 md:static absolute left-2 top-10">
                                    <ItemList style="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200 my-2.5 md:my-0">
                                        <Link to="/">Home</Link>
                                    </ItemList>
                                    <ItemList style="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200 my-2.5 md:my-0">
                                        <Link to="/shop">Shop</Link>
                                    </ItemList>
                                    <ItemList style="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200 my-2.5 md:my-0">
                                        <Link to="/about">About</Link>
                                    </ItemList>
                                    <ItemList style="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200 my-2.5 md:my-0">
                                        <Link to="/contacts">Contacts</Link>
                                    </ItemList>
                                    <ItemList style="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200 my-2.5 md:my-0">
                                        <Link to="/journal">Journal</Link>
                                    </ItemList>
                                </List>
                            )}

                            {/*Mobile Menu*/}
                            <IoIosMenu
                                className="md:hidden block text-3xl text-black"
                                onClick={() => setShow(!show)}
                            />
                        </Flex>
                    </Container>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
