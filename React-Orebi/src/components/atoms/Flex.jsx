const Flex = ({ className, children }) => {
    const classes = `flex ${className}`;
    return <div className={classes}>{children}</div>;
};

export default Flex;
