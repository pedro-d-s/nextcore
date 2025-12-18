
import listaProdutos from "../../../../data/listaProdutos";

export default function Repeticao2() {

    function renderizarLinhas() {
        return listaProdutos.map(produto => {

            return (
                <tr key={produto.id}>
                    <td className="border px-10 text-center bg-gray-100">{produto.id}</td>
                    <td className="border px-10 text-center bg-gray-100">{produto.nome}</td>
                    <td className="border px-10 text-center bg-gray-100">{produto.preco}</td> 
                </tr>
            )
        })
    } 

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-8/10 p-10 flex items-center justify-center">
                <table className="border">
                    <thead className="border">
                        <tr>
                            <th className="border px-10 bg-gray-200">Código</th>
                            <th className="border px-10 bg-gray-200">Nome</th>
                            <th className="border px-10 bg-gray-200">Preço</th>
                        </tr>
                    </thead>

                    <tbody>
                        {renderizarLinhas()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}