import PropTypes from "prop-types";

const Main = ({ children }) => {
    return (
        <main className="relative flex bg-white">
            {children}
        </main>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
