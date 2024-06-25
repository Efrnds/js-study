import PropTypes from "prop-types";

function Codigo({ titulo, children }) {
    return (
        <div className="p-3 m-3 rounded-md bg-slate-300">
            <h3 className="text-2xl ">{titulo}</h3>
            <div className="p-3 my-3 bg-white border-l-[6px] border-emerald-500">
                {children}
            </div>
        </div>
    );
}

Codigo.propTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Codigo;
