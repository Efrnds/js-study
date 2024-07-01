import Codigo from "../components/Codigo";
import Nota from "../components/Nota";
import InlineCode from "../components/InlineCode";
import TextoComponent from "../components/TextComponent";
import Separador from "../components/Separador";
import { Link } from "react-router-dom";

function JSSaida() {
    return (
        <div className="w-full overflow-auto bg-white ">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Saída Javascript
            </h2>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-onde"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-declaracoes"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Possibilidades de Display do JavaScript">
                <p>
                    JavaScript pode &quot;mostrar&quot; dados de diversas
                    maneiras:
                </p>
                <ul className="mt-5 ml-10 list-disc">
                    <li>
                        Escrever em um elemento HTML, utilizando{" "}
                        <InlineCode content="innerHTML" />.
                    </li>
                    <li>
                        Escrevendo na saída HTML usando{" "}
                        <InlineCode content="document.write()" />.
                    </li>
                    <li>
                        Escrevendo em uma caixa de alerta, usando{" "}
                        <InlineCode content="window.alert()" />.
                    </li>
                    <li>
                        Escrevendo no console do navegador, usando
                        <InlineCode content="console.log()" />.
                    </li>
                </ul>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Usando innerHTML">
                <p>
                    Para acessar um elemento HTML, JavaScript pode usar o método{" "}
                    <InlineCode content="document.getElementById(id)" />.
                </p>
                <p>
                    O atributo <InlineCode content="id" /> define o elemento
                    HTML. A propriedade <InlineCode content="innerHTML" />{" "}
                    define o conteúdo HTML:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">!DOCTYPE </code>
                    <code className="text-red-500">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">h1</code>
                    <code className="text-blue-600">&gt;</code>
                    Minha Primeira Página Web
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/h1</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">p</code>
                    <code className="text-blue-600">&gt;</code>Meu Primeiro
                    Parágrafo
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/p</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">p</code>
                    <code className="text-red-500"> id</code>
                    <code className="text-blue-600">=&quot;demo&quot;</code>
                    <code className="text-blue-600">&gt;</code>
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/p</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">script</code>
                    <code className="text-blue-600">&gt;</code> <br />
                    document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).innerHTML =<code className="text-red-500"> 5</code> +{" "}
                    <code className="text-red-500">6</code>;
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/html</code>
                    <code className="text-blue-600">&gt;</code>
                </Codigo>
                <Nota>
                    Alterar a propriedade innerHTML de um elemento HTML é uma
                    maneira comum de mostrar dados em HTML.
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Usando document.write()">
                <p>
                    Para propósitos de testes, é conveniente usar{" "}
                    <InlineCode content="document.write()" />:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">!DOCTYPE </code>
                    <code className="text-red-500">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">h1</code>
                    <code className="text-blue-600">&gt;</code>
                    Minha Primeira Página Web
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/h1</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">p</code>
                    <code className="text-blue-600">&gt;</code>Meu Primeiro
                    Parágrafo
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/p</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">script</code>
                    <code className="text-blue-600">&gt;</code> <br />
                    document.write(
                    <code className="text-red-500">5</code> +{" "}
                    <code className="text-red-500">6</code>);
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/html</code>
                    <code className="text-blue-600">&gt;</code>
                </Codigo>
                <div className="p-5 bg-red-200">
                    Usar document.write() depois que o documento HTML foi
                    carregado, irá{" "}
                    <b>prescrever todo o conteúdo do documento!</b>
                </div>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">!DOCTYPE </code>
                    <code className="text-red-500">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">h1</code>
                    <code className="text-blue-600">&gt;</code>
                    Minha Primeira Página Web
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/h1</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">p</code>
                    <code className="text-blue-600">&gt;</code>Meu Primeiro
                    Parágrafo
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/p</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">button</code>{" "}
                    <code className="text-red-500">type</code>
                    <code className="text-blue-600">=&quot;button&quot;</code>
                    <code className="text-red-500"> onclick</code>
                    <code className="text-blue-600">
                        =&quot;document.write(5 + 6)&quot;
                    </code>
                    <code className="text-blue-600">&gt;</code>
                    Tente
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/button</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/html</code>
                    <code className="text-blue-600">&gt;</code>
                </Codigo>
                <Nota>
                    O método document.write() deve ser usado apenas para testes.
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Usando window.alert()">
                <p>Você pode usar uma caixa de alerta para mostrar dados:</p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">!DOCTYPE </code>
                    <code className="text-red-500">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">h1</code>
                    <code className="text-blue-600">&gt;</code>
                    Minha Primeira Página Web
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/h1</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">p</code>
                    <code className="text-blue-600">&gt;</code>Meu Primeiro
                    Parágrafo
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/p</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">script</code>
                    <code className="text-blue-600">&gt;</code> <br />
                    window.alert(
                    <code className="text-red-500">5</code> +{" "}
                    <code className="text-red-500">6</code>);
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/html</code>
                    <code className="text-blue-600">&gt;</code>
                </Codigo>
                <p>
                    Você pode pular a palavra-chave{" "}
                    <InlineCode content="window" />.
                </p>
                <p>
                    Em JavaScript, o objeto window é o objeto de escopo global.
                    Isso significa que variáveis, propriedades e métodos, por
                    padrão, pertencem ao objeto janela. Isso também significa
                    que especificar a palavra-chave{" "}
                    <InlineCode content="window" /> é opcional:
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">!DOCTYPE </code>
                    <code className="text-red-500">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">h1</code>
                    <code className="text-blue-600">&gt;</code>
                    Minha Primeira Página Web
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/h1</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">p</code>
                    <code className="text-blue-600">&gt;</code>Meu Primeiro
                    Parágrafo
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/p</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">script</code>
                    <code className="text-blue-600">&gt;</code> <br />
                    alert(
                    <code className="text-red-500">5</code> +{" "}
                    <code className="text-red-500">6</code>);
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/html</code>
                    <code className="text-blue-600">&gt;</code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Usando console.log()">
                <p>
                    Para fins de depuração, você pode chamar o método{" "}
                    <InlineCode content="console.log()" /> no navegador para
                    exibir dados.
                </p>
                <Nota>
                    Você irá aprender mais sobre depuração em um capítulo
                    posterior.
                </Nota>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">!DOCTYPE </code>
                    <code className="text-red-500">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">script</code>
                    <code className="text-blue-600">&gt;</code> <br />
                    console.log(
                    <code className="text-red-500">5</code> +{" "}
                    <code className="text-red-500">6</code>);
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/html</code>
                    <code className="text-blue-600">&gt;</code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="JavaScript Print">
                <p>JavaScript não possui nenhum método ou objeto print.</p>
                <p>
                    Você não pode acessar dispositivos de saída no JavaScript.
                </p>
                <p>
                    A única excessão é que você pode chamar o método{" "}
                    <InlineCode content="window.print()" /> no navegador para
                    imprimir o conteúdo da janela atual.
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">!DOCTYPE </code>
                    <code className="text-red-500">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">html</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">button</code>
                    <code className="text-red-500"> onclick</code>
                    <code className="text-blue-600">
                        =&quot;window.print()&quot;
                    </code>
                    <code className="text-blue-600">&gt;</code>
                    Imprimir esta página
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/button</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/body</code>
                    <code className="text-blue-600">&gt;</code>
                    <br />
                    <code className="text-blue-600">&lt;</code>
                    <code className="text-red-700">/html</code>
                    <code className="text-blue-600">&gt;</code>
                </Codigo>
            </TextoComponent>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-onde"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-declaracoes"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
        </div>
    );
}

export default JSSaida;
