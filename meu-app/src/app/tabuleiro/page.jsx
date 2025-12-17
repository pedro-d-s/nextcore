import LinhaDivisao from "../../../components/linhaDivisao/page";

export default function Tabuleiro() {
    
    return (
    <div className="flex flex-col h-dvh bg-gray-300 justify-center items-center">
      <div className="w-8/10 p-10 flex flex-col items-center">
        <h1 className="text-3xl mb-10 font-bold text-center">Tabuleiro</h1>

        <LinhaDivisao />
        <LinhaDivisao preta/>
        <LinhaDivisao />
        <LinhaDivisao preta/>
        <LinhaDivisao />
        <LinhaDivisao preta/>
        <LinhaDivisao />
        <LinhaDivisao preta/>
      </div>
    </div>
  );
}