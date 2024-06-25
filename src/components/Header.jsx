import { Link, Outlet } from "react-router-dom";
import Main from "./Main";
import Sidemenu from "./Sidemenu";

const Header = () => {
    return (
        <div className="fixed z-10 w-full ">
            <div className="flex justify-between w-full p-5 bg-slate-300 ">
                <h1 className="text-4xl font-bold text-slate-800">
                    Javascript Tutorial
                </h1>
                <nav className="flex gap-4 my-auto">
                    <Link
                        to="/"
                        className="px-2 py-1 transition bg-white rounded-sm shadow-sm hover:bg-gray-100"
                    >
                        Home
                    </Link>
                </nav>
            </div>
            <hr className="border-2 border-slate-400" />
            <Sidemenu />
        </div>
    );
};

const Layout = () => {
    return (
        <div className="relative">
            <Header />
            <Main>
                <Outlet />
            </Main>
        </div>
    );
};

export default Layout;
