import React from "react";
import Image from "../atoms/Image";
import Logo from "../assets/orebi-logo.png";
import Flex from "../layout/Flex";
import List from "../layout/List";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="bg-white py-8">
                    <div className="max-w-container mx-auto">
                        <Flex className="justify-center relative">
                            <div className="absolute left-0">
                                <Image imgSrc={Logo} imgAlt="Orebi Logo" />
                            </div>

                            <List>
                                <li>
                                    <a
                                        href="#"
                                        className="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200"
                                    >
                                        Shop
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200"
                                    >
                                        Contacts
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200"
                                    >
                                        Journal
                                    </a>
                                </li>
                            </List>

                            <ul className="flex gap-10"></ul>
                        </Flex>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
