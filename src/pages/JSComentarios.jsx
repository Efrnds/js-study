import TextoComponent from "../components/TextComponent";
import Codigo from "../components/Codigo";
import Nota from "../components/Nota";
import Separador from "../components/Separador";
import InlineCode from "../components/InlineCode";
import { Link } from "react-router-dom";

function JSComentarios() {
    return (
        <div className="w-full overflow-auto bg-white ">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Comentarios em JavaScript
            </h2>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-sintaxe"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-variaveis"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
            <Separador />
            <TextoComponent>
                <p>
                    Comentários JavaScript podem ser usados para explicar o
                    código JavaScript e torná-lo mais legível.
                </p>
                <p>
                    Comentários JavaScript também podem ser usados para impedir
                    a execução, ao testar código alternativo.
                </p>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Comentários de linha única">
                <p>
                    Comentários de linha única começam com{" "}
                    <InlineCode content="//" />.
                </p>
                <p>
                    Qualquer texto entre // e o final da linha será ignorado
                    pelo JavaScript (não será executado).
                </p>
                <p>
                    Este exemplo usa um comentário de linha única antes de cada
                    linha de código:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Alterar o cabeçalho:
                    </code>
                    <br />
                    document.getElementById(
                    <code className="text-red-700">&quot;myH&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Minha primeira página&quot;
                    </code>
                    ;
                    <br />
                    <code className="text-green-500">
                        &#x0002F;&#x0002F; Alterar o parágrafo:
                    </code>
                    <br />
                    document.getElementById(
                    <code className="text-red-700">&quot;myP&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Meu primeiro parágrafo&quot;
                    </code>
                    ;
                </Codigo>
                <p>
                    Este exemplo usa um comentário de uma linha no fim de cada
                    linha para explicar o código:
                </p>
                <Codigo>
                    <code className="text-blue-600">let </code>x ={" "}
                    <code className="text-red-500">5</code>;
                    <code className="text-green-500">
                        {" "}
                        &#x0002F;&#x0002F; Declara x, e atribui a ele o valor de
                        5
                    </code>
                    <br />
                    <code className="text-blue-600">let </code>y = x +
                    <code className="text-red-500"> 2</code>;
                    <code className="text-green-500">
                        {" "}
                        &#x0002F;&#x0002F; Declara y, e atribui a ele o valor de
                        x + 2
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Comentários multilinhas">
                <p>
                    Comentários de várias linhas começam com{" "}
                    <InlineCode content="/*" /> e terminam com
                    <InlineCode content="*/" />.
                </p>
                <p>
                    Qualquer texto entre <InlineCode content="/*" /> e{" "}
                    <InlineCode content="*/" /> será ignorado pelo JavaScript.
                </p>
                <p>
                    Este exemplo usa um comentário de múltiplas linhas (um bloco
                    de comentários) para explicar o código:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-green-500">
                        &#x0002F;*
                        <br />O código abaixo irá alterar <br /> o cabeçalho com
                        id = &quot;myH&quot; <br />e o paragrafo com id =
                        &quot;myP&quot;
                        <br />
                        na minha página da web: <br />
                        *&#x0002F;
                    </code>
                    <br />
                    <br />
                    document.getElementById(
                    <code className="text-red-700">&quot;myH&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Minha primeira página&quot;
                    </code>
                    ;
                    <br />
                    document.getElementById(
                    <code className="text-red-700">&quot;myP&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Meu primeiro parágrafo.&quot;
                    </code>
                    ;
                </Codigo>
                <Nota>
                    <p>É mais comum usar comentários de uma única linha.</p>
                    <p>
                        Os comentários em bloco são frequentemente usados para
                        documentação formal.
                    </p>
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Usando Comentários para Prevenir a Execução">
                <p>
                    Usar comentários para impedir a execução de código é
                    adequado para teste de código.
                </p>
                <p>
                    Adicionar <InlineCode content="//" /> na frente de uma linha
                    de código altera as linhas de código de uma linha executável
                    para um comentário.
                </p>
                <p>
                    Este exemplo usa // para impedir a execução de uma das
                    linhas de código:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-green-500">
                        &#x0002F;&#x0002F;document.getElementById(&quot;myH&quot;).innerHTML
                        = &quot;Minha primeira página&quot;;
                    </code>
                    <br />
                    document.getElementById(
                    <code className="text-red-700">&quot;myP&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Meu primeiro parágrafo&quot;
                    </code>
                    ;
                </Codigo>
                <p>
                    Este exemplo usa um comentário de bloco para prevenir a
                    execução de múltiplas linhas:
                </p>
                <Codigo>
                    <code className="text-green-500">
                        &#x0002F;* <br />{" "}
                        document.getElementById(&quot;myH&quot;).innerHTML =
                        &quot;My First Page&quot;; <br />{" "}
                        document.getElementById(&quot;myP&quot;).innerHTML =
                        &quot;My first paragraph.&quot;; <br /> *&#x0002F;
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-sintaxe"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-variaveis"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
        </div>
    );
}

export default JSComentarios;
