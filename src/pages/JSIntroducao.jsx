import Codigo from "../components/Codigo";
import Nota from "../components/Nota";
import InfoBox from "../components/InfoBox";
import InlineCode from "../components/InlineCode";
import TextoComponent from "../components/TextComponent";
import Separador from "../components/Separador";
import { Link } from "react-router-dom";

function JSIntroducao() {
    function LigaLuz() {
        document.getElementById("myImage").src = "./images/lampadaligada.png";
    }
    function DesligaLuz() {
        document.getElementById("myImage").src =
            "./images/lampadadesligada.png";
    }
    return (
        <div className="w-full overflow-auto bg-white">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Introdução ao JavaScript
            </h2>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Home
                    </Link>
                    <Link
                        to="/js-onde"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
            <InfoBox>
                Essa página contém alguns exemplos do que o JavaScript pode
                fazer
            </InfoBox>
            <TextoComponent titulo="JavaScript pode alterar o conteúdo HTML">
                <p>
                    Um dos vários métodos do JavaScript é o{" "}
                    <InlineCode content="getElementById()" />.
                </p>
                <p>
                    O exemplo abaixo &quot;procura&quot; um elemento HTML (com
                    id=&quot;demo&quot;), e altera o conteúdo do elemento (HTML
                    interno) para &quot;Olá Javascript&quot;.
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Olá JavaScript&quot;
                    </code>
                    ;
                </Codigo>
                <Nota>
                    JavaScript aceita tanto aspas simples quanto aspas duplas:
                </Nota>
                <Codigo titulo="Exemplo" bg="slate-300">
                    document.getElementById(
                    <code className="text-red-700">&apos;demo&apos;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &apos;Olá JavaScript&apos;
                    </code>
                    ;
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="JavaScript pode mudar valores de atributos HTML">
                <p>
                    Neste exemplo, JavaScript muda o valor de{" "}
                    <InlineCode content="src" /> (atributo source) de uma tag{" "}
                    <InlineCode content="<img>" />:
                </p>
                <Codigo titulo="A lâmpada" bg="slate-300">
                    <div className="flex">
                        <button
                            onClick={LigaLuz}
                            className="p-1 my-auto transition border rounded bg-slate-200 h-fit hover:bg-slate-300 border-slate-400"
                        >
                            Ligar a luz
                        </button>
                        <img
                            id="myImage"
                            className="transition"
                            src="./images/lampadadesligada.png"
                            alt="whatsapp"
                        />
                        <button
                            onClick={DesligaLuz}
                            className="p-1 my-auto transition border rounded bg-slate-200 h-fit hover:bg-slate-300 border-slate-400"
                        >
                            Desligar a luz
                        </button>
                    </div>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="JavaScript pode mudar o estilo (CSS) do HTML">
                Alterar o estilo de um elemento HTML é uma variante de alterar
                um atributo HTML:
                <Codigo titulo="Exemplo" bg="slate-300">
                    document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).style.fontSize ={" "}
                    <code className="text-red-700">&quot;35px&quot;</code>;
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="JavaScript pode esconder elementos HTML">
                <p>
                    Esconder um elemento HTML é feito alterando o estilo{" "}
                    <InlineCode content="display" /> do elemento:
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).style.display ={" "}
                    <code className="text-red-700">&quot;none&quot;</code>;
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="JavaScript pode mostrar elementos HTML">
                <p>
                    Mostrar um elemento HTML é feito alterando o estilo{" "}
                    <InlineCode content="display" /> do elemento:
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).style.display ={" "}
                    <code className="text-red-700">&quot;block&quot;</code>;
                </Codigo>
            </TextoComponent>
            <Separador />
            <Nota titulo="Você sabia?">
                <p>
                    JavaScript e <u>Java</u> são linguagens completamente
                    diferentes, tanto em conceito quanto design.
                </p>
                <p>
                    JavaScript foi inventado por Brendan Eich em 1995 e
                    tornou-se um padrão ECMA em 1997.
                </p>
                <p>
                    ECMA-262 é o nome oficial do padrão. ECMAScript é o nome
                    oficial da linguagem.
                </p>
            </Nota>
            <TextoComponent>
                <Link
                    to="/js-onde"
                    className="p-2 ml-auto text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                >
                    Próximo
                </Link>
            </TextoComponent>
        </div>
    );
}

export default JSIntroducao;
