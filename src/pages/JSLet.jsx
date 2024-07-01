import Codigo from "../components/Codigo";
import InfoBox from "../components/InfoBox";
import InlineCode from "../components/InlineCode";
import TextoComponent from "../components/TextComponent";
import Separador from "../components/Separador";
import { Link } from "react-router-dom";

function JSLet() {
    return (
        <div className="w-full overflow-auto bg-white">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Let Javascript
            </h2>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-variaveis"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-const"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
                <InfoBox>
                    <p>
                        A palavra-chave <InlineCode content="let" /> foi
                        introduzida no ECMAScript 6 (ES6).
                    </p>
                    <p>
                        Variáveis declaradas com <InlineCode content="let" />{" "}
                        possuem <b>escopo de bloco</b>
                    </p>
                    <p>
                        Variáveis declaradas com <InlineCode content="let" />{" "}
                        devem ser <b>declaradas</b> antes do uso
                    </p>
                    <p>
                        Variáveis declaradas com <InlineCode content="let" />{" "}
                        não podem ser <b>redeclaradas</b> no mesmo escopo
                    </p>
                </InfoBox>
            </TextoComponent>
            <TextoComponent titulo="Escopo de Bloco">
                <p>
                    Antes do EcmaScript6 (2015), JavaScript não possuía{" "}
                    <b>Escopo em Bloco</b>.
                </p>
                <p>
                    JavaScript possuía <b>Escopo Global</b> e{" "}
                    <b>Escopo de Função</b>
                </p>
                <p>
                    EcmaScript6 introduziu as duas novas palavras-chave do
                    JavaScript: <InlineCode content="let" /> e{" "}
                    <InlineCode content="const" />.
                </p>
                <p>
                    Essas duas palavras-chave forneceram <b>Escopo em Bloco</b>{" "}
                    ao JavaScript:
                </p>
                <Codigo
                   
                    titulo="Exemplo"
                    texto="Variáveis declaradas dentro de um bloco { } não podem ser acessadas de fora do bloco:"
                >
                    &#123;
                    <br />
                    &nbsp;&nbsp;<code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">10</code>;
                    <br />
                    &#125;
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; x NÃO pode ser usado aqui
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Escopo Global">
                <p>
                    Variáveis declaradas com <InlineCode content="var" /> sempre
                    terão <b>Escopo Global</b>.
                </p>
                <p>
                    Variáveis declaradas com a palavra-chave{" "}
                    <InlineCode content="var" /> NÃO podem ter escopo em bloco.
                </p>
                <Codigo
                    titulo="Exemplo"
                    texto="Variáveis declaradas com var dentro de um bloco { } podem ser acessadas de fora do bloco:"
                   
                >
                    &#123;
                    <br />
                    &nbsp;&nbsp;<code className="text-blue-600">var</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <br />
                    &#125;
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; x PODE ser usado aqui
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Não pode ser redeclarada">
                <p>
                    Variáveis definidas com <InlineCode content="let" />{" "}
                    <b>não podem</b> ser redeclaradas.
                </p>
                <p>
                    Você não pode acidentalmente redeclarar uma variável
                    declarada com <InlineCode content="let" />.
                </p>
                <Codigo
                    texto="Com let você não pode fazer isso:"
                   
                >
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-700">&quot;John Doe&quot;</code>;
                    <br />
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">0</code>;
                </Codigo>
                <p>
                    Variáveis definidas com <InlineCode content="var" />{" "}
                    <b>podem</b> ser redeclaradas.
                </p>
                <Codigo texto="Com var você pode fazer isso:">
                    <code className="text-blue-600">var</code> x ={" "}
                    <code className="text-red-700">&quot;John Doe&quot;</code>;
                    <br />
                    <code className="text-blue-600">var</code> x ={" "}
                    <code className="text-red-500">0</code>;
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Redeclarando variáveis">
                <p>
                    Redeclarar uma variável usando a palavra-chave{" "}
                    <InlineCode content="var" /> pode impor problemas.
                </p>
                <p>
                    Redeclarar uma variável dentro de um bloco também irá
                    redeclarar a variável fora do bloco:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">var</code> x ={" "}
                    <code className="text-red-500">10</code>;
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Aqui, X é 10
                    </code>
                    <br />
                    <br />
                    &#123;
                    <br />
                    &nbsp;&nbsp;<code className="text-blue-600">var</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <br />
                    &nbsp;&nbsp;
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Aqui, X é 2
                    </code>
                    <br />
                    &#125;
                    <br />
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Aqui, X é 2
                    </code>
                </Codigo>
                <p>
                    Redeclarar uma variável usando a palavra-chave{" "}
                    <InlineCode content="let" /> pode resolver este problema.
                </p>
                <p>
                    Redeclarar uma variável dentro de um bloco não irá
                    redeclarar a variável fora do bloco:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">10</code>;
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Aqui, X é 10
                    </code>
                    <br />
                    <br />
                    &#123;
                    <br />
                    &nbsp;&nbsp;<code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <br />
                    &nbsp;&nbsp;
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Aqui, X é 2
                    </code>
                    <br />
                    &#125;
                    <br />
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Aqui, X é 10
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Diferença entre var, let e const">
                <table className="border border-slate-300">
                    <thead>
                        <tr className="border-b bg-slate-200 border-b-slate-300">
                            <td>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td>Escopo</td>
                            <td>Redeclarar</td>
                            <td>Reatribuir</td>
                            <td>Elevado</td>
                            <td>Vincula a this</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>var</td>
                            <td>Não</td>
                            <td>Sim</td>
                            <td>Sim</td>
                            <td>Sim</td>
                            <td>Sim</td>
                        </tr>
                        <tr className=" bg-slate-200 border-y border-y-slate-300">
                            <td>let</td>
                            <td>Sim</td>
                            <td>Não</td>
                            <td>Sim</td>
                            <td>Não</td>
                            <td>Não</td>
                        </tr>
                        <tr>
                            <td>const</td>
                            <td>Sim</td>
                            <td>Não</td>
                            <td>Não</td>
                            <td>Não</td>
                            <td>Não</td>
                        </tr>
                    </tbody>
                </table>
                <TextoComponent titulo="O que é bom?">
                    <p>
                        <InlineCode content="let" /> e{" "}
                        <InlineCode content="const" /> possuem{" "}
                        <b>escopo em bloco</b>.
                    </p>
                    <p>
                        <InlineCode content="let" /> e{" "}
                        <InlineCode content="const" /> não podem ser{" "}
                        <b>redeclaradas</b>.
                    </p>
                    <p>
                        <InlineCode content="let" /> e{" "}
                        <InlineCode content="const" /> devem ser{" "}
                        <b>declaradas</b> antes do uso.
                    </p>
                    <p>
                        <InlineCode content="let" /> e{" "}
                        <InlineCode content="const" /> <b>não vincula</b> a{" "}
                        <InlineCode content="this" />.
                    </p>
                    <p>
                        <InlineCode content="let" /> e{" "}
                        <InlineCode content="const" /> não são <b>Elevados</b>.
                    </p>
                </TextoComponent>
                <TextoComponent titulo="O que não é bom?">
                    <p>
                        <InlineCode content="var" /> não precisa ser declarada.
                    </p>
                    <p>
                        <InlineCode content="var" /> é Elevado.
                    </p>
                    <p>
                        <InlineCode content="var" /> vincula a{" "}
                        <InlineCode content="this" />.
                    </p>
                </TextoComponent>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Suporte de Navegadores">
                <p>
                    As palavras-chave <InlineCode content="let" /> e{" "}
                    <InlineCode content="const" /> não são suportadas no
                    Internet Explorer 11 ou inferior.
                </p>
                <p>
                    A tabela a seguir define a primeira versão de navegadores
                    com suporte completo:
                </p>
                <table className="text-center border border-slate-300">
                    <thead>
                        <tr>
                            <td>
                                <img
                                    className="w-12 h-12 p-1 mx-auto"
                                    src="/images/Chrome_logo.svg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    className="w-12 h-12 p-1 mx-auto"
                                    src="/images/Edge_logo.svg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    className="w-12 h-12 p-1 mx-auto"
                                    src="/images/Firefox_logo.svg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    className="w-12 h-12 p-1 mx-auto"
                                    src="/images/Safari_logo.svg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    className="w-12 h-12 p-1 mx-auto"
                                    src="/images/Opera_logo.svg"
                                    alt=""
                                />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-10 bg-slate-200 border-y border-y-slate-300">
                            <td>Chrome 49</td>
                            <td>Edge 12</td>
                            <td>Firefox 36</td>
                            <td>Safari 11</td>
                            <td>Opera 36</td>
                        </tr>
                        <tr className="h-10">
                            <td>Mar, 2016</td>
                            <td>Jul, 2015</td>
                            <td>Jan, 2015</td>
                            <td>Sep, 2017</td>
                            <td>Mar, 2016</td>
                        </tr>
                    </tbody>
                </table>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Redeclarando">
                <p>
                    Redeclarar uma variável em JavaScript com{" "}
                    <InlineCode content="var" /> é permitido em qualquer lugar
                    de um programa:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">var</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Agora x é 2
                    </code>
                    <br />
                    <br />
                    <code className="text-blue-600">var</code> x ={" "}
                    <code className="text-red-500">3</code>;
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Agora x é 3
                    </code>
                </Codigo>
                <p>
                    Com <InlineCode content="let" />, redeclarar uma variável no
                    mesmo bloco NÃO é permitido:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">var</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Permitido
                    </code>
                    <br />
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Não é permitido
                    </code>
                    <br />
                    <br />
                    &#123;
                    <br />
                    &nbsp;&nbsp;
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Permitido
                    </code>
                    <br />
                    &nbsp;&nbsp;
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">3</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Não é permitido
                    </code>
                    <br />
                    &#125;
                    <br />
                    <br />
                    &#123;
                    <br />
                    &nbsp;&nbsp;
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Permitido
                    </code>
                    <br />
                    &nbsp;&nbsp;
                    <code className="text-blue-600">var</code> x ={" "}
                    <code className="text-red-500">3</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Não é permitido
                    </code>
                    <br />
                    &#125;
                </Codigo>
                <p>
                    Redeclarar uma variável com <InlineCode content="let" />, em
                    outro bloco, É permitido:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Permitido
                    </code>
                    <br />
                    <br />
                    &#123;
                    <br />
                    &nbsp;&nbsp;
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">3</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Permitido
                    </code>
                    <br />
                    &#125;
                    <br />
                    <br />
                    &#123;
                    <br />
                    &nbsp;&nbsp;
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">4</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Permitido
                    </code>
                    <br />
                    &#125;
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Elevação Let">
                <p>
                    Variáveis definidas com <InlineCode content="var" /> são{" "}
                    <b>Elevadas</b> para o topo e podem ser inicializadas a
                    qualquer momento.
                </p>
                <p>
                    O que significa que: Você pode usar a variável antes de ser
                    declarada:
                </p>
                <Codigo titulo="Exemplo" texto="Isso é OK:">
                    carName ={" "}
                    <code className="text-red-700">&quot;Volvo&quot;</code>;
                    <br />
                    <code className="text-blue-600">var</code> carName;
                </Codigo>
                <p>
                    Se você quiser aprender mais sobre elevação, estude o
                    capítulo <u>Elevação JavaScript</u>.
                </p>
                <p>
                    Variáveis definidas com <InlineCode content="let" /> também
                    são elevadas ao topo do bloco, mas não inicializada.
                </p>
                <p>
                    O que significa que: Usar a variável{" "}
                    <InlineCode content="let" /> antes de ser declarada irá
                    resultar em um <InlineCode content="ReferenceError" />:
                </p>
                <Codigo bg="red-200" titulo="Exemplo">
                    carName ={" "}
                    <code className="text-red-700">&quot;Saab&quot;</code>;
                    <br />
                    <code className="text-blue-600">let</code> carName ={" "}
                    <code className="text-red-700">&quot;Volvo&quot;</code>;
                </Codigo>
            </TextoComponent>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-variaveis"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-const"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
        </div>
    );
}

export default JSLet;
