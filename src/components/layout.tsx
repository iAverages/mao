import Head from "next/head";
import { ReactNode } from "react";
import Nav from "./nav";

interface LayoutProps {
    title?: string;
    desc?: string;
    children: ReactNode[] | ReactNode;
}

const Layout = ({ children, title, desc }: LayoutProps) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#633194" />
                <meta name="description" content={desc ? desc : "Useful set of utility tools"} />
                <meta property="og:image" content="https://cdn.danielraybone.com/screenshots/yin.gif" />
                <link rel="icon" href="https://cdn.danielraybone.com/screenshots/favicon.ico" />
                <title>{title ? title + " | Mao" : "Mao Utilities"}</title>
            </Head>

            {/* The nav component wraps has the Drawer in daisyui needs the content */}
            <Nav>
                <div className="h-full p-5">{children}</div>
            </Nav>
        </>
    );
};

export default Layout;
