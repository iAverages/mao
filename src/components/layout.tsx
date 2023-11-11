"use client";

import { Braces, Cuboid, Dna, Github, Menu, Ruler } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet";
import { cn } from "~/utils/ui";

export type SidebarProps = {
    children: ReactNode;
};

const items = [
    {
        name: "JSON Pretty Print",
        icon: <Braces />,
        to: "/json-pretty-print",
    },
    {
        name: "Base64 Encode/Decode",
        icon: <Cuboid />,
        to: "/base64",
    },
    {
        name: "URL Encode/Decode",
        icon: <Dna />,
        to: "/url-encode",
    },
    {
        name: "String Length",
        icon: <Ruler />,
        to: "/string-length",
    },
];

const SidebarItem = ({ children, ...props }: LinkProps & { children: ReactNode }) => {
    const pathname = usePathname();

    return (
        <Link {...props}>
            <Button
                variant={"ghost"}
                className={cn("w-full justify-start gap-2", {
                    "bg-accent": props.href === pathname,
                })}
                size={"lg"}
            >
                {children}
            </Button>
        </Link>
    );
};

export const MobileSidebar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger className={"flex"}>
                    <Menu className={"m-0 block p-0 lg:hidden"} />
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle>Mao</SheetTitle>
                        <SheetDescription className={"flex flex-col gap-2"}>
                            {items.map((item) => (
                                <SidebarItem key={item.name} href={item.to}>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </SidebarItem>
                            ))}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

const DesktopSidebar = () => {
    return (
        <div
            className={
                "sticky top-0 hidden w-full min-w-fit max-w-xs flex-col gap-2 border-r-2 p-4 lg:flex"
            }
        >
            {items.map((item) => (
                <SidebarItem key={item.name} href={item.to}>
                    {item.icon}
                    <span>{item.name}</span>
                </SidebarItem>
            ))}
            <div className={"mt-auto flex w-full gap-2"}>
                <ThemeToggle />
                <a href={"https://github.com/iAverages/mao"} target={"_blank"}>
                    <Button variant={"outline"} className={"gap-2"} size={"icon"}>
                        <Github />
                    </Button>
                </a>
            </div>
        </div>
    );
};

export const Sidebar = ({ children }: SidebarProps) => {
    return (
        <div className={"flex h-full flex-grow flex-col"}>
            <div className={"flex items-center gap-2"}>
                <MobileSidebar />
            </div>
            <div className={"flex flex-grow"}>
                <DesktopSidebar />
                <div className={"w-full"}>{children}</div>
            </div>
        </div>
    );
};

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Sidebar>
            <div className={"h-full px-4 py-6"}>{children}</div>
        </Sidebar>
    );
};
