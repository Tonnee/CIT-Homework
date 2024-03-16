import React, { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Dropdown from "../molecules/Dropdown";
import List from "../layout/List";
import ItemList from "../layout/ItemList";
import { MdOutlineSort } from "react-icons/md";
import Link from "../layout/Link";

const Header = () => {
    let [show, setShow] = useState(false);
    let ref = useRef();

    useEffect(() => {
        let prevClickTarget = null;

        const clickHandler = (e) => {
            if (ref.current.contains(e.target)) {
                setShow(prevClickTarget !== e.target);
                prevClickTarget = e.target;
                console.log(prevClickTarget);
            } else {
                setShow(false);
                prevClickTarget = null;
            }
        };

        document.addEventListener("click", clickHandler);

        return () => {
            document.removeEventListener("click", clickHandler);
        };
    }, []);
    return (
        <>
            <header className="bg-grayF5 py-25px">
                <Container>
                    <Flex className="justify-between">
                        <div>
                            <Dropdown
                                title="Shop by Category"
                                icons={<MdOutlineSort />}
                                dropref={ref}
                                className="relative"
                            >
                                {show && (
                                    <List className="absolute z-10 w-[256px] bg-black divide-y divide-slate-900 top-10">
                                        <ItemList>
                                            <Link
                                                text="Accessories"
                                                className="text-white/[.7] text-sm py-4 px-5 cursor-pointer hover:pl-8 transition-all ease-in duration-300 hover:font-medium hover:text-white"
                                            ></Link>
                                        </ItemList>
                                        <ItemList
                                            text="Furniture"
                                            className="text-white/[.7] text-sm py-4 px-5 cursor-pointer hover:pl-8 transition-all ease-in duration-300 hover:font-medium hover:text-white"
                                        ></ItemList>
                                        <ItemList
                                            text="Electronics"
                                            className="text-white/[.7] text-sm py-4 px-5 cursor-pointer hover:pl-8 transition-all ease-in duration-300 hover:font-medium hover:text-white"
                                        ></ItemList>
                                        <ItemList
                                            text="Clothes"
                                            className="text-white/[.7] text-sm py-4 px-5 cursor-pointer hover:pl-8 transition-all ease-in duration-300 hover:font-medium hover:text-white"
                                        ></ItemList>
                                        <ItemList
                                            text="Bags"
                                            className="text-white/[.7] text-sm py-4 px-5 cursor-pointer hover:pl-8 transition-all ease-in duration-300 hover:font-medium hover:text-white"
                                        ></ItemList>
                                        <ItemList
                                            text="Home appliances"
                                            className="text-white/[.7] text-sm py-4 px-5 cursor-pointer hover:pl-8 transition-all ease-in duration-300 hover:font-medium hover:text-white"
                                        ></ItemList>
                                    </List>
                                )}
                            </Dropdown>
                        </div>
                        <div>2</div>
                        <div>3</div>
                    </Flex>
                </Container>
            </header>
        </>
    );
};

export default Header;
