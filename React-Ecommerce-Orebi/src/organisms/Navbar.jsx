import React from "react";
import { useState } from "react";
import Image from "../atoms/Image";
import Logo from "../assets/orebi-logo.png";
import Flex from "../layout/Flex";
import List from "../layout/List";
import ItemList from "../layout/ItemList";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
    let [show, setShow] = useState(true);

    return (
        <>
            <nav>
                <div className="bg-white py-8">
                    <div className="max-w-container mx-auto px-4 lg:px-0">
                        <Flex className="justify-end relative">
                            <div className="absolute left-0">
                                <Image imgSrc={Logo} imgAlt="Orebi Logo" />
                            </div>

                            <List className="hidden lg:flex gap-10">
                                <ItemList
                                    style="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200"
                                    text="Home"
                                    link="#"
                                />
                                <ItemList
                                    style="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200"
                                    text="Shop"
                                    link="#"
                                />
                                <ItemList
                                    style="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200"
                                    text="About"
                                    link="#"
                                />
                                <ItemList
                                    style="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200"
                                    text="Contacts"
                                    link="#"
                                />
                                <ItemList
                                    style="font-dm text-sm font-normal text-gray76 hover:text-gray26 hover:font-bold hover:transition-all hover:duration-200"
                                    text="Journal"
                                    link="#"
                                />
                            </List>

                            {/*Mobile Menu*/}
                            <IoIosMenu className="lg:hidden block text-3xl" />
                        </Flex>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
