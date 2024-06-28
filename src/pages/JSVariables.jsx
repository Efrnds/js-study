import Codigo from "../components/Codigo";
import Nota from "../components/Nota";
import InfoBox from "../components/InfoBox";
import InlineCode from "../components/InlineCode";
import TextoComponent from "../components/TextComponent";
import Separador from "../components/Separador";
import { Link } from "react-router-dom";

function JSVariables() {
    return (
        <div className="w-full overflow-auto bg-white">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Variáveis Javascript
            </h2>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-comentarios"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-let"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
            <InfoBox titulo="Variáveis são Containers para Armazenar Dados">
                <p>Variáveis JavaScript podem ser declaradas de 4 maneiras:</p>
                <ul className="list-disc ml-7">
                    <li>Automaticamente</li>
                    <li>
                        Usando <InlineCode content="var" />
                    </li>
                    <li>
                        Usando <InlineCode content="let" />
                    </li>
                    <li>
                        Usando <InlineCode content="const" />
                    </li>
                </ul>
            </InfoBox>
            <TextoComponent>
                <p>
                    Neste primeiro exemplo, <InlineCode content="x" />,{" "}
                    <InlineCode content="y" />, e <InlineCode content="z" /> são
                    variáveis não declaradas.
                </p>
                <p>
                    Elas são declaradas automaticamente ao serem usadas pela
                    primeira vez:
                </p>
                <Codigo titulo="Exemplo">
                    x = <code className="text-red-500"> 5</code>;
                    <br />y =<code className="text-red-500"> 6</code>;
                    <br />
                    <code>z = x + y;</code>
                </Codigo>
                <Nota titulo="Nota">
                    É considerado uma boa prática de programação de sempre
                    declarar suas variáveis antes de usá-las.
                </Nota>
                <p>Pelos exemplos você pode imaginar que:</p>
                <ul className="pl-8 list-disc">
                    <li>x armazena o valor de 5</li>
                    <li>y armazena o valor de 6</li>
                    <li>z armazena o valor de 11</li>
                </ul>
                <Codigo titulo="Exemplo usando var">
                    <code className="text-blue-600">var </code>x ={" "}
                    <code className="text-red-500">5</code>;
                    <br />
                    <code className="text-blue-600">var </code>y ={" "}
                    <code className="text-red-500">6</code>;
                    <br />
                    <code className="text-blue-600">var </code>z = x + y;
                </Codigo>
                <Nota titulo="Nota">
                    <p>
                        A palavra-chave
                        <InlineCode content="var" />
                        foi usada em todo o JavaScript de 1995 até 2015.
                    </p>
                    <p>
                        As palavras-chave
                        <InlineCode content="let" />
                        e
                        <InlineCode content="const" />
                        foram adicionadas ao JavaScript em 2015.
                    </p>
                    <p>
                        A palavra-chave
                        <InlineCode content="var" />
                        deve ser usada apenas em códigos escritos para
                        navegadores antigos.
                    </p>
                </Nota>
                <Codigo titulo="Exemplo usando let">
                    <code className="text-blue-600">let </code>x ={" "}
                    <code className="text-red-500">5</code>;
                    <br />
                    <code className="text-blue-600">let </code>y ={" "}
                    <code className="text-red-500">6</code>;
                    <br />
                    <code className="text-blue-600">let </code>z = x + y;
                </Codigo>
                <Codigo titulo="Exemplo usando const">
                    <code className="text-blue-600">const </code>x ={" "}
                    <code className="text-red-500">5</code>;
                    <br />
                    <code className="text-blue-600">const </code>y ={" "}
                    <code className="text-red-500">6</code>;
                    <br />
                    <code className="text-blue-600">const </code>z = x + y;
                </Codigo>
                <Codigo titulo="Exemplo misto">
                    <code className="text-blue-600">const </code> preco1 ={" "}
                    <code className="text-red-500">5</code>;
                    <br />
                    <code className="text-blue-600">const </code> preco2 ={" "}
                    <code className="text-red-500">6</code>;
                    <br />
                    <code className="text-blue-600">let </code> total = preco1 +
                    preco2;
                </Codigo>
                <p>
                    As duas variáveis
                    <InlineCode content="price1" />
                    e
                    <InlineCode content="price2" />
                    são declaradas com a palavra-chave
                    <InlineCode content="const" />.
                </p>
                <p>Estes valores são constantes e não podem ser alterados.</p>
                <p>
                    A variável <InlineCode content="total" />
                    foi declarada com a palavra-chave{" "}
                    <InlineCode content="let" />.
                </p>
                <p>
                    A variável <InlineCode content="total" />
                    pode ter seu valor alterado.
                </p>
                <Nota titulo="Quando devo usar var, let ou const?">
                    <ol className="flex flex-col gap-5 px-5 pt-5 list-decimal">
                        <li>
                            <p>Sempre declare as variáveis.</p>
                        </li>
                        <li>
                            <p>
                                Sempre use
                                <InlineCode content="const" />
                                se o valor da variável não deve ser alterado.
                            </p>
                        </li>
                        <li>
                            <p>
                                Sempre use
                                <InlineCode content="const" />
                                se o tipo da variável não deve ser alterado.
                                (Arrays e objetos)
                            </p>
                        </li>
                        <li>
                            <p>
                                Apenas use
                                <InlineCode content="let" />
                                se você não pode usar{" "}
                                <InlineCode content="const" />.
                            </p>
                        </li>
                        <li>
                            <p>
                                Apenas use
                                <InlineCode content="var" />
                                se você <b>DEVE</b> suportar navegadores
                                antigos.
                            </p>
                        </li>
                    </ol>
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Assim como na Álgebra">
                <p>Assim como na álgebra, as variáveis contêm valores:</p>
                <Codigo>
                    <code className="text-blue-600">let </code>x ={" "}
                    <code className="text-red-500">5</code>;
                    <br />
                    <code className="text-blue-600">let </code>y ={" "}
                    <code className="text-red-500">6</code>;
                </Codigo>
                <p>
                    Assim como na álgebra, variáveis são usadas em expressões:
                </p>
                <Codigo>
                    <code className="text-blue-600">let </code>z = x + y;
                </Codigo>
                <p className="p-5">
                    A partir do exemplo acima, você pode adivinhar que o total é
                    calculado como 11.
                </p>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Identificadores JavaScript">
                <p>
                    Todas as <b>variáveis</b> em JavaScript devem ser{" "}
                    <b>identificadas</b> por <b>nomes únicos</b>.
                </p>
                <p>
                    Esses nomes únicos são chamados de <b>identificadores</b>.
                </p>
                <p>
                    Identificadores podem ser nomes curtos (assim como X e Y) ou
                    nomes mais descritivos (idade, soma, volumeTotal )
                </p>
                <p>
                    As regras gerais para a construção de nomes para variáveis
                    (identificadores únicos) são:
                </p>
                <ul className="pl-8 list-disc">
                    <li>
                        Os nomes podem conter letras, dígitos, sublinhados e
                        cifrões.
                    </li>
                    <li>Os nomes devem começar com uma letra.</li>
                    <li>
                        Os nomes também podem começar com $ e _ (mas não
                        usaremos isso neste tutorial).
                    </li>
                    <li>
                        Os nomes diferenciam maiúsculas de minúsculas (y e Y são
                        variáveis diferentes).
                    </li>
                    <li>
                        Palavras reservadas (como palavras-chave JavaScript) não
                        podem ser usadas como nomes.
                    </li>
                </ul>
                <Nota titulo="Nota">
                    <p>
                        Os identificadores JavaScript diferenciam maiúsculas de
                        minúsculas.
                    </p>
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="O Operador de Atribuição">
                <p>
                    Em JavaScript, o sinal de igual (<InlineCode content="=" />)
                    é um operador de “atribuição”, não um operador “igual a”.
                </p>
                <p>
                    Isso é diferente da álgebra. O seguinte não faz sentido em
                    álgebra:
                </p>
                <Codigo>
                    <code>x = x + </code>
                    <code className="text-red-500">5</code>;
                </Codigo>
                <p className="p-5">
                    Em JavaScript, porém, faz todo o sentido: atribui o valor de
                    x + 5 a x.
                </p>
                <p className="px-5 pb-5">
                    (Ele calcula o valor de x + 5 e coloca o resultado em x. O
                    valor de x é incrementado em 5.)
                </p>
                <Nota titulo="Nota">
                    <p>
                        O operador &quot;igual a&quot; é escrito com dessa
                        maneira <InlineCode content="==" /> em JavaScript
                    </p>
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Tipos de dados JavaScript">
                <p>
                    Variáveis JavaScript podem conter números como 100 e valores
                    de texto como &quot;John Doe&quot;.
                </p>
                <p>
                    Na programação, os valores de texto são chamados de strings
                    de texto.
                </p>
                <p>
                    JavaScript pode lidar com muitos tipos de dados, mas por
                    enquanto pense apenas em números e strings.
                </p>
                <p>
                    Strings são escritas entre aspas duplas ou simples. Os
                    números são escritos sem aspas.
                </p>
                <p>
                    Se você colocar um número entre aspas, ele será tratado como
                    uma sequência de texto.
                </p>
                <Codigo titulo="Exemplo">
                    <code className="text-blue-600">const</code> pi ={" "}
                    <code className="text-red-500">3.14</code>;
                    <br />
                    <code className="text-blue-600">let</code> pessoa ={" "}
                    <code className="text-red-700">&quot;John Doe&quot; ;</code>
                    <br />
                    <code className="text-blue-600">let</code> resposta ={" "}
                    <code className="text-red-700">
                        &apos;Sim Eu sou!&apos;;
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Declarando uma Variável em JavaScript">
                <p>
                    Criar uma variável em JavaScript é chamado de “declarar” uma
                    variável.
                </p>
                <p>
                    Você declara uma variável JavaScript com a palavra-chave{" "}
                    <InlineCode content="var" />
                    ou <InlineCode content="let" />:
                </p>
                <Codigo>
                    <code className="text-blue-600">var</code> carName;
                    <br />
                    <p>ou:</p>
                    <code className="text-blue-600">let</code> carName;
                </Codigo>
                <p className="p-5">
                    Após a declaração, a variável não tem valor (tecnicamente
                    está <InlineCode content="undefined" />
                    ).
                </p>
                <p className="p-5">
                    Para <b>atribuir</b> um valor à variável, use o sinal de
                    igual:
                </p>
                <Codigo>
                    carName ={" "}
                    <code className="text-red-700">&quot;Volvo&quot;</code>;
                </Codigo>
                <p className="p-5">
                    Você tambem pode atribuir um valor para a variavel quando
                    você declara ela:
                </p>
                <Codigo>
                    <code className="text-blue-600">let </code>carName =
                    <code className="text-red-700">&quot;Volvo&quot;</code>;
                </Codigo>
                <p className="p-5">
                    No exemplo abaixo, nós criamos uma variavel chamada{" "}
                    <InlineCode content="carName" /> e atribuimos o valor
                    &quot;Volvo&quot; à ela.
                </p>
                <p className="p-5">
                    Em seguida, &quot;emitimos&quot; o valor dentro de um
                    parágrafo HTML com id=&quot;demo&quot;:
                </p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-600">&lt;</code>
                        <code className="text-red-700">p</code>{" "}
                        <code className="text-red-500">id</code>
                        <code className="text-blue-700">=&quot;demo&quot;</code>
                        <code className="text-blue-600">&gt;</code>
                        <code className="text-blue-600">&lt;</code>
                        <code className="text-red-700">/p</code>
                        <code className="text-blue-600">&gt;</code>
                        <br />
                        <br />
                        <code className="text-blue-600">&lt;</code>
                        <code className="text-red-700">script</code>
                        <code className="text-blue-600">&gt;</code>
                        <br />
                        <code className="text-blue-600">let</code> carName ={" "}
                        <code className="text-red-700">&quot;Volvo&quot;</code>;
                        <br />
                        document.getElementById(
                        <code className="text-red-700">&quot;demo&quot;</code>
                        ).innerHTML = carName;
                        <br />
                        <code className="text-blue-600">&lt;</code>
                        <code className="text-red-700">/script</code>
                        <code className="text-blue-600">&gt;</code>
                    </code>
                </Codigo>
                <Nota titulo="Nota">
                    <p>
                        É uma boa prática declarar todas as variáveis no início
                        de um bloco de código.
                    </p>
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Uma afirmação, muitas variáveis">
                <p>
                    Você pode declarar várias variáveis em uma única declaração.
                </p>
                <p>
                    Inicie a declaração com
                    <InlineCode content="let" />e separe as variáveis com uma
                    <b> vírgula</b>:
                </p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-500">let</code> person ={" "}
                        <code className="text-red-700">
                            &quot;John Doe&quot;
                        </code>
                        , carName ={" "}
                        <code className="text-red-700">&quot;Volvo&quot;</code>,
                        price = 200;
                    </code>
                </Codigo>
                <p className="p-5">
                    Uma declaração pode abranger várias linhas:{" "}
                </p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-500">let</code> person ={" "}
                        <code className="text-red-700">
                            &quot;John Doe&quot;
                        </code>
                        ,
                        <br />
                        carName ={" "}
                        <code className="text-red-700">&quot;Volvo&quot;</code>,
                        <br />
                        price = <code className="text-red-500">200</code>;
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Valor = Undefined">
                <p>
                    Em programas de computador, as variáveis são frequentemente
                    declaradas sem valor. O valor pode ser algo que precisa ser
                    calculado ou algo que será fornecido posteriormente, como a
                    entrada do usuário.
                </p>
                <p>
                    Uma variável declarada sem valor terá o valor{" "}
                    <InlineCode content="undefined" />.
                </p>
                <p>
                    A variável carName terá o valor{" "}
                    <InlineCode content="undefined" /> após a execução desta
                    instrução:
                </p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-500">let</code> carName;
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Redeclarando Variáveis JavaScript">
                <p>
                    Se você declarar novamente uma variável JavaScript declarada
                    com <InlineCode content="var" />, ela não perderá seu valor.
                </p>
                <p>
                    A variável <InlineCode content="carName" /> ainda terá o
                    valor &quot;Volvo&quot; após a execução destas instruções:
                </p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-500">var</code> carName ={" "}
                        <code className="text-red-700">&quot;Volvo&quot;;</code>
                        <br />
                        <code className="text-blue-500">var</code> carName;
                    </code>
                </Codigo>
                <Nota titulo="Nota">
                    <p>
                        Você não pode redeclarar variáveis JavaScript declaradas
                        com <InlineCode content="let" />
                        ou
                        <InlineCode content="const" />.
                    </p>
                    <p>Isso não irá funcionar: </p>
                    <code>
                        <code className="text-blue-500">let</code> carName ={" "}
                        <code className="text-red-700">&quot;Volvo&quot;;</code>
                        <br />
                        <code className="text-blue-500">let</code> carName;
                    </code>
                </Nota>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Aritmética JavaScript">
                <p>
                    Assim como acontece com a álgebra, você pode fazer
                    aritmética com variáveis JavaScript, usando operadores como
                    <InlineCode content="=" />e<InlineCode content="+" />:
                </p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-500">let</code> x ={" "}
                        <code className="text-red-500">5 </code>+
                        <code className="text-red-500"> 2 </code>+
                        <code className="text-red-500"> 3</code>;
                    </code>
                </Codigo>
                <p className="p-5">
                    Você também pode adicionar &quot;strings&quot;, mas strings
                    serão concatenadas:
                </p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-500">let</code> x ={" "}
                        <code className="text-red-700">&quot;John&quot; </code>+
                        <code className="text-red-700"> &quot; &quot; </code>+
                        <code className="text-red-700"> &quot;Doe&quot;</code>;
                    </code>
                </Codigo>
                <p className="p-5">Tente também isto:</p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-500">let</code> x ={" "}
                        <code className="text-red-700">&quot;5&quot; </code>+
                        <code className="text-red-500"> 2 </code>+
                        <code className="text-red-500"> 3</code>;
                    </code>
                </Codigo>
                <Nota titulo="Nota">
                    <p>
                        Se você colocar um número entre aspas, o resto dos
                        números serão tratados como strings e concatenados.
                    </p>
                </Nota>
                <p className="p-5">Agora tente isso:</p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-500">let</code> x ={" "}
                        <code className="text-red-500"> 2 </code>+
                        <code className="text-red-500"> 3 </code>+
                        <code className="text-red-700"> &quot;5&quot;</code>;
                    </code>
                </Codigo>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="O cifrão em JavaScript $">
                <p>
                    Como o JavaScript trata o cifrão como uma letra, os
                    identificadores que contêm $ são nomes de variáveis válidos:
                </p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-500">let</code> $ ={" "}
                        <code className="text-red-700">
                            {" "}
                            &quot;Olá Mundo!&quot;
                        </code>
                        ;
                        <br />
                        <code className="text-blue-500">let</code> $$$ ={" "}
                        <code className="text-red-500"> 2</code>;
                        <br />
                        <code className="text-blue-500">let</code> $myMoney ={" "}
                        <code className="text-red-500"> 5</code>;
                    </code>
                </Codigo>
                <p className="p-5">
                    Usar o cifrão não é muito comum em JavaScript, mas os
                    programadores profissionais costumam usá-lo como um alias
                    para a função principal em uma biblioteca JavaScript.
                </p>
                <p className="p-5">
                    Na biblioteca JavaScript jQuery, por exemplo, a função
                    principal
                    <InlineCode content="$" /> é usada para selecionar elementos
                    HTML. Em jQuery
                    <InlineCode content='$("p");' /> significa &quot;selecionar
                    todos os p elementos&quot;.
                </p>
            </TextoComponent>
            <Separador />
            <TextoComponent titulo="Sublinhado JavaScript (_)">
                <p>
                    Como o JavaScript trata o sublinhado como uma letra, os
                    identificadores que contêm _ são nomes de variáveis válidos:
                </p>
                <Codigo titulo="Exemplo">
                    <code>
                        <code className="text-blue-500">let</code> _lastName ={" "}
                        <code className="text-red-700">
                            {" "}
                            &quot;Johnson&quot;
                        </code>
                        ;
                        <br />
                        <code className="text-blue-500">let</code> _x ={" "}
                        <code className="text-red-500"> 2</code>;
                        <br />
                        <code className="text-blue-500">let</code> _100 ={" "}
                        <code className="text-red-500"> 5</code>;
                    </code>
                </Codigo>
                <p className="p-5">
                    Usar o sublinhado não é muito comum em JavaScript, mas um
                    costume entre programadores profissionais é usá-lo como um
                    alias para variáveis &quot;privadas (ocultas)&quot;.
                </p>
            </TextoComponent>
            <TextoComponent>
                <div className="flex justify-between">
                    <Link
                        to="/js-comentarios"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Anterior
                    </Link>
                    <Link
                        to="/js-let"
                        className="p-2 text-lg antialiased font-semibold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
                    >
                        Próximo
                    </Link>
                </div>
            </TextoComponent>
        </div>
    );
}

export default JSVariables;
