import Link from "next/link";

const NavItems = ({ isDrawer = false }: { isDrawer?: boolean }) => (
    <>
        {isDrawer && (
            <li>
                <Link href="/">Home</Link>
            </li>
        )}
        <li>
            <Link href="https://github.com/iAverages/mao">GitHub</Link>
        </li>
    </>
);

const Nav: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="drawer">
            <input id="nav-header" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="navbar w-full bg-primary">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="nav-header" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">
                        <Link href={"/"}>Mao Utilities</Link>
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            <NavItems />
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="nav-header" className="drawer-overlay"></label>
                <ul className="menu w-80 overflow-y-auto bg-base-100 p-4">
                    <NavItems isDrawer />
                </ul>
            </div>
        </div>
    );
};

export default Nav;
