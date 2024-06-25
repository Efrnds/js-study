import PropTypes from "prop-types";

const InfoBox = ({ titulo, children }) => {
    return (
        <div className="p-5 bg-green-500 bg-opacity-20">
            <h3 className="text-xl font-semibold">{titulo}</h3>
            <p className="p-1">{children}</p>
        </div>
    );
};

InfoBox.propTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default InfoBox;
