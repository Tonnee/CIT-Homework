const List = ({ clasName, children }) => {
    return (
        <>
            <ul className={clasName}>{children}</ul>
        </>
    );
};

export default List;
