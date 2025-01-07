import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "../../schema/schema-validation-forms";
import Input from "../Input/Input";
import { validVacancy } from "../../schema/schema-validation-forms";

const Forms = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormData) =>{
        console.log(data);
    };

    return (
        <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit(onSubmit)}>
            <Input 
                label="Nome" 
                type="text"
                id="name"
                placeholder="Nome"  
                {...register("name")} 
                error={errors.name?.message}
            />

            <Input 
                label="Sobrenome"
                type="text"
                id="lastName"
                placeholder="Sobrenome"
                {...register("lastName")}
                error={errors.lastName?.message}
            />

            <Input 
                label="E-mail"
                type="email"
                id="email"
                placeholder="E-mail"
                {...register("email")}
                error={errors.email?.message}
            />

            <div className="text-white">
                <label htmlFor="position">Vaga desejada</label>
                <select 
                    id="position"
                    defaultValue="" 
                    className="text-black" 
                    {...register("position")}
                    required
                >
                    <option value="" disabled>Selecione a vaga desejada...</option>
                    {validVacancy.map((vacancy, index) => (
                        <option value={vacancy} key={index}>{vacancy}</option>
                    ))}
                </select>
                {errors.position && <p>{errors.position.message}</p>}
            </div>

            <div>
                <label htmlFor="description">Conte-nos sobre você</label>
                <textarea
                    id="description"
                    placeholder="Escreva um pouco sobre você!"
                    {...register("description")} 
                />
                {errors.description && <p>{errors.description.message}</p>}
            </div>

            <button type="submit" className="bg-slate-400">Enviar formulário</button>
        </form>
    );
};

export default Forms;