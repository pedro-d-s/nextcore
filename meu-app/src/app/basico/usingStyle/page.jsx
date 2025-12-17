import Style from "../../../../components/estilo/page";

export default function UsingStyle() {
    
    return (
        <>
            <Style number={1} text="Positivo" color="white" side="left" p="10px" borderStyle="solid" borderRadius="5px" borderColor/>
            <Style number={-1} text="Negativo" color="blue" side="right" p="40px" borderStyle="solid" borderRadius="10px" borderColor/>
        </> 
  );
}