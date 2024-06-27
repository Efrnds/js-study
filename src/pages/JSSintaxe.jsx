import Infobox from "../components/InfoBox";
import TextoComponent from "../components/TextComponent";
import Codigo from "../components/Codigo";
import Separador from "../components/Separador";
import InlineCode from "../components/InlineCode";

function JSSintaxe() {
    return (
        <div className="w-full overflow-auto bg-white ">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Sintaxe JavaScript
            </h2>
            <Infobox>
                <p className="pb-5">
                    A sintaxe do JavaScript é uma lista de regras, como
                    programas JavaScript são construídos:
                </p>
                <code className="grid w-full p-2 bg-white border border-slate-300">
                    <code className="text-green-700">
                        &#x0002F;&#x0002F; Como criar variáveis:
                    </code>{" "}
                    <br />
                    <p>
                        <code className="text-blue-700">var</code> x;
                    </p>
                    <p>
                        <code className="text-blue-700">let</code> y;
                    </p>
                    <br />
                    <code className="text-green-700">
                        &#x0002F;&#x0002F; Como criar variáveis:
                    </code>{" "}
                    <p>
                        x = <code className="text-red-500">5</code>;
                    </p>
                    <p>
                        y = <code className="text-red-500">6</code>;
                    </p>
                    <p>
                        <code className="text-blue-700">let</code> z = x + y;
                    </p>
                </code>
            </Infobox>
            <TextoComponent titulo="Valores JavaScript">
                <p>A sintaxe do JavaScript define dois tipos de valores:</p>
                <ul className="py-5 pl-10 list-disc">
                    <li>Valores fixos</li>
                    <li>Valores variáveis</li>
                </ul>
                <p>
                    Valores fixos são chamados de <b>Literais</b>.
                </p>
                <p>
                    Valores variáveis são chamados de <b>Variáveis</b>.
                </p>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Literais JavaScript">
                <p>
                    As duas regras de sintaxe mais importantes para valores
                    fixos são:
                </p>
                <li className="list-decimal">
                    <b>Números</b> são escritos com ou sem decimais
                </li>
                <Codigo>
                    <p>
                        <code className="text-red-500">10.50</code>
                    </p>
                    <br />
                    <p>
                        <code className="text-red-500">1001</code>
                    </p>
                </Codigo>
                <li className="list-decimal">
                    <b>Strings</b> são texto, escrito com aspas simples ou
                    duplas.
                </li>
                <Codigo>
                    <p>
                        <code className="text-red-700">
                            &quot;John Doe&quot;
                        </code>
                    </p>
                    <br />
                    <p>
                        <code className="text-red-700">
                            &apos;John Doe&apos;
                        </code>
                    </p>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Variáveis JavaScript">
                <p>
                    Em uma linguagem da programação, <b>variáveis</b> são usadas
                    para <b>armazenar</b> dados.
                </p>
                <p>
                    JavaScript usa as palavras-chave{" "}
                    <InlineCode content="var" />,<InlineCode content="let" /> e{" "}
                    <InlineCode content="const" /> para <b>declarar</b>{" "}
                    variáveis.
                </p>
                <p>
                    Um <b>sinal de igual</b> é usado para atribuir valores à
                    variáveis
                </p>
                <p>
                    Neste exemplo, x é definido como uma variável. Então, x é
                    atribuido (dado) o valor de 6:
                </p>
                <Codigo>
                    <p>
                        <code className="text-blue-700">let</code> x;
                    </p>
                    <p>
                        x = <code className="text-red-500">6</code>;
                    </p>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Operadores do JavaScript">
                <p>
                    JavaScript usa <b>operadores aritméticos</b> (
                    <InlineCode content="+" /> <InlineCode content="-" />{" "}
                    <InlineCode content="*" /> <InlineCode content="/" />) para{" "}
                    <b>calcular</b> valores.
                </p>
                <Codigo>
                    <p>
                        (<code className="text-red-500">5</code> +{" "}
                        <code className="text-red-500">6</code>) *{" "}
                        <code className="text-red-500">10</code>
                    </p>
                </Codigo>
                <p>
                    JavaScript usa um <b>operador de atribuição</b> ({" "}
                    <InlineCode content="=" /> ) para <b>atribuir</b> valores à
                    variáveis:
                </p>
                <Codigo>
                    <p>
                        <code className="text-blue-700">let</code> x, y;
                    </p>
                    <p>
                        x = <code className="text-red-500">5</code>;
                    </p>
                    <p>
                        y = <code className="text-red-500">6</code>;
                    </p>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent></TextoComponent>
        </div>
    );
}

export default JSSintaxe;
