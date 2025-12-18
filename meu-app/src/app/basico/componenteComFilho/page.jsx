
import Lista from "../../../../components/lista/page"; 
import Item from "../../../../components/item/page";
  
export default function ComponenteComFilhos() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-8/10 p-10">
                <Lista>
                    <Item conteudo="Item 22"></Item>
                    <Item conteudo="Item 23"></Item>
                    <Item conteudo="Item 24"></Item>
                </Lista>
            </div>
        </div>
    );
}