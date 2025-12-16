
export default function Title(props) {
    
    return props.pequeno ? (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="w-8/10 p-10">
                    <h1 className="text-4xl font-bold text-center">{props.principal}</h1>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="w-8/10 p-10">
                    <h1 className="text-4xl font-bold text-center">{props.secundario}</h1>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="w-8/10 p-10">
                    <h1 className="text-2xl font-light text-center">{props.principal}</h1>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="w-8/10 p-10">
                    <h1 className="text-2xl font-light text-center">{props.secundario}</h1>
                </div>
            </div>
        </>
    );
}