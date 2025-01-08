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
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-white text-sm font-medium mb-1"
        style={{ color: 'white' }} // Forçar a cor branca diretamente
      >
        {label}
      </label>


      {/* Input com fundo branco e texto cinza */}
      <input
        id={id}
        placeholder={placeholder}
        {...register(id)}
        {...props}
        className="w-full px-4 py-2 text-gray-700 bg-white border border-[rgba(252,252,253,0.33)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Mensagem de erro */}
      {error && <p style={{ color: 'white' }} className="text-white text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;