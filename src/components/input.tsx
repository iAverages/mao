import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({ type = "text", className, ...rest }: InputProps) => (
    <input
        type={type}
        className={`input w-full resize-none rounded-lg border border-none border-gray-600 bg-neutral p-2.5 text-sm text-white outline-none duration-100 ease-in-out hover:shadow-selected-sm focus:shadow-selected ${className}`}
        {...rest}
    />
);

export default Input;
