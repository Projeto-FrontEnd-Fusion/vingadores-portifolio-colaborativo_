import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "../../schema/schema-validation-forms";
import Input from "../Input/Input";
import { validVacancy } from "../../schema/schema-validation-forms";

const Forms = () => {
  const methods = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full max-w-lg py-5 px-5 flex flex-col gap-6 text-white bg-gradient-to-r from-[#FCFCFD54] to-[#646DF036] rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Nome"
            type="text"
            id="name"
            placeholder="Nome"
            className="bg-white text-white border-[rgba(252,252,253,0.33)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            error={errors.name?.message}
          />

          <Input
            label="Sobrenome"
            type="text"
            id="lastName"
            placeholder="Sobrenome"
            className="bg-transparent text-white border-[rgba(252,252,253,0.33)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            error={errors.lastName?.message}
          />
          
          <div className="col-span-2">
            <Input
              label="E-mail"
              type="email"
              id="email"
              placeholder="E-mail"
              className="bg-transparent text-white border border-[rgba(252,252,253,0.33)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              error={errors.email?.message}
            />
          </div>
        </div>

        <div>
          <label htmlFor="position" className="block text-sm font-medium py-2" style={{ color: '#FCFCFD' }}>
            Vaga desejada
          </label>
          <select
            id="position"
            defaultValue=""
            className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("position")}
          >
            <option value="" disabled className="text-gray-50">
              Selecione a vaga desejada...
            </option>
            {validVacancy.map((vacancy, index) => (
              <option value={vacancy} key={index}>
                {vacancy}
              </option>
            ))}
          </select>
          {errors.position && (
            <p style={{ color: 'white '}} className="text-white text-xs mt-1">{errors.position.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium py-2" style={{ color: '#FCFCFD' }}>
            Conte-nos sobre você
          </label>
          <textarea
            id="description"
            placeholder="Escreva um pouco sobre você!"
            className="w-full h-40 px-4 py-2 text-black border border-[rgba(252,252,253,0.33)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("description")}
          />
          {errors.description && (
            <p style={{ color: 'white '}} className="text-white text-xs mt-1">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          style={{ color: 'white '}}
          className="bg-button text-white w-full py-2 mt-4 text-center text-white rounded-md focus:ring-2"
        >
          Enviar formulário
        </button>
      </form>
    </FormProvider>
  );
};

export default Forms;