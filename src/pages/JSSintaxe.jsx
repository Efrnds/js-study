import Infobox from "../components/InfoBox";
import TextoComponent from "../components/TextComponent";
import Codigo from "../components/Codigo";
import Nota from "../components/Nota";
import Separador from "../components/Separador";
import InlineCode from "../components/InlineCode";
import { Link } from "react-router-dom";

function JSSintaxe() {
    return (
        <div className="w-full overflow-auto bg-white ">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Sintaxe JavaScript
            </h2>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-declaracoes"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-comentarios"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
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
                <Codigo bg="slate-300">
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
                <Codigo bg="slate-300">
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
                <Codigo bg="slate-300">
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
                <Codigo bg="slate-300">
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
                <Codigo bg="slate-300">
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
            <TextoComponent titulo="Expressões JavaScript">
                <p>
                    Uma expressão é uma combinação de valores, variáveis, e
                    operadores, que calcula um valor.{" "}
                </p>
                <p>O cálculo é chamado de avaliação.</p>
                <p>Por exemplo, 5 * 10 resulta em 50:</p>
                <Codigo bg="slate-300">
                    <p>
                        <code className="text-red-500">5</code> *{" "}
                        <code className="text-red-500">10</code>
                    </p>
                </Codigo>
                <p>Expressões também podem conter o valor de variáveis:</p>
                <Codigo bg="slate-300">
                    <p>
                        x * <code className="text-red-500">10</code>
                    </p>
                </Codigo>
                <p>
                    Os valores podem ser de vários tipos, como números e
                    strings.
                </p>
                <p>
                    Por exemplo, &quot;John&quot; + &quot; &quot; +
                    &quot;Doe&quot;, resulta em &quot;John Doe&quot;:
                </p>
                <Codigo bg="slate-300">
                    <p>
                        <code className="text-red-700">&quot;John&quot;</code> +{" "}
                        <code className="text-red-700">&quot; &quot;</code> +{" "}
                        <code className="text-red-700">&quot;Doe&quot;</code>;
                    </p>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Palavras-chave do JavaScript">
                <p>
                    As <b>palavras-chave</b> do JavaScript são usadas para
                    identificar ações a serem executadas.
                </p>
                <p>
                    A palavra-chave <InlineCode content="let" /> diz ao
                    navegador para criar variáveis:
                </p>
                <Codigo bg="slate-300">
                    <p>
                        <code className="text-blue-700">let</code> x, y;
                    </p>
                    <p>
                        x = <code className="text-red-500">5</code> +{" "}
                        <code className="text-red-500">6</code>;
                    </p>
                    <p>
                        y = x + <code className="text-red-500">10</code>;
                    </p>
                </Codigo>
                <p>
                    A palavra-chave <InlineCode content="var" /> também diz ao
                    navegador para criar variáveis:
                </p>
                <Codigo bg="slate-300">
                    <p>
                        <code className="text-blue-700">var</code> x, y;
                    </p>
                    <p>
                        x = <code className="text-red-500">5</code> +{" "}
                        <code className="text-red-500">6</code>;
                    </p>
                    <p>
                        y = x + <code className="text-red-500">10</code>;
                    </p>
                </Codigo>
                <Nota>
                    <p>
                        Nestes exemplos, usar o <InlineCode content="var" /> ou
                        o <InlineCode content="let" /> irá apresentar o mesmo
                        resultado.
                    </p>
                    <p>
                        Você aprenderá mais sobre a diferença entre{" "}
                        <InlineCode content="var" /> e{" "}
                        <InlineCode content="let" /> posteriormente neste
                        tutorial .
                    </p>
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Comentários do JavaScript">
                <p>
                    Nem todas as declarações do JavaScript são
                    &quot;executadas&quot;.
                </p>
                <p>
                    Código após uma barra dupla <InlineCode content="//" /> ou
                    entre <InlineCode content="/*" />e{" "}
                    <InlineCode content="*/" /> é tratado como um{" "}
                    <b>comentário</b>.
                </p>
                <p>Comentários são ignorados, e não serão executados:</p>
                <Codigo bg="slate-300">
                    <code className="text-blue-600">let</code> x ={" "}
                    <code className="text-red-500">5</code>;{" "}
                    <code className="text-green-600">
                        &#x0002F;&#x0002F; Eu serei executado
                    </code>
                    <br />
                    <code className="text-green-600">
                        &#x0002F;&#x0002F; x = 6;&#8287;Eu NÃO serei executado
                    </code>
                </Codigo>
                <Nota>
                    <p>
                        Você irá aprender mais sobre comentários em um capítulo
                        posterior.
                    </p>
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Identificadores / Nomes do JavaScript">
                <p>Identificadores são nomes do JavaScript.</p>
                <p>
                    Identificadores são usados para nomear variáveis e
                    palavras-chave, e funções.
                </p>
                <p>
                    As regras para nomes legais são as mesmas na maioria das
                    linguagens de programação.
                </p>
                <p>Um nome no JavaScript deve começar com:</p>
                <ul className="pl-10 list-disc">
                    <li>Uma letra (A-Z ou a-z)</li>
                    <li>Um cifrão ($)</li>
                    <li>Ou um sublinhado (_)</li>
                </ul>
                <p>
                    Os caracteres subsequentes podem ser letras, dígitos,
                    sublinhados ou cifrões.
                </p>
                <Nota titulo="Nota">
                    <p>
                        Números não são permitidos como o primeiro caractere de
                        um nome.
                    </p>
                    <p>
                        Desta maneira, o JavaScript pode facilmente diferenciar
                        identificadores de números.
                    </p>
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="JavaScript diferencia maiúsculas de minúsculas">
                <p>
                    Todos os identificadores do JavaScript{" "}
                    <b>diferenciam maiúsculas de minúsculas</b>.
                </p>
                <p>
                    As variáveis <InlineCode content="lastName" /> e{" "}
                    <InlineCode content="lastname" />, são duas variáveis
                    diferentes:
                </p>
                <Codigo bg="slate-300">
                    <code className="text-blue-600">let </code> lastname,
                    lastName;
                    <br />
                    lastName ={" "}
                    <code className="text-red-700">&quot;Doe&quot;</code>;
                    <br />
                    lastname ={" "}
                    <code className="text-red-700">&quot;Peterson&quot;</code>;
                </Codigo>
                <p>
                    O JavaScript não interpreta <b>LET</b> ou <b>Let</b> como a
                    palavra-chave <b>let</b>.
                </p>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo='JavaScript e o "Caixa de Camelo" (ou Camel Case)'>
                <p>
                    Historicamente, programadores usaram diferentes maneiras de
                    juntar várias palavras em um nome de variável:
                </p>
                <p>
                    <b>Hífen:</b>
                </p>
                <p>primeiro-nome, ultimo-nome, master-card.</p>
                <Nota>
                    Hífens não são permitidos no JavaScript. Eles são reservados
                    para subtração.
                </Nota>
                <p>
                    <b>Sublinhado:</b>
                </p>
                <p>first_name, last_name, master_card.</p>
                <p>
                    <b>&quot;Caixa de Camelo&quot; superior (Pascal Case):</b>
                </p>
                <p>PrimeiroNome, UltimoNome, MasterCard.</p>
                <p>
                    <b>&quot;Caixa de Camelo&quot; inferior:</b>
                </p>
                <p>
                    Programadores em JavaScript tendem a usar o camel case que
                    inicia com uma letra minúscula:
                </p>
                <p>primeiroNome, ultimoNome, masterCard.</p>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Conjunto de caracteres JavaScript">
                <p>JavaScript usa o conjunto de caracteres Unicode.</p>
                <p>
                    Unicode cobre (quase) todos os caracteres, pontuações e
                    símbolos do mundo.
                </p>
                <p>
                    Para uma análise mais detalhada, estude nossa{" "}
                    <u>Referência Unicode Completa</u>.
                </p>
            </TextoComponent>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-declaracoes"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-comentarios"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
        </div>
    );
}

export default JSSintaxe;
