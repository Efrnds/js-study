import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Header";
import JsTutorial from "./pages/JsTutorial";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="jstutorial" element={<JsTutorial />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
