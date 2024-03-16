import React from "react";

const Dropdown = ({ className, children, title, icons, dropref }) => {
    return (
        <>
            <div className={className} ref={dropref} >
                <p className="flex items-center gap-x-2.5 cursor-pointer text-sm font-dm text-gray26">
                    {icons} {title}
                </p>
                {children}
            </div>
        </>
    );
};

export default Dropdown;
