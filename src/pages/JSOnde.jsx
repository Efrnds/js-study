import Codigo from "../components/Codigo";
import Nota from "../components/Nota";
import InlineCode from "../components/InlineCode";
import TextoComponent from "../components/TextComponent";
import Separador from "../components/Separador";
import { Link } from "react-router-dom";

function JSOnde() {
    return (
        <div className="w-full overflow-auto bg-white">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Onde Que o JavaScript Pode Ser Colocado
            </h2>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-introducao"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-saida"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="A tag <script>">
                <p>
                    Em HTML, o código JavaScript é inserido entre as tags{" "}
                    <InlineCode content="<script>" /> e{" "}
                    <InlineCode content="</script>" />.
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-red-700">script</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Meu primeiro JavaScript&quot;
                    </code>
                    ;
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-500">&gt;</code>
                </Codigo>
                <Nota>
                    Exemplos antigos de JavaScript podem usar um atributo type:
                    &lt;script type=&quot;text/javascript&quot;&gt;.
                    <br />O atributo type não é obrigatório. JavaScript é a
                    linguagem de script padrão em HTML.
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Funções e Eventos JavaScript">
                <p>
                    Uma <InlineCode content="function" /> JavaScript é um bloco
                    de código que pode ser executado quando &quot;chamada&quot;.
                </p>
                <p>
                    Por exemplo, uma função pode ser chamada quando ocorre um
                    <b> evento</b>, como quando o usuário clica em um botão.
                </p>
                <br />
                <Nota>
                    Você irá aprender muito mais sobre funções e eventos em
                    capítulos futuros.
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="JavaScript no <head> ou no <body>">
                <p>
                    Você pode colocar qualquer quantia de scripts em um
                    documento HTML.
                </p>
                <p>
                    Scripts podem ser colocados no{" "}
                    <InlineCode content="<body>" />, ou na seção{" "}
                    <InlineCode content="<head>" /> de uma página HTML, ou em
                    ambos.
                </p>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="JavaScript no <head>">
                <p>
                    Neste exemplo, uma <InlineCode content="function" /> é
                    colocada na seção <InlineCode content="<head>" /> de uma
                    página HTML.
                </p>
                <p>A função é invocada (chamada) quando um botão é clicado: </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">!DOCTYPE</code>
                    <code className="text-red-500"> html</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">html</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">head</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">script</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">function </code>
                    myFunction() {"{"}
                    <br />
                    &nbsp;&nbsp;document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Parágrafo alterado.&quot;
                    </code>
                    ;
                    <br />
                    {"}"}
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/head</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">body</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">h2</code>
                    <code className="text-blue-500">&gt;</code>
                    Demonstração de JavaScript no Head
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/h2</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">p</code>
                    <code className="text-red-500"> id</code>
                    <code className="text-blue-500">=&quot;demo&quot;</code>
                    <code className="text-blue-500">&gt;</code>
                    Um parágrafo
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/p</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">button</code>
                    <code className="text-red-500"> type</code>
                    <code className="text-blue-500">=&quot;button&quot;</code>
                    <code className="text-red-500"> onclick</code>
                    <code className="text-blue-500">
                        =&quot;myFunction()&quot;
                    </code>
                    <code className="text-blue-500">&gt;</code>
                    Try it
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/button</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/body</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/html</code>
                    <code className="text-blue-500">&gt;</code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="JavaScript no <body>">
                <p>
                    Neste exemplo, uma <InlineCode content="function" />{" "}
                    JavaScript é colocada dentro da seção{" "}
                    <InlineCode content="<body>" /> de uma página HTML.
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">!DOCTYPE</code>
                    <code className="text-red-500"> html</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">html</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">body</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">h2</code>
                    <code className="text-blue-500">&gt;</code>
                    Demonstração de JavaScript no Head
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/h2</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">p</code>
                    <code className="text-red-500"> id</code>
                    <code className="text-blue-500">=&quot;demo&quot;</code>
                    <code className="text-blue-500">&gt;</code>
                    Um parágrafo
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/p</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">button</code>
                    <code className="text-red-500"> type</code>
                    <code className="text-blue-500">=&quot;button&quot;</code>
                    <code className="text-red-500"> onclick</code>
                    <code className="text-blue-500">
                        =&quot;myFunction()&quot;
                    </code>
                    <code className="text-blue-500">&gt;</code>
                    Try it
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/button</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">script</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">function </code>
                    myFunction() {"{"}
                    <br />
                    &nbsp;&nbsp;document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Parágrafo alterado.&quot;
                    </code>
                    ;
                    <br />
                    {"}"}
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/body</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">/html</code>
                    <code className="text-blue-500">&gt;</code>
                </Codigo>
                <Nota>
                    Colocar scripts na parte inferior do elemento &lt;body&gt;
                    melhora a velocidade de exibição, porque a interpretação do
                    script retarda a exibição.
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="JavaScript Externo">
                <p>Scripts também podem ser colocados em arquivos externos:</p>
                <Codigo titulo="Arquivo externo: meuScript.js" bg="slate-300">
                    <code className="text-blue-500">function</code> myFunction(){" "}
                    {"{"}
                    <br />
                    &nbsp;&nbsp;document.getElementById(
                    <code className="text-red-700">&quot;demo&quot;</code>
                    ).innerHTML ={" "}
                    <code className="text-red-700">
                        &quot;Parágrafo alterado.&quot;
                    </code>
                    ;
                    <br />
                    {"}"}
                </Codigo>
                <p>
                    Scripts externos são práticos quando o mesmo código é usado
                    em várias páginas da web.
                </p>
                <p>
                    Arquivos JavaScript possuem a extensão de arquivo <b>.js</b>
                    .
                </p>
                <p>
                    Para usar um script externo, coloque o nome do arquivo de
                    script no atributo <InlineCode content="src" /> (source) de
                    uma tag <InlineCode content="<script>" />:
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">script</code>
                    <code className="text-red-500"> src</code>
                    <code className="text-blue-500">
                        =&quot;meuScript.js&quot;
                    </code>
                    <code className="text-blue-500">&gt;</code>
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-500">&gt;</code>
                </Codigo>
                <p>
                    Você pode colocar uma referência de script externo em
                    &lt;head&gt; ou &lt;body&gt; como desejar.
                </p>
                <p>
                    O script se comportará como se estivesse localizado
                    exatamente onde a tag &lt;script&gt; está localizada.{" "}
                </p>
                <Nota>
                    Scripts externos não contêm as tags{" "}
                    <InlineCode content="<script>" />.
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Vantagens do JavaScript Externo">
                <p>
                    Colocando scripts em arquivos externos possuem algumas
                    vantagens:{" "}
                </p>
                <ul className="mt-5 ml-10 list-disc">
                    <li>Ele separa HTML e código</li>
                    <li>Torna HTML e JavaScript mais fáceis de ler e manter</li>
                    <li>
                        Arquivos JavaScript armazenados em cache podem acelerar
                        o carregamento da página
                    </li>
                </ul>
                <p className="mt-5">
                    Para adicionar vários arquivos de script a uma página - use
                    várias tags de script:
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">script</code>
                    <code className="text-red-500"> src</code>
                    <code className="text-blue-500">
                        =&quot;meuScript1.js&quot;
                    </code>
                    <code className="text-blue-500">&gt;</code>
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-500">&gt;</code>
                    <br />
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">script</code>
                    <code className="text-red-500"> src</code>
                    <code className="text-blue-500">
                        =&quot;meuScript2.js&quot;
                    </code>
                    <code className="text-blue-500">&gt;</code>
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-500">&gt;</code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Referências Externas">
                <p>
                    Um script externo pode ser referenciado de 3 maneiras
                    diferentes:
                </p>
                <ul className="mt-5 ml-10 list-disc">
                    <li>Com uma URL completa (Um endereço da web completo)</li>
                    <li>Com um caminho de arquivo (como: /js/)</li>
                    <li>
                        sem nenhuma URL (o navegador assume que o arquivo está
                        no mesmo local que a página atual)
                    </li>
                </ul>
                <p>
                    Este exemplo usa uma <b>URL completa</b> para fazer o link
                    com o meu arquivo meuScript.js:
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">script</code>
                    <code className="text-red-500"> src</code>
                    <code className="text-blue-500">
                        =&quot;https://www.meusite.com/js/meuScript.js&quot;
                    </code>
                    <code className="text-blue-500">&gt;</code>
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-500">&gt;</code>
                </Codigo>
                <p>
                    Este exemplo usa um <b>caminho de arquivo</b> para fazer o
                    link com o arquivo meuScript.js:
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">script</code>
                    <code className="text-red-500"> src</code>
                    <code className="text-blue-500">
                        =&quot;/js/meuScript.js&quot;
                    </code>
                    <code className="text-blue-500">&gt;</code>
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-500">&gt;</code>
                </Codigo>
                <p>
                    Este exemplo não usa nenhuma URL para fazer o link com o
                    arquivo meuScript.js:
                </p>
                <Codigo titulo="Exemplo" bg="slate-300">
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-amber-700">script</code>
                    <code className="text-red-500"> src</code>
                    <code className="text-blue-500">
                        =&quot;meuScript.js&quot;
                    </code>
                    <code className="text-blue-500">&gt;</code>
                    <code className="text-blue-500">&lt;</code>
                    <code className="text-red-700">/script</code>
                    <code className="text-blue-500">&gt;</code>
                </Codigo>
                <Nota>
                    Você pode ler mais sobre caminhos de arquivos no capítulo{" "}
                    <u>Caminhos de arquivos HTML</u>
                </Nota>
            </TextoComponent>
            <TextoComponent>
                <div className="flex justify-between w-full">
                    <Link
                        to="/js-introducao"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-saida"
                        className="p-2 ml-auto text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
        </div>
    );
}

export default JSOnde;
