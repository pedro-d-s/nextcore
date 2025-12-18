
export default function SomentePar(props) {

     const isPar = props.numero % 2 === 0;

     return isPar ? <div className="text-3xl font-bold text-center">{props.numero}</div> : null;

    // if (props.numero % 2 === 0) {
    //     return <div className="text-3xl font-bold text-center">{props.numero}</div>;
    // }
    // else {
    //     return null;
    // }
}