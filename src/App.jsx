import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Header";
import Home from "./components/Home";
import Sidemenu from "./components/Sidemenu";
import JSIntroducao from "./pages/JSIntroducao";
import JSOnde from "./pages/JSOnde";
import JSSaida from "./pages/JSSaida";
import JSDeclaracoes from "./pages/JSDeclaracoes";
import JSSintaxe from "./pages/JSSintaxe";
import JSComentarios from "./pages/JSComentarios";
import JSVariaveis from "./pages/JSVariables";
import JSLet from "./pages/JSLet";
import JSConst from "./pages/JSConst";
import JSOperadores from "./pages/JSOperadores";
import JSAritmetica from "./pages/JSAritmetica";

function App() {
    return (
        <Router>
            <div className="flex">
                <Sidemenu />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="jstutorial" element={<JSVariaveis />} />
                            <Route
                                path="js-introducao"
                                element={<JSIntroducao />}
                            />
                            <Route path="js-onde" element={<JSOnde />} />
                            <Route path="js-saida" element={<JSSaida />} />
                            <Route
                                path="js-declaracoes"
                                element={<JSDeclaracoes />}
                            />
                            <Route path="js-sintaxe" element={<JSSintaxe />} />
                            <Route
                                path="js-comentarios"
                                element={<JSComentarios />}
                            />
                            <Route
                                path="js-variaveis"
                                element={<JSVariaveis />}
                            />
                            <Route path="js-let" element={<JSLet />} />
                            <Route path="js-const" element={<JSConst />} />
                            <Route
                                path="js-operadores"
                                element={<JSOperadores />}
                            />
                            <Route
                                path="js-aritmetica"
                                element={<JSAritmetica />}
                            />
                        </Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
