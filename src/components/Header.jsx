import { Link, Outlet } from "react-router-dom";
import Main from "./Main";
import Sidemenu from "./Sidemenu";

const Header = () => {
    return (
        <div className="fixed top-0 z-10 w-full">
            <div className="flex justify-between w-full p-5 bg-white border-b-2 border-slate-800">
                <h1 className="text-4xl font-bold text-slate-800">
                    W3 Escolas
                </h1>
                <nav className="flex gap-4 my-auto">
                    <Link
                        to="/"
                        className="px-2 py-1 transition rounded-sm shadow-sm bg-slate-200 hover:bg-gray-100"
                    >
                        Home
                    </Link>
                    <a
                        href="https://www.efrnds.me/"
                        className="px-2 py-1 transition rounded-sm shadow-sm bg-slate-200 hover:bg-gray-100"
                    >
                        Voltar
                    </a>
                </nav>
            </div>
            <Sidemenu />
        </div>
    );
};

const Layout = () => {
    return (
        <div className="relative">
            <Header />
            <Main className="mt-20 ml-48">
                <Outlet />
            </Main>
        </div>
    );
};

export default Layout;
