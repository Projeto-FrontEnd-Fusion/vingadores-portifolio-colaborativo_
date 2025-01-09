import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends ComponentProps<"input"> {
  id: string;
  placeholder: string;
  label: string;
  error?: string;
}

const Input = ({ id, placeholder, label, error, ...props }: InputProps) => {
  const { register } = useFormContext();

  return (
    <div className="w-full mb-4 md:flex-1">
      <label
        htmlFor={id}
        className="block text-white text-sm font-medium mb-1">
        {label}
      </label>


      <input
        id={id}
        placeholder={placeholder}
        {...register(id)}
        {...props}
        className="w-full px-4 py-2 bg-transparent placeholder-gray-400 text-white border-solid border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <p className="text-white text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
