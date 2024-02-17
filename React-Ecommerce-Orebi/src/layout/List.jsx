import React from "react";

const List = ({ children, className }) => {
    return (
        <>
            <ul >
                {children}
            </ul>
        </>
    );
};

export default List;
