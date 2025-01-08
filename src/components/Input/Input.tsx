import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends ComponentProps<"input"> {
  id: string;
  placeholder: string;
  label: string;
  error?: string;
};


const Input = ({ id, placeholder, label, error, ...props }: InputProps) => {
  const { register } = useFormContext()

  return (
    <div>
      <label htmlFor={id} >{label}</label>
      <input className="text-black" id={id} placeholder={placeholder} {...register(id)} {...props} />
      {error && <p>{error}</p>}
    </div>
  )
};

export default Input;
