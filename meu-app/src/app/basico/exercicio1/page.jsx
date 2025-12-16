
export default function Exercicio1() {

    const fim = 12;

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-8/10 p-10">
                <p className="text-4xl font-bold text-center">Formas de escrever listas</p>
                <hr />
                <p className="text-4xl font-bold text-center">Lista 1:</p>
                <p className="text-3xl font-bold text-center">{gerarLista1()}</p>
                <hr />
                <p className="text-4xl font-bold text-center">Lista 2:</p>
                <p className="text-3xl font-bold text-center">{gerarLista2(fim)}</p>
            </div>
        </div>
    );
}

function gerarLista2(fim) {

    const lista = [];

    for (let i = 1; i <= fim; i++) {
        lista.push(<div>{i}</div>)
    }

    return lista;
}

function gerarLista1() {

    const Lista = [
        <p className="text-3xl font-bold text-center">1</p>,
        <p className="text-3xl font-bold text-center">2</p>,
        <p className="text-3xl font-bold text-center">3</p>,
        <p className="text-3xl font-bold text-center">4</p>,
        <p className="text-3xl font-bold text-center">5</p>,
        <p className="text-3xl font-bold text-center">6</p>,
        <p className="text-3xl font-bold text-center">7</p>,
        <p className="text-3xl font-bold text-center">8</p>,
        <p className="text-3xl font-bold text-center">9</p>,
        <p className="text-3xl font-bold text-center">10</p>
    ];

    return Lista;
}