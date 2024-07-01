import Codigo from "../components/Codigo";
import Nota from "../components/Nota";
import TextoComponent from "../components/TextComponent";
import Separador from "../components/Separador";
import { Link } from "react-router-dom";

function JSDeclaracoes() {
    return (
        <div className="w-full overflow-auto bg-white ">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Declarações do JavaScript
            </h2>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-saida"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-sintaxe"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
            <Separador />
            <TextoComponent>
                <Codigo titulo="Exemplo" bg="slate-300">
                    <code className="text-blue-600">let </code>
                    x, y, z;{" "}
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Declaração 1
                    </code>
                    <br />x =<code className="text-red-600"> 5</code>;{" "}
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Declaração 2
                    </code>
                    <br />y =<code className="text-red-600"> 6</code>;{" "}
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Declaração 3
                    </code>
                    <br />z = x + y;{" "}
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Declaração 4
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Programas JavaScript">
                <p>
                    Um <b>programa de computador</b> é uma lista de
                    &quot;instruções&quot; a serem &quot;executadas&quot; por um
                    computador.
                </p>
                <p>
                    Em uma linguagem da programação, essas instruções de
                    programação são chamadas de <b>declarações</b>.
                </p>
                <p>
                    Um <b>programa de JavaScript</b> é uma lista de{" "}
                    <b>declarações</b> da programação.
                </p>
                <Nota>
                    Em HTML, programas JavaScript são executados pelo navegador.
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Declarações do JavaScript">
                <p>Declarações do JavaScript são compostas de:</p>
                <p>
                    Valores, Operadores, Expressões, Palavras-chave e
                    Comentários.
                </p>
                <p>
                    Essa declaração diz ao navegador para escrever &quot;Olá
                    Dolly.&quot; dentro de um elemento HTML com
                    id=&quot;demo&quot;:
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">&quot;Olá Dolly.&quot;</code>
                    ;
                </Codigo>
                <p>
                    A maioria dos programas JavaScript possuem várias
                    declarações.
                </p>
                <p>
                    As declarações são executadas, uma a uma, na mesma ordem em
                    que são escritas.
                </p>
                <Nota>
                    Programas JavaScript (e declarações JavaScript) são
                    comumente chamadas de código JavaScript.
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Ponto e vírgula ;">
                <p>
                    Ponto e vírgula serve para separar declarações no
                    JavaScript.
                </p>
                <p>
                    Adicione um ponto e vírgula no fim de cada declaração
                    executável:
                </p>
                <Codigo titulo="Exemplos" bg="slate-300">
                    <code className="text-blue-600">let</code> a, b, c;{" "}
                    <code className="text-green-600">
                        &#x2F;&#x2F; Declare 3 variáveis
                    </code>
                    <br />a = <code className="text-red-500">5</code>;{" "}
                    <code className="text-green-600">
                        &#x2F;&#x2F; Atibui o valor de 5 para A
                    </code>
                    <br />b = <code className="text-red-500">6</code>;{" "}
                    <code className="text-green-600">
                        &#x2F;&#x2F; Atribui o valor de 6 para B
                    </code>
                    <br />c = a + b;{" "}
                    <code className="text-green-600">
                        &#x2F;&#x2F; Atribui a soma de A e B para C
                    </code>
                </Codigo>
                Quando separado por ponto e vírgula, varias declarações são
                permitidas em apenas uma linha:
                <Codigo bg="slate-300">
                    a = <code className="text-red-500">5</code>; b ={" "}
                    <code className="text-red-500">6</code>; c = a + b;
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Espaço em branco no JavaScript">
                <p>
                    O JavaScript ignora vários espaços em branco. Você pode
                    adicionar espaços em branco ao seu código para torná-lo mais
                    legível.
                </p>
                <p>As linhas à seguir são equivalentes:</p>
                <Codigo bg="slate-300">
                    <code className="text-blue-600">let</code> person ={" "}
                    <code className="text-red-700">&quot;Hege&quot;</code>;{" "}
                    <br />
                    <code className="text-blue-600">let</code> person=
                    <code className="text-red-700">&quot;Hege&quot;</code>;
                </Codigo>
                <p>
                    Uma boa prática é colocar espaços ao redor de operadores ( =
                    + - * / ):
                </p>
                <Codigo bg="slate-300">
                    <code className="text-blue-600">let</code> x = y + z;
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Altura de linha e quebra de linha no JavaScript">
                <p>
                    Para melhor leitura, programadores muitas vezes preferem
                    evitar linhas de código maiores do que 80 caracteres.
                </p>
                <p>
                    Se uma instrução JavaScript não couber em uma linha, o
                    melhor lugar para quebrá-la é após um operador:
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).innerHTML = <br />
                    <code className="text-red-700">&quot;Olá Dolly.&quot;</code>
                    ;
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Blocos de código JavaScript">
                <p>
                    Declarações JavaScript podem ser agrupadas em blocos de
                    código, entre chaves &#123;...&#125;.
                </p>
                <p>
                    O objetivo dos blocos de código é definir declarações a
                    serem executadas juntas.
                </p>
                <p>
                    Um lugar onde você encontrará declarações agrupadas em
                    blocos é nas funções JavaScript:
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    <code className="text-blue-600">function</code> myFunction()
                    &#123;
                    <br />
                    document.getElementById(
                    <code className="text-red-700">&quot;demo1&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">&quot;Olá Dolly!&quot;</code>
                    ;
                    <br />
                    document.getElementById(
                    <code className="text-red-700">&quot;demo2&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Como você está?&quot;
                    </code>
                    ;
                    <br />
                    &#125;
                </Codigo>
                <Nota>
                    <p>
                        Neste tutorial nós usamos 2 espaços em branco de
                        indentação para os blocos de código.
                    </p>
                    <p>
                        Você irá aprender mais sobre funções em um tutorial
                        posterior.
                    </p>
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Palavras-chave do JavaScript">
                <p>
                    As instruções JavaScript geralmente começam com uma
                    <b> palavra-chave</b> para identificar a ação JavaScript a
                    ser executada.
                </p>
                <p>
                    Nossa <u>referência de palavras reservadas</u> lista todas
                    as palavras-chave JavaScript.
                </p>
                <p>
                    Aqui está uma lista de algumas das palavras-chave que você
                    aprenderá neste tutorial:
                </p>
                <table className="my-5 border bg-slate-200 border-slate-300">
                    <thead>
                        <tr>
                            <th className="w-32">Palavra-chave</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td>
                                <code className="text-blue-600">break</code>
                            </td>
                            <td>Termina a execução de um loop</td>
                        </tr>
                        <tr>
                            <td>
                                <code className="text-blue-600">continue</code>
                            </td>
                            <td>
                                Continua a execução de um loop na próxima
                                iteração
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td>
                                <code className="text-blue-600">debugger</code>
                            </td>
                            <td>
                                Pausa a execução do JavaScript e chama um
                                depurador
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code className="text-blue-600">
                                    do ... while
                                </code>
                            </td>
                            <td>
                                Cria um loop que executa um bloco de código
                                enquanto uma condição especificada for
                                verdadeira
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td>
                                <code className="text-blue-600">for</code>
                            </td>
                            <td>
                                Cria um loop que consiste em três expressões
                                opcionais, dentro de parênteses e separadas por
                                ponto e vírgula, seguidas por uma declaração ou
                                uma sequência de declarações executadas em
                                sequência
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code className="text-blue-600">function</code>
                            </td>
                            <td>Declara uma função JavaScript</td>
                        </tr>
                        <tr className="bg-white">
                            <td>
                                <code className="text-blue-600">
                                    if ... else
                                </code>
                            </td>
                            <td>
                                Executa um bloco de código se uma condição
                                especificada for verdadeira, e outro bloco de
                                código se a condição for falsa
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code className="text-blue-600">return</code>
                            </td>
                            <td>
                                Termina a execução de uma função e especifica um
                                valor a ser retornado pela função
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td>
                                <code className="text-blue-600">switch</code>
                            </td>
                            <td>
                                Avalia uma expressão, combina o valor da
                                expressão com valores de caso e executa
                                declarações associadas a esse caso
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code className="text-blue-600">
                                    try ... catch
                                </code>
                            </td>
                            <td>
                                Implementa manipulação de exceção em declarações
                                JavaScript
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Nota>
                    As palavras-chave do JavaScript são palavras reservadas.
                    Palavras reservadas não podem ser usadas como nomes de
                    variáveis, funções, métodos ou objetos.
                </Nota>
            </TextoComponent>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-saida"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-sintaxe"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
        </div>
    );
}

export default JSDeclaracoes;
