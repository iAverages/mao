import { DetailedHTMLProps, TextareaHTMLAttributes, useRef } from "react";

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    selectOnClick?: boolean;
}

const Textarea = ({ className = "", selectOnClick, children, ...props }: TextAreaProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleClick = () => {
        if (selectOnClick) {
            textAreaRef.current?.select();
        }
    };

    return (
        <textarea
            ref={textAreaRef}
            onClick={handleClick}
            className={
                className +
                " w-full resize-none rounded-lg border border-none border-gray-600 bg-neutral p-2.5 text-sm text-white outline-none duration-100 ease-in-out hover:shadow-selected-sm focus:shadow-selected "
            }
            {...props}
        >
            {children}
        </textarea>
    );
};

export default Textarea;
