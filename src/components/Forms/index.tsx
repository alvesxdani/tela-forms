import { useForm, SubmitHandler } from "react-hook-form";
import { DivForm, FormsContent, MsgForms } from "./style";
import { AiOutlineWarning } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import MaskedInput from 'react-text-mask';


{
  /* Dados necessários :
   * Nome (required)
   * E-mail (required)
   * Tel com DDD, válido (required)
   * Bairro de interesse (select)
   * Período para contato (select) - manhã, tarde e noite
   * Autoriza contato por tel (checkbox)
   */
}

interface FormInputs {
  fullName: string;
  userEmail: string;
  userTel: string;
  interBairro: string;
  periodoContato: string;
  userAutorization: boolean;
}

const schema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("O campo nome é obrigatório.")
      .matches(
        /(?=^.{2,60}$)^[A-ZÀÁÂĖÈÉÊÌÍÒÓÔÕÙÚÛÇ][a-zàáâãèéêìíóôõùúç]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/,
        "Nome inválido."
      ),
    userEmail: yup
      .string()
      .email("Formato de e-mail inválido.")
      .required("O campo e-mail é obrigatório.")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "E-mail inválido"
      ),
    userTel: yup
      .string()
      .required("O campo Telefone é obrigatório.")
      .phone("BR", true, "Número de telefone inválido."),
    interBairro: yup
      .string()
      .required('O campo "Bairro de interesse" é obrigatório.'),
    periodoContato: yup
      .string()
      .required('O campo "Período p/ contato" é obrigatório.'),
    userAutorization: yup
    .bool()
  })
  .required();

const chooseBairros = [
  { label: "", value: "" },
  { label: "Bairro 1", value: "Bairro 1" },
  { label: "Bairro 2", value: "Bairro 2" },
  { label: "Bairro 3", value: "Bairro 3" },
];

const periodosPContato = [
  { label: "", value: "" },
  { label: "Manhã", value: "Manhã" },
  { label: "Tarde", value: "Tarde" },
  { label: "Noite", value: "Noite" },
];


const Forms = (props: any): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setValue,
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data: FormInputs) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <FormsContent>
      <h1>Não encontrou o que procurava?</h1>
      <span>Preencha o formulário e retornaremos o contato.</span>

      {/* Inputs */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <DivForm>
          <label>Nome: </label>
          <input {...register("fullName")} 
          onChange={(e) =>
            setValue("fullName", e.target.value, { shouldValidate: true })
          }
          placeholder="Seu nome completo" />
        </DivForm>

        <DivForm>
          <label>E-mail: </label>
          <input
            {...register("userEmail")}
            onChange={(e) =>
              setValue("userEmail", e.target.value, { shouldValidate: true })
            }
            placeholder="Seu melhor e-mail"
          />
        </DivForm>

        <DivForm>
          <label>Telefone: </label>
          <MaskedInput 
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
            {...register("userTel")}
            onChange={(e) =>
              setValue("userTel", e.target.value, { shouldValidate: true })
            }
            placeholder="(99) 99999-9999"
          />
        </DivForm>

        <DivForm>
          <label>Bairro de interesse:</label>
          <select
            {...register("interBairro")}
            onChange={(e) =>
              setValue("interBairro", e.target.value, { shouldValidate: true })
            }
          >
            {chooseBairros.map((item, index) => (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            ))}
          </select>
        </DivForm>

        <DivForm>
          <label>Período p/ contato:</label>
          <select
            {...register("periodoContato")}
            onChange={(e) =>
              setValue("periodoContato", e.target.value, { shouldValidate: true })
            }
          >
            {periodosPContato.map((item, index) => (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            ))}
          </select>
        </DivForm>

        <DivForm>
          <label>Autoriza o contato por telefone?</label>
          <input 
          {...register("userAutorization")} 
          type="checkbox"
          />
        </DivForm>

        {/* Erros */}
        {errors.fullName?.message && (
          <MsgForms>
            <AiOutlineWarning
              size={20}
              style={{ marginRight: "0.9rem", color: "#e90a0a" }}
            />
            {errors.fullName?.message}
          </MsgForms>
        )}

        {errors.userEmail?.message && (
          <MsgForms>
            <AiOutlineWarning
              size={20}
              style={{ marginRight: "0.9rem", color: "#e90a0a" }}
            />
            {errors.userEmail?.message}
          </MsgForms>
        )}

        {errors.userTel?.message && (
          <MsgForms>
            <AiOutlineWarning
              size={20}
              style={{ marginRight: "0.9rem", color: "#e90a0a" }}
            />
            {errors.userTel?.message}
          </MsgForms>
        )}

        {errors.interBairro?.message && (
          <MsgForms>
            <AiOutlineWarning
              size={20}
              style={{ marginRight: "0.9rem", color: "#e90a0a" }}
            />
            {errors.interBairro?.message}
          </MsgForms>
        )}

        {errors.periodoContato?.message && (
          <MsgForms>
            <AiOutlineWarning
              size={20}
              style={{ marginRight: "0.9rem", color: "#e90a0a" }}
            />
            {errors.periodoContato?.message}
          </MsgForms>
        )}

        {isSubmitSuccessful && (
          <MsgForms>
            <BsFillCheckCircleFill 
            size={20}
            style={{ marginRight: "0.9rem", color: "#00ca00" }}
          />
            Enviado!
          </MsgForms>
        )}

        <DivForm>
          <input type="submit" className="enviar" />
        </DivForm>
      </form>
    </FormsContent>
  );
};

export default Forms;
