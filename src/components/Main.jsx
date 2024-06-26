import PropTypes from "prop-types";

const Main = ({ children }) => {
    return (
        <main className="relative flex mt-20 ml-48 bg-white">
            {children}
        </main>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
