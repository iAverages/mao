import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

const Textarea = ({
    className = "",
    children,
    ...props
}: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>) => {
    return (
        <textarea
            className={
                className +
                ` w-full resize-none 
                rounded-lg 
                border 
                border-none 
                border-gray-600 
                bg-neutral-700 
                p-2.5 
                text-sm 
                text-white 
                outline-none 
                duration-100 
                ease-in-out 
                hover:shadow-selected-sm
                focus:shadow-selected`
            }
            {...props}
        >
            {children}
        </textarea>
    );
};

export default Textarea;
