export default function Style(props) {
    
    return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-8/10 p-10">
        <h1 className="text-3xl font-bold text-center" style={{
            backgroundColor: props.number >= 0 ? "green" : "red",
            color: props.color,
            textAlign: props.side,
            padding: props.p,
            borderStyle: props.borderStyle,
            borderRadius: props.borderRadius,
            borderWidth: "2px",
            borderColor: props.borderColor ? "black" : "red"
            }}>{props.text}</h1>
      </div>
    </div>
    );
}