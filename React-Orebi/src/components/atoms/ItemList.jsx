const ItemList = ({ itemText, className, children }) => {
    return (
        <>
            <li className={className}>
                {itemText} {children}
            </li>
        </>
    );
};

export default ItemList;
