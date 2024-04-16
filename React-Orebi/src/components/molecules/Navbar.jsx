import { useEffect, useState } from "react";
import Container from "../atoms/Container";
import Flex from "../atoms/Flex";
import Image from "../atoms/Image";
import Link from "../atoms/Link";
import logo from "../../assets/logo.png";
import List from "../atoms/List";
import ItemList from "../atoms/ItemList";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
    let [show, setShow] = useState(true);

    useEffect(() => {
        function currentWidth(e) {
            if (window.innerWidth < 1024) {
                setShow(false);
            } else {
                setShow(true);
            }
        }
        window.addEventListener("resize", currentWidth);
    }, []);

    return (
        <nav className="font-dm py-8 bg-white">
            <Container>
                <Flex className="justify-between items-center">
                    <Link linkRef="#">
                        <Image imgSrc={logo} className="h-4 w-auto" />
                    </Link>

                    <div
                        className="cursor-pointer lg:hidden"
                        onClick={() => setShow(!show)}
                    >
                        <HiBars3 className="text-3xl" />
                    </div>

                    {show && (
                        <List clasName="gap-10 flex">
                            <ItemList>
                                <Link
                                    linkRef="#"
                                    linkText="Home"
                                    className="text-sm text-ash76 hover:text-ash26 ease-in-out duration-150"
                                />
                            </ItemList>
                            <ItemList>
                                <Link
                                    linkRef="#"
                                    linkText="Shop"
                                    className="text-sm text-ash76 hover:text-ash26 ease-in-out duration-150"
                                />
                            </ItemList>
                            <ItemList>
                                <Link
                                    linkRef="#"
                                    linkText="About"
                                    className="text-sm text-ash76 hover:text-ash26 ease-in-out duration-150"
                                />
                            </ItemList>
                            <ItemList>
                                <Link
                                    linkRef="#"
                                    linkText="Contacts"
                                    className="text-sm text-ash76 hover:text-ash26 ease-in-out duration-150"
                                />
                            </ItemList>
                            <ItemList>
                                <Link
                                    linkRef="#"
                                    linkText="Journal"
                                    className="text-sm text-ash76 hover:text-ash26 ease-in-out duration-150"
                                />
                            </ItemList>
                        </List>
                    )}
                </Flex>
            </Container>
        </nav>
    );
};

export default Navbar;
