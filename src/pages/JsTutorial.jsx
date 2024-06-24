function JsTutorial() {
    return (
        <div className="w-full mt-20 ml-48 overflow-auto bg-white ">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Variáveis Javascript
            </h2>
            <div className="p-5 bg-green-500 bg-opacity-20">
                <h3 className="text-xl font-semibold">
                    Variáveis são Containers para Armazenar Dados
                </h3>
                <p>Variáveis JavaScript podem ser declaradas de 4 maneiras:</p>
                <ul className="list-disc ml-7">
                    <li>Automaticamente</li>
                    <li>
                        Usando
                        <code className="px-1 text-red-600 bg-orange-100">
                            var
                        </code>
                    </li>
                    <li>
                        Usando
                        <code className="px-1 text-red-600 bg-orange-100">
                            let
                        </code>
                    </li>
                    <li>
                        Usando
                        <code className="px-1 text-red-600 bg-orange-100">
                            const
                        </code>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-5 px-5 pt-5">
                <p>
                    Neste primeiro exemplo,
                    <code className="px-1 text-red-600 bg-orange-100">x</code>,
                    <code className="px-1 text-red-600 bg-orange-100">y</code>,
                    e<code className="px-1 text-red-600 bg-orange-100">z</code>{" "}
                    são variáveis não declaradas.
                </p>
                <p>
                    Elas são declaradas automaticamente ao serem usadas pela
                    primeira vez:
                </p>
            </div>
            <div className="p-3 m-3 my-5 rounded-md bg-slate-300">
                <h3 className="py-3 text-2xl">Exemplo</h3>
                <div className="p-3 bg-white border-l-[6px] border-emerald-500">
                    <code>x = 5;</code>
                    <br />
                    <code>y = 6;</code>
                    <br />
                    <code>z = x + y;</code>
                </div>
            </div>
            <div className="p-5 bg-amber-100">
                <h2 className="text-3xl font-semibold text-slate-800">Nota</h2>
                <p>
                    É considerado uma boa prática de programação de sempre
                    declarar suas variáveis antes de usá-las.
                </p>
            </div>
            <div className="px-5 py-5 ">
                <p>Pelos exemplos você pode imaginar que:</p>
                <ul className="pl-8 list-disc">
                    <li>
                        <code className="px-1 mr-1 text-red-600 bg-orange-100">
                            x
                        </code>
                        armazena o valor de 5
                    </li>
                    <li>
                        <code className="px-1 mr-1 text-red-600 bg-orange-100">
                            y
                        </code>
                        armazena o valor de 6
                    </li>
                    <li>
                        <code className="px-1 mr-1 text-red-600 bg-orange-100">
                            z
                        </code>
                        armazena o valor de 11
                    </li>
                </ul>
            </div>
            <div className="p-3 m-3 rounded-md bg-slate-300">
                <h3 className="py-3 text-2xl">Exemplo usando var</h3>
                <div className="p-3 bg-white border-l-[6px] border-emerald-500">
                    <code>var x = 5;</code>
                    <br />
                    <code>var y = 6;</code>
                    <br />
                    <code>var z = x + y;</code>
                </div>
            </div>
            <div className="p-5 bg-amber-100">
                <h2 className="text-3xl font-semibold text-slate-800">Nota</h2>
                <p>
                    A palavra-chave
                    <code className="px-1 mx-1 text-red-600 bg-orange-100">
                        var
                    </code>
                    foi usada em todo o JavaScript de 1995 até 2015.
                </p>
                <p>
                    As palavras-chave
                    <code className="px-1 mx-1 text-red-600 bg-orange-100">
                        let
                    </code>
                    e
                    <code className="px-1 mx-1 text-red-600 bg-orange-100">
                        const
                    </code>
                    foram adicionadas ao JavaScript em 2015.
                </p>
                <p>
                    A palavra-chave
                    <code className="px-1 mx-1 text-red-600 bg-orange-100">
                        var
                    </code>
                    deve ser usada apenas em códigos escritos para navegadores
                    antigos.
                </p>
            </div>
            <div className="p-3 m-3 rounded-md bg-slate-300">
                <h3 className="py-3 text-2xl">Exemplo usando let</h3>
                <div className="p-3 bg-white border-l-[6px] border-emerald-500">
                    <code>let x = 5;</code>
                    <br />
                    <code>let y = 6;</code>
                    <br />
                    <code>let z = x + y;</code>
                </div>
            </div>
            <div className="p-3 m-3 rounded-md bg-slate-300">
                <h3 className="py-3 text-2xl">Exemplo usando const</h3>
                <div className="p-3 bg-white border-l-[6px] border-emerald-500">
                    <code>const x = 5;</code>
                    <br />
                    <code>const y = 6;</code>
                    <br />
                    <code>const z = x + y;</code>
                </div>
            </div>
            <div className="p-3 m-3 rounded-md bg-slate-300">
                <h3 className="py-3 text-2xl">Exemplo misto</h3>
                <div className="p-3 bg-white border-l-[6px] border-emerald-500">
                    <code>const preco1 = 5;</code>
                    <br />
                    <code>const preco2 = 6;</code>
                    <br />
                    <code>let total = preco1 + preco2;</code>
                </div>
            </div>
            <div className="flex flex-col gap-5 p-5">
                <p>
                    As duas variáveis
                    <code className="px-1 mx-1 text-red-600 bg-orange-100">
                        preco1
                    </code>
                    e
                    <code className="px-1 mx-1 text-red-600 bg-orange-100">
                        preco2
                    </code>{" "}
                    são declaradas com a palavra-chave
                    <code className="px-1 ml-1 text-red-600 bg-orange-100">
                        const
                    </code>
                    .
                </p>
                <p>Estes valores são constantes e não podem ser alterados.</p>
                <p>
                    A variável{" "}
                    <code className="px-1 mx-1 text-red-600 bg-orange-100">
                        total
                    </code>{" "}
                    foi declarada com a palavra-chave{" "}
                    <code className="px-1 ml-1 text-red-600 bg-orange-100">
                        let
                    </code>
                    .
                </p>
                <p>
                    A variável{" "}
                    <code className="px-1 mx-1 text-red-600 bg-orange-100">
                        total
                    </code>{" "}
                    pode ter seu valor alterado.
                </p>
            </div>
            <div className="p-5 bg-amber-100">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Quando devo usar var, let ou const?
                </h2>
                <ol className="flex flex-col gap-5 px-5 pt-5 list-decimal">
                    <li>
                        <p>Sempre declare as variáveis.</p>
                    </li>
                    <li>
                        <p>
                            Sempre use
                            <code className="px-1 mx-1 text-red-600 bg-orange-100">
                                const
                            </code>
                            se o valor da variável não deve ser alterado.
                        </p>
                    </li>
                    <li>
                        <p>
                            Sempre use
                            <code className="px-1 mx-1 text-red-600 bg-orange-100">
                                const
                            </code>
                            se o tipo da variável não deve ser alterado. (Arrays
                            e objetos)
                        </p>
                    </li>
                    <li>
                        <p>
                            Apenas use
                            <code className="px-1 mx-1 text-red-600 bg-orange-100">
                                let
                            </code>
                            se você não pode usar{" "}
                            <code className="px-1 mx-1 text-red-600 bg-orange-100">
                                const
                            </code>
                            .
                        </p>
                    </li>
                    <li>
                        <p>
                            Apenas use
                            <code className="px-1 mx-1 text-red-600 bg-orange-100">
                                var
                            </code>
                            se você <b>DEVE</b> suportar navegadores antigos.
                        </p>
                    </li>
                </ol>
            </div>
            <div className="flex flex-col gap-5 p-5">
                <h2 className="text-3xl text-slate-800">
                    Assim como na Álgebra
                </h2>
                <p>Assim como na álgebra, as variáveis contêm valores:</p>
            </div>
            <div className="p-3 m-3 rounded-md bg-slate-300">
                <div className="p-3 bg-white border-l-[6px] border-emerald-500">
                    <code>let x = 5;</code>
                    <br />
                    <code>let y = 6;</code>
                </div>
            </div>
            <div className="flex flex-col gap-5 p-5">
                <p>
                    Assim como na álgebra, variáveis são usadas em expressões:
                </p>
            </div>
            <div className="p-3 m-3 rounded-md bg-slate-300">
                <div className="p-3 bg-white border-l-[6px] border-emerald-500">
                    <code>let z = x + y;</code>
                </div>
            </div>
            <p className="p-5">
                A partir do exemplo acima, você pode adivinhar que o total é
                calculado como 11.
            </p>
            <div className="flex flex-col gap-5 p-5">
                <h2 className="text-3xl text-slate-800">
                    Identificadores JavaScript
                </h2>
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
            </div>
            <div className="p-5 bg-amber-100">
                <h2 className="text-3xl font-semibold text-slate-800">Nota</h2>
                <p>
                    Os identificadores JavaScript diferenciam maiúsculas de
                    minúsculas.
                </p>
            </div>
            <div className="flex flex-col gap-5 p-5">
                <h2 className="text-3xl text-slate-800">
                    O Operador de Atribuição
                </h2>
                <p>
                    Em JavaScript, o sinal de igual (
                    <code className="px-1 text-red-600 bg-orange-100">=</code>)
                    é um operador de “atribuição”, não um operador “igual a”.
                </p>
                <p>
                    Isso é diferente da álgebra. O seguinte não faz sentido em
                    álgebra:
                </p>
            </div>
            <div className="p-3 m-3 rounded-md bg-slate-300">
                <div className="p-3 bg-white border-l-[6px] border-emerald-500">
                    <code>x = x + 5;</code>
                </div>
            </div>
            <p className="p-5">
                Em JavaScript, porém, faz todo o sentido: atribui o valor de x +
                5 a x.
            </p>
            <p className="px-5 pb-5">
                (Ele calcula o valor de x + 5 e coloca o resultado em x. O valor
                de x é incrementado em 5.)
            </p>
            <div className="p-5 bg-amber-100">
                <h2 className="text-3xl font-semibold text-slate-800">Nota</h2>
                <p>
                    O operador &quot;igual a&quot; é escrito com dessa maneira{" "}
                    <code className="px-1 text-red-600 bg-orange-100">==</code>{" "}
                    em JavaScript
                </p>
            </div>
            <div className="flex flex-col gap-5 p-5">
                <h2 className="text-3xl text-slate-800">
                    Tipos de dados JavaScript
                </h2>
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
            </div>
        </div>
    );
}

export default JsTutorial;
