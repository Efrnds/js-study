import PropTypes from "prop-types";

function Codigo({ titulo, children, texto }) {
    return (
        <div className="flex flex-col gap-5 p-3 my-5 rounded-md shadow-md bg-slate-300">
            <h3 className="text-2xl ">{titulo}</h3>
            <p>{texto}</p>
            <div className="p-3 bg-white border-l-[6px] border-emerald-500">
                <code className="w-full">{children}</code>
            </div>
        </div>
    );
}

Codigo.propTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    texto: PropTypes.string.isRequired,
};

export default Codigo;
