export default function Repeticao1() {

    const listaAprovados = [
        'Pedro',
        'João',
        'Ana',
        'Beatriz',
        'Carla',
        'Juliana',
        'Mariana'
    ];

    function render1() {
        const items = [];

        for (let i = 0; i < listaAprovados.length; i++) {
            items.push(<li key={i}>{listaAprovados[i]}</li>)
        }

        return items;
    }

    function render2() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-8/10 p-10">
                <ul>
                    {render2()}
                </ul>
            </div>
        </div>
    );
}