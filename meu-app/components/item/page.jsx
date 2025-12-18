
export default function Item(props) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-8/10 p-10">
                <li>{props.conteudo}</li>
            </div>
        </div>
    );
}