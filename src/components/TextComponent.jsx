import PropTypes from "prop-types";
const TextoComponent = ({ titulo, children }) => {
    return (
        <div className="flex flex-col p-5">
            <h2 className="text-3xl text-slate-800">{titulo}</h2>
            <div className="flex flex-col gap-5 mt-5">{children}</div>
        </div>
    );
};

TextoComponent.propTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default TextoComponent;
