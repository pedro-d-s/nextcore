
export default function jsx3 () {
    const subtitle = "O arquivo de número 4!";

    const valorOperacao = (
        <div className="flex flex-col justify-center items-center">
            <div className="w-8/10 p-10">
                <p className="text-3xl font-bold text-center">{(174 + 340 + 283) * 746}</p>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-8/10 p-10">
                <p className="text-3xl font-bold text-center">JSX 04</p>
                <p className="text-3xl font-bold text-center">{subtitle}</p>
                <p className="text-3xl font-bold text-center">{20 * 4}</p>
                <p className="text-3xl font-bold text-center">{Math.max(20, 28, 31, 19, 13, 14, 16)}</p>
                <p className="text-3xl font-bold text-center">{entre(6, 2, 17)}</p>
                {valorOperacao}
            </div>
        </div>
    );
}

function entre (valor, min, max) {
    if (valor >= min && valor <= max) {
        return "Sim. Esse número está entre o limite mínimo e máximo definidos.";
    }
    else {
        return "Não. Esse número é maior ou menor que os limites definidos.";
    }
}