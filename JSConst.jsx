import Codigo from "../components/Codigo";
import Separador from "../components/Separador";
import TextoComponent from "../components/TextComponent";
import Nota from "../components/Nota";
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
            <Codigo titulo="Correto">
                <code className="text-blue-500">const</code> PI = <code className="text-red-500">3.14159265359</code>;
            </Codigo>
            <Codigo titulo="Incorreto" bg={"red-200"}>
            <code className="text-blue-500">const</code> PI;<br />
            PI = <code className="text-red-500">3.14159265359</code>;
            </Codigo>
            <Nota titulo="Quando usar a const no JavaScript">
                <p><b>Sempre declare uma variável com <InlineCode content="const"/> quando você sabe que o valor da variável não deve ser alterado.</b></p>
                <p>Use <InlineCode content="const"/> quando você for declarar:</p>
                <ul className="pl-10 list-disc">
                    <li>Um novo Array.</li>
                    <li>Um novo Objeto.</li>
                    <li>Uma nova Função.</li>
                    <li>Um novo RegExp.</li>
                </ul>
            </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Objetos Constantes e Arrays">
                <p>A palavra-chave <InlineCode content="const"/> é um pouco confusa.</p>
                <p>Ela não define um valor constante. Ela define uma referência constante à um valor.</p>
                <p>Por conta disso você NÃO pode:</p>
                <ul className="pl-10 list-disc">
                    <li>Reatribuir um valor constante.</li>
                    <li>Reatribuir um array constante.</li>
                    <li>Reatribuir um objeto constante.</li>
                </ul>
                <p>Mas você PODE:</p>
                <ul className="pl-10 list-disc">
                    <li>Alterar os elementos de um array constante.</li>
                    <li>Alterar as propriedades de um objeto constante.</li>
                </ul>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Arrays Constantes"></TextoComponent>
        </div>
    );
}

export default JSConst;
