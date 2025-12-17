import SubDivisao from "../subDivisao/page";

export default function LinhaDivisao(props) {
    
    return (
        <div className="flex">
            <SubDivisao preta={props.preta}/>
            <SubDivisao preta={!props.preta}/>
            <SubDivisao preta={props.preta}/>
            <SubDivisao preta={!props.preta}/>
            <SubDivisao preta={props.preta}/>
            <SubDivisao preta={!props.preta}/>
            <SubDivisao preta={props.preta}/>
            <SubDivisao preta={!props.preta}/>
        </div>
  );
}