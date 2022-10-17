import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
    title?: string;
    desc?: string;
    children: ReactNode[] | ReactNode;
}

const Layout = ({ children, title, desc }: LayoutProps) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#633194" />
                <meta
                    name="description"
                    content={desc ? desc : "Useful set of utility tools"}
                />
                <meta
                    property="og:image"
                    content="https://cdn.danielraybone.com/screenshots/yin.gif"
                />
                <link
                    rel="icon"
                    href="https://cdn.danielraybone.com/screenshots/favicon.ico"
                />
                <title>{title ? title + " | Mao" : "Mao Utilities"}</title>
            </Head>
            {children}
        </>
    );
};

export default Layout;
