
export default function SomaUm(props) {

    // props.numero++;
    
    return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-8/10 p-10">
        <h1 className="text-3xl font-bold text-center">props.numero = {props.numero + 1}</h1>
      </div>
    </div>
  );
}
