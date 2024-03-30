import Container from "./atoms/Container";
import Flex from "./atoms/Flex";
import Image from "./atoms/Image";
import Logo from "../assets/logo.png";
import List from "./atoms/List";
import ListItem from "./atoms/ListItem";
import Link from "./atoms/Link";

const Navbar = () => {
    return (
        <>
            <nav>
                <Container>
                    <Flex>
                        <div className="w-1/3">
                            <Image imgSrc={Logo} />
                        </div>
                        <div className="w-2/3">
                            <List className="flex justify-end gap-10">
                                <ListItem>
                                    <Link linkref="#">Home</Link>
                                </ListItem>
                                <ListItem>
                                    <Link linkref="#">Shop</Link>
                                </ListItem>
                                <ListItem>
                                    <Link linkref="#">About</Link>
                                </ListItem>
                                <ListItem>
                                    <Link linkref="#">Contacts</Link>
                                </ListItem>
                                <ListItem>
                                    <Link linkref="#">Journal</Link>
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
