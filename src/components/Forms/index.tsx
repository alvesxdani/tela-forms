import { useForm, SubmitHandler } from "react-hook-form";
import { DivForm, FormsContent } from "./style";

type FormValues = {
  fullName: string;
  userEmail: string;
  userTel: number;
  dateBirth: number;
  userState: string;
  bairroInteresse: string;
  periodoContato: string;
}

const Forms = (props:any): JSX.Element => {
  const {register, handleSubmit, formState: { errors }} = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  return(
    <FormsContent>
      <h1>Não encontrou o que procurava?</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <DivForm>
        <label>Nome: </label>
        <input {...register("fullName")} placeholder="Seu nome completo"/>
        </DivForm>

        <DivForm>
        <label>E-mail: </label>
        <input {...register("userEmail")} placeholder="Seu melhor e-mail" />
        </DivForm>

        <DivForm>
        <input type="submit" className="enviar"/>
        </DivForm>
      </form>

    </FormsContent>
  );
}

export default Forms;