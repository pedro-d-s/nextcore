
import OutTitle from '../../../../components/title/page';

export default function usingTitle() {
    
    return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-8/10 p-10">
        <h1 className="text-3xl font-bold text-center">Abaixo usando título de outro lugar!</h1>

        <OutTitle
            principal="Faça seu Cadastro!"
            secundario="Informe seu nome completo"
            pequeno={false}
        />

        <OutTitle
            principal="Faça seu Login!"
            secundario="Informe seu email e senha"
            pequeno={true}
        />
      </div>
    </div>
  );
}
