import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

const Textarea = ({
    className,
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
                "  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            }
            {...props}
        >
            {children}
        </textarea>
    );
};

export default Textarea;
