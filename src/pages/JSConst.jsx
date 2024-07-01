import Codigo from "../components/Codigo";
import Separador from "../components/Separador";
import TextoComponent from "../components/TextComponent";
import InlineCode from "../components/InlineCode";
import InfoBox from "../components/InfoBox";
import { Link } from "react-router-dom";

function JSConst() {
    return (
        <div className="w-full overflow-auto bg-white">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Let Javascript
            </h2>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-let"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-operadores"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
                <InfoBox>
                    <p>
                        A palavra-chave <InlineCode content="const" /> foi
                        introduzido no <u>ES6 (2015)</u>.
                    </p>
                    <p>
                        Variáveis definidas com <InlineCode content="const" />{" "}
                        não podem ser <b>redeclaradas</b>.
                    </p>
                    <p>
                        Variáveis definidas com <InlineCode content="const" />{" "}
                        não podem ser <b>reatribuídas</b>.
                    </p>
                    <p>
                        Variáveis definidas com <InlineCode content="const" />{" "}
                        tem <b>escopo em bloco</b>.
                    </p>
                </InfoBox>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Não pode ser Reatribuído">
                <p>
                    Uma variável definida com a palavra-chave{" "}
                    <InlineCode content="const" /> não pode ser reatribuída.
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">const</code> PI ={" "}
                    <code className="text-red-500">3.141592653589793</code>;
                    <br />
                    PI = <code className="text-red-500">3.14</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&nbsp; &#x0002F;&#x0002F; Isso irá retornar
                        um erro
                    </code>
                    <br />
                    PI = PI + <code className="text-red-500">10</code>;
                    <code className="text-green-500">
                        &nbsp;&#x0002F;&#x0002F; Isso também irá retornar um
                        erro
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Deve ser atribuído">
                <p>Variáveis <InlineCode content="const"/> do JavaScript devem ser atribuídas a um valor quando são declaradas:</p>
            </TextoComponent>
        </div>
    );
}

export default JSConst;
