import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input">{
   label: string;
   error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, id, ...props }, ref) => {
    return (
        <div>
            <label htmlFor={id} >{label}</label>
            <input {...props} id={id} ref={ref}/>
            {error && <p>{error}</p>}
        </div>
    )
} );
 
export default Input;