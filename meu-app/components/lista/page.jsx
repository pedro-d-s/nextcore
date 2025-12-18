
export default function Lista(props) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-8/10 p-10">
                <ul>
                    {props.children}
                </ul>
            </div>
        </div>
    );
}