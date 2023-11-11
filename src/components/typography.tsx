import { type HTMLAttributes } from "react";

export function H1(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props} />
    );
}

export function H2(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
            {...props}
        />
    );
}

export function H3(props: HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />;
}
