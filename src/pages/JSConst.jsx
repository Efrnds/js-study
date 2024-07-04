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
                <p>
                    Variáveis <InlineCode content="const" /> do JavaScript devem
                    ser atribuídas a um valor quando são declaradas:
                </p>
                <Codigo titulo="Correto">
                    <code className="text-blue-500">const</code> PI ={" "}
                    <code className="text-red-500">3.14159265359</code>;
                </Codigo>
                <Codigo titulo="Incorreto" bg={"red-200"}>
                    <code className="text-blue-500">const</code> PI;
                    <br />
                    PI = <code className="text-red-500">3.14159265359</code>;
                </Codigo>
                <Nota titulo="Quando usar a const no JavaScript">
                    <p>
                        <b>
                            Sempre declare uma variável com{" "}
                            <InlineCode content="const" /> quando você sabe que
                            o valor da variável não deve ser alterado.
                        </b>
                    </p>
                    <p>
                        Use <InlineCode content="const" /> quando você for
                        declarar:
                    </p>
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
                <p>
                    A palavra-chave <InlineCode content="const" /> é um pouco
                    confusa.
                </p>
                <p>
                    Ela não define um valor constante. Ela define uma referência
                    constante à um valor.
                </p>
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
            <TextoComponent titulo="Arrays Constantes">
                <p>Voce pode alterar os elementos de um array constante</p>
                <Codigo titulo="Exemplo">
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Você pode criar um array constante:
                    </code>
                    <br />
                    <code className="text-blue-600">const</code> cars = [
                    <code className="text-red-700">&quot;Saab&quot;</code>,
                    <code className="text-red-700">&quot;Volvo&quot;</code>,
                    <code className="text-red-700">&quot;BMW&quot;</code>];
                    <br />
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Você pode alterar um elemento de um
                        array constante:
                    </code>
                    <br />
                    cars[<code className="text-red-500">0</code>] ={" "}
                    <code className="text-red-700">&quot;Toyota&quot;</code>;
                    <br />
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Você pode adicionar um elemento a um
                        array constante:
                    </code>
                    <br />
                    cars.push(
                    <code className="text-red-700">&quot;Audi&quot;</code>);
                </Codigo>
                <p>Mas você NÃO pode reatribuir o array:</p>
                <Codigo bg="red-200" titulo="Exemplo">
                    <code className="text-blue-600">const</code> cars = [
                    <code className="text-red-700">&quot;Saab&quot;</code>,
                    <code className="text-red-700">&quot;Volvo&quot;</code>,
                    <code className="text-red-700">&quot;BMW&quot;</code>];
                    <br />
                    cars = [
                    <code className="text-red-700">&quot;Toyota&quot;</code>,
                    <code className="text-red-700">&quot;Volvo&quot;</code>,
                    <code className="text-red-700">&quot;Audi&quot;</code>];
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Isso irá retornar um erro
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Objetos Constantes">
                <p>Você pode alterar as propriedades de um objeto constante:</p>
                <Codigo titulo="Exemplo">
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Você pode criar um objeto constante:
                    </code>
                    <br />
                    <code className="text-blue-600">const</code> carro =
                    &#123;tipo:
                    <code className="text-red-700">&quot;Fiat&quot;</code>,
                    modelo:
                    <code className="text-red-700">&quot;500&quot;</code>, cor:
                    <code className="text-red-700">&quot;Branco&quot;</code>
                    &#125;;
                    <br />
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Você pode alterar uma propriedade:
                    </code>
                    <br />
                    carro.cor ={" "}
                    <code className="text-red-700">&quot;vermelho&quot;</code>;
                    <br />
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Você pode adicionar uma propriedade:
                    </code>
                    <br />
                    cars.dono =
                    <code className="text-red-700">&quot;Johnson&quot;</code>);
                </Codigo>
                <p>Mas você NÃO pode reatribuir o objeto:</p>
                <Codigo bg="red-200" titulo="Exemplo">
                    <code className="text-blue-600">const</code> carro =
                    &#123;tipo:
                    <code className="text-red-700">&quot;Fiat&quot;</code>,
                    modelo:
                    <code className="text-red-700">&quot;500&quot;</code>, cor:
                    <code className="text-red-700">&quot;Branco&quot;</code>
                    &#125;;
                    <br />
                    <br />
                    carro = &#123;tipo:
                    <code className="text-red-700">&quot;Volvo&quot;</code>,
                    modelo:
                    <code className="text-red-700">&quot;EX60&quot;</code>, cor:
                    <code className="text-red-700">&quot;Vermelho&quot;</code>
                    &#125;;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Isso irá retornar um erro
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Diferença entra var, let e const">
                <table className="border-2 bg-slate-200 border-slate-300">
                    <thead>
                        <tr className="h-10">
                            <td>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td>Escopo</td>
                            <td>Redeclarável</td>
                            <td>Reatribuível</td>
                            <td>é Elevada</td>
                            <td>
                                Conecta a <InlineCode content="this" />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-10 bg-white border-y-2 border-slate-300">
                            <td>var</td>
                            <td>Não</td>
                            <td>Sim</td>
                            <td>Sim</td>
                            <td>Sim</td>
                            <td>Sim</td>
                        </tr>
                        <tr className="h-10">
                            <td>let</td>
                            <td>Sim</td>
                            <td>Não</td>
                            <td>Sim</td>
                            <td>Não</td>
                            <td>Não</td>
                        </tr>
                        <tr className="h-10 bg-white border-y-2 border-slate-300">
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
                        <b>redeclarados</b>.
                    </p>
                    <p>
                        <InlineCode content="let" /> e{" "}
                        <InlineCode content="const" /> devem ser
                        <b>declaradas</b> antes de usar.
                    </p>
                    <p>
                        <InlineCode content="let" /> e{" "}
                        <InlineCode content="const" /> <b>não se ligam</b> a
                        this.
                    </p>{" "}
                    <p>
                        <InlineCode content="let" /> e{" "}
                        <InlineCode content="const" /> não são <b>elevadas</b>.
                    </p>
                </TextoComponent>
                <TextoComponent titulo="O que não é bom?">
                    <p>
                        <InlineCode content="var" /> não tem que ser declarada.
                    </p>
                    <p>
                        <InlineCode content="var" /> é elevada.
                    </p>
                    <p>
                        <InlineCode content="var" /> conecta a{" "}
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
            <TextoComponent titulo="Escopo em bloco">
                <p>
                    Declarar uma variável com <InlineCode content="const" /> é
                    similar a <InlineCode content="let" /> quando se refere à
                    <b>escopo em bloco</b>.
                </p>
                <p>
                    O x declarado no bloco, neste exemplo, não é o mesmo que o x
                    declarado fora do bloco:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-500">const</code> x ={" "}
                    <code className="text-red-500">10</code>;
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Aqui x é 10
                    </code>
                    <br />
                    <br />
                    &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;
                    <code className="text-blue-500">const</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <br />
                    &nbsp;&nbsp;&nbsp;
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Aqui x é 2
                    </code>
                    <br />
                    &#125;
                    <br />
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Aqui x é 10
                    </code>
                </Codigo>
                <p>
                    Você pode aprender mais sobre escopo em bloco no capítulo{" "}
                    <u>Escopo Do JavaScript</u>
                </p>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Redeclarando">
                <p>
                    Redeclarar uma variável <InlineCode content="var" /> do
                    JavaScript é permitida em qualquer lugar do programa:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-500">var</code> x ={" "}
                    <code className="text-red-500">2</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Permitido
                    </code>
                    <br />
                    <code className="text-blue-500">var</code> x ={" "}
                    <code className="text-red-500">3</code>;
                    <code className="text-green-500">
                        &nbsp;&nbsp;&#x0002F;&#x0002F; Permitido
                    </code>
                    <br />x = <code className="text-red-500">4</code>;
                </Codigo>
                <p>
                    Redeclarar uma variável <InlineCode content="var" /> ou{" "}
                    <InlineCode content="let" /> existente para{" "}
                    <InlineCode content="const" />, no mesmo escopo, não é
                    permitido:{" "}
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-500">var</code> x ={" "}
                    <code className="text-red-500">2</code>;{" "}
                    <code className="text-green-500">
                        &nbsp;&nbsp;&nbsp; &#x0002F;&#x0002F; Permitido
                    </code>
                    <br />
                    <code className="text-blue-500">const</code> x ={" "}
                    <code className="text-red-500">2</code>;{" "}
                    <code className="text-green-500">
                        &nbsp; &#x0002F;&#x0002F; Não é permitido
                    </code>
                    <br />
                    <br />
                    &#123;
                    <br />
                    <code className="text-blue-500">let</code> x ={" "}
                    <code className="text-red-500">2</code>;{" "}
                    <code className="text-green-500">
                        &nbsp;&nbsp;&nbsp; &#x0002F;&#x0002F; Permitido
                    </code>
                    <br />
                    <code className="text-blue-500">const</code> x ={" "}
                    <code className="text-red-500">2</code>;{" "}
                    <code className="text-green-500">
                        &nbsp; &#x0002F;&#x0002F; Não é permitido
                    </code>
                    <br />
                    &#125;
                    <br />
                    <br />
                    &#123;
                    <br />
                    <code className="text-blue-500">const</code> x ={" "}
                    <code className="text-red-500">2</code>;{" "}
                    <code className="text-green-500">
                        &nbsp; &#x0002F;&#x0002F; Permitido
                    </code>
                    <br />
                    <code className="text-blue-500">const</code> x ={" "}
                    <code className="text-red-500">2</code>;{" "}
                    <code className="text-green-500">
                        &nbsp; &#x0002F;&#x0002F; Não é permitido
                    </code>
                    <br />
                    &#125;
                </Codigo>
            </TextoComponent>
        </div>
    );
}

export default JSConst;
