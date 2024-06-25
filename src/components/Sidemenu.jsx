import { Link, useLocation } from "react-router-dom";

function Sidemenu() {
    const location = useLocation();

    const menuItems = [
        { path: "/js-introducao", label: "JS Introdução" },
        { path: "/js-onde", label: "JS Onde Que" },
        { path: "/js-saida", label: "JS Saída" },
        { path: "/js-declaracoes", label: "JS Declarações" },
        { path: "/js-sintaxe", label: "JS Sintaxe" },
        { path: "/js-comentarios", label: "JS Comentários" },
        { path: "/js-variaveis", label: "JS Variáveis" },
        { path: "/js-let", label: "JS Let" },
        { path: "/js-const", label: "JS Const" },
        { path: "/js-operadores", label: "JS Operadores" },
        { path: "/js-aritmetica", label: "JS Aritmética" },
    ];

    return (
        <div className="fixed h-screen font-sans bg-slate-300">
            <ul className="flex flex-col">
                <li>
                    <h4 className="p-5 pr-20 text-xl font-semibold">
                        JS Tutorial
                    </h4>
                </li>
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            className={`block px-2 py-1 ml-5 border-l-4 ${
                                location.pathname === item.path
                                    ? "bg-green-700 border-green-700 text-white"
                                    : "border-green-700 hover:bg-slate-400"
                            }`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidemenu;
