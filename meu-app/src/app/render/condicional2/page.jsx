import If from "../../../../components/if/page";

export default function Condicional2() {

    const numero = 7;
    
    return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-8/10 p-10">
        <If teste={numero % 2 === 0}>
          <p>PAR!!</p>
        </If>

        <If teste={numero % 2 === 1}>
          <p>ÍMPAR!!</p>
        </If>
      </div>
    </div>
  );
}