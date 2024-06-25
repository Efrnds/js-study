import Codigo from "../components/Codigo";
import Nota from "../components/Nota";
import InfoBox from "../components/InfoBox";
import InlineCode from "../components/InlineCode";
import TextoComponent from "../components/TextComponent";

function JSIntroducao() {
    return (
        <div className="w-full mt-20 ml-48 overflow-auto bg-white">
            <h2 className="p-5 text-3xl font-semibold text-slate-800">
                Introdução ao Javascript
            </h2>
            <InfoBox>
                Essa página contém alguns exemplos do que o JavaScript pode
                fazer
            </InfoBox>
            <TextoComponent titulo="JavaScript pode alterar o conteúdo HTML">
                <p>
                    Um dos vários métodos do JavaScript é o{" "}
                    <InlineCode content="getElementById()" />.
                </p>
                <p>O exemplo abaixo &quot;procura&quot; um elemento HTML (com id=&quot;demo&quot;), e altera o conteúdo do elemento (HTML interno) para &quot;Olá Javascript&quot;.</p>
            </TextoComponent>
            <Codigo titulo="Exemplo"></Codigo>
            <Nota>JavaScript aceita tanto aspas simples quanto aspas duplas:</Nota>
        </div>
    );
}

export default JSIntroducao;
