import Container from "./atoms/Container";
import Flex from "./atoms/Flex";
import Image from "./atoms/Image";
import Logo from "../assets/logo.png";
import List from "./atoms/List";
import ListItem from "./atoms/ListItem";
import Link from "./atoms/Link";
import { HiBars3 } from "react-icons/hi2";


const Navbar = () => {
    return (
        <>
            <nav className="py-8	">
                <Container>
                    <Flex>
                        <div className="w-1/3">
                            <Image imgSrc={Logo} />
                        </div>

                        <div className="w-2/3">
                        <div className="lg:hidden block">
                            <HiBars3 className="text-2xl"/>
                        </div>
                            <List className="flex justify-end gap-10 font-dm">
                                <ListItem>
                                    <Link
                                        linkref="#"
                                        className="font-normal text-sm text-gray76 hover:text-gray26 ease-in-out duration-300"
                                    >
                                        Home
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        linkref="#"
                                        className="font-normal text-sm text-gray76 hover:text-gray26 ease-in-out duration-300"
                                    >
                                        Shop
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        linkref="#"
                                        className="font-normal text-sm text-gray76 hover:text-gray26 ease-in-out duration-300"
                                    >
                                        About
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        linkref="#"
                                        className="font-normal text-sm text-gray76 hover:text-gray26 ease-in-out duration-300"
                                    >
                                        Contacts
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        linkref="#"
                                        className="font-normal text-sm text-gray76 hover:text-gray26 ease-in-out duration-300"
                                    >
                                        Journal
                                    </Link>
                                </ListItem>
                            </List>
                        </div>
                    </Flex>
                </Container>
            </nav>
        </>
    );
};

export default Navbar;
