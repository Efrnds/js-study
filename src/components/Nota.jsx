import PropTypes from "prop-types";

function Nota({ titulo, children }) {
    return (
        <div className="p-5 bg-amber-100">
            <h2 className="text-3xl font-semibold text-slate-800">{titulo}</h2>
            <p className="p-1">{children}</p>
        </div>
    );
}

Nota.propTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Nota;
